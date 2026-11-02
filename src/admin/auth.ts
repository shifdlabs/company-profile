import { reactive } from 'vue'

// Login CMS memakai akun SIS. Hanya user dengan access "company-profile-cms"
// (platform admin) yang boleh masuk. Access token (15 menit) disimpan di
// memori; refresh token (7 hari) di localStorage supaya sesi bertahan saat reload.

export const SIS_API_URL = (import.meta.env.VITE_SIS_API_URL ?? '').replace(/\/+$/, '')
export const CMS_ACCESS = 'company-profile-cms'

const REFRESH_KEY = 'shifd_cms_refresh_token'
// Perpanjang token sedikit sebelum benar-benar kedaluwarsa
const EXPIRY_MARGIN_MS = 30_000

interface Session {
  accessToken: string | null
  expiresAt: number
  name: string
  email: string
}

export const session = reactive<Session>({ accessToken: null, expiresAt: 0, name: '', email: '' })

export class AuthError extends Error {}

function readRefreshToken(): string | null {
  try {
    return localStorage.getItem(REFRESH_KEY)
  } catch {
    return null
  }
}

function writeRefreshToken(token: string | null) {
  try {
    if (token) localStorage.setItem(REFRESH_KEY, token)
    else localStorage.removeItem(REFRESH_KEY)
  } catch {
    // localStorage diblokir: sesi tetap jalan sampai tab ditutup
  }
}

// Baca payload JWT (tanpa verifikasi — verifikasi dilakukan di backend)
function decodeJwt(token: string): { exp?: number; name?: string; email?: string } {
  try {
    const base64 = (token.split('.')[1] ?? '').replace(/-/g, '+').replace(/_/g, '/')
    const padded = base64 + '='.repeat((4 - (base64.length % 4)) % 4)
    const bytes = Uint8Array.from(atob(padded), (c) => c.charCodeAt(0))
    return JSON.parse(new TextDecoder().decode(bytes))
  } catch {
    return {}
  }
}

function applyToken(accessToken: string) {
  const claims = decodeJwt(accessToken)
  session.accessToken = accessToken
  session.expiresAt = (claims.exp ?? 0) * 1000
  session.name = claims.name ?? ''
  session.email = claims.email ?? ''
}

function clearSession() {
  session.accessToken = null
  session.expiresAt = 0
  session.name = ''
  session.email = ''
}

async function sisPost<T>(path: string, body: unknown): Promise<T> {
  let res: Response
  try {
    res = await fetch(`${SIS_API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch {
    throw new AuthError('Tidak bisa terhubung ke server login.')
  }
  const json = await res.json().catch(() => ({}))
  if (!res.ok) throw new AuthError(json.error || 'Login gagal.')
  return json.data as T
}

export async function login(email: string, password: string) {
  const data = await sisPost<{ access_token: string; refresh_token: string; access?: string[] }>(
    '/api/auth/login',
    { email, password }
  )
  if (!data.access?.includes(CMS_ACCESS)) {
    // Token valid tapi bukan untuk CMS: jangan disimpan, langsung cabut sesinya
    sisPost('/api/auth/logout', { refresh_token: data.refresh_token }).catch(() => {})
    throw new AuthError('Akun ini tidak punya akses ke CMS artikel.')
  }
  writeRefreshToken(data.refresh_token)
  applyToken(data.access_token)
}

let refreshing: Promise<boolean> | null = null

// Tukar refresh token dengan access token baru. Akses dicek ulang setiap kali,
// jadi admin yang dicabut aksesnya ikut keluar.
export function refreshSession(): Promise<boolean> {
  if (refreshing) return refreshing
  refreshing = (async () => {
    const refreshToken = readRefreshToken()
    if (!refreshToken) return false
    try {
      const data = await sisPost<{ access_token: string; access?: string[] }>('/api/auth/refresh', {
        refresh_token: refreshToken,
      })
      if (!data.access?.includes(CMS_ACCESS)) {
        await logout()
        return false
      }
      applyToken(data.access_token)
      return true
    } catch {
      writeRefreshToken(null)
      clearSession()
      return false
    }
  })().finally(() => {
    refreshing = null
  })
  return refreshing
}

export async function ensureSession(): Promise<boolean> {
  if (session.accessToken && session.expiresAt - EXPIRY_MARGIN_MS > Date.now()) return true
  return refreshSession()
}

export async function logout() {
  const refreshToken = readRefreshToken()
  writeRefreshToken(null)
  clearSession()
  if (refreshToken) await sisPost('/api/auth/logout', { refresh_token: refreshToken }).catch(() => {})
}

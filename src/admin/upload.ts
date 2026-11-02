import { api } from './api'

const ACCEPTED = ['image/jpeg', 'image/png', 'image/webp']
const MAX_BYTES = 2 * 1024 * 1024
const MAX_WIDTH = 1600

// Perkecil ke lebar maks 1600px dan ubah ke WebP supaya halaman blog ringan.
// Kalau browser tidak bisa encode WebP atau hasilnya lebih besar, pakai file asli.
async function compress(file: File): Promise<Blob> {
  try {
    const bitmap = await createImageBitmap(file)
    const scale = Math.min(1, MAX_WIDTH / bitmap.width)
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(bitmap.width * scale)
    canvas.height = Math.round(bitmap.height * scale)
    canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    bitmap.close()
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/webp', 0.85))
    if (blob && blob.type === 'image/webp' && blob.size < file.size) return blob
  } catch {
    // fallback ke file asli
  }
  return file
}

// Upload gambar langsung ke bucket S3 artikel lewat presigned URL.
// Mengembalikan URL publik gambar.
export async function uploadImage(file: File): Promise<string> {
  if (!ACCEPTED.includes(file.type)) throw new Error('Format gambar harus JPG, PNG, atau WebP.')

  const blob = await compress(file)
  if (blob.size > MAX_BYTES) throw new Error('Ukuran gambar maksimal 2 MB.')

  const { uploadUrl, publicUrl } = await api.presignImage(blob.type)
  let res: Response
  try {
    res = await fetch(uploadUrl, { method: 'PUT', headers: { 'Content-Type': blob.type }, body: blob })
  } catch {
    throw new Error('Upload gambar gagal. Cek koneksi lalu coba lagi.')
  }
  if (!res.ok) throw new Error(`Upload gambar gagal (${res.status}).`)
  return publicUrl
}

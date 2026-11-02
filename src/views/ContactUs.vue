<template>
  <div class="contact-page min-h-screen overflow-hidden bg-[#fbfaf6] text-[#17191c]">
    <AppHeader :is-transparent-background="false" />

    <main class="contact-main pt-16">
      <section class="contact-container contact-layout">
        <div class="contact-intro">
          <p class="contact-eyebrow"><span></span>{{ $t('contactUs.heroKicker') }}</p>
          <h1 class="contact-title">{{ $t('contactUs.heading') }}</h1>
          <p class="contact-subtitle">{{ $t('contactUs.subtitle') }}</p>

          <div class="contact-art" aria-hidden="true">
            <div class="contact-art__sun"></div>
            <div class="contact-art__orbit contact-art__orbit--one"></div>
            <div class="contact-art__orbit contact-art__orbit--two"></div>
            <div class="contact-art__card">
              <div class="contact-art__card-top"><i></i><i></i><i></i></div>
              <div class="contact-art__avatar"><span></span></div>
              <div class="contact-art__line contact-art__line--long"></div>
              <div class="contact-art__line contact-art__line--short"></div>
              <div class="contact-art__check">✓</div>
            </div>
            <div class="contact-art__person"><b></b><i></i><em></em></div>
            <div class="contact-art__bubble contact-art__bubble--one">hi!</div>
            <div class="contact-art__bubble contact-art__bubble--two">✦</div>
          </div>

          <p class="contact-note">{{ $t('contactUs.heroNote') }}</p>

          <div class="contact-features">
            <div class="contact-feature">
              <strong>01</strong>
              <div><h2>{{ $t('contactUs.features.scalableTitle') }}</h2><p>{{ $t('contactUs.features.scalableDesc') }}</p></div>
            </div>
            <div class="contact-feature">
              <strong>02</strong>
              <div><h2>{{ $t('contactUs.features.expertTitle') }}</h2><p>{{ $t('contactUs.features.expertDesc') }}</p></div>
            </div>
          </div>
        </div>

        <div class="contact-panel">
          <div class="contact-panel__intro">
            <p>{{ $t('contactUs.formEyebrow') }}</p>
            <h2>{{ $t('contactUs.formTitle') }}</h2>
          </div>

          <form @submit.prevent="handleSubmit" class="contact-form">
            <input v-model="honeypot" type="text" name="website" tabindex="-1" autocomplete="off" class="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true" />

            <div class="contact-field">
              <label>{{ $t('contactUs.form.fullName') }}</label>
              <input v-model="form.name" type="text" :placeholder="$t('contactUs.form.fullNamePlaceholder')" required />
            </div>

            <div class="contact-field">
              <label>{{ $t('contactUs.form.email') }}</label>
              <input v-model="form.email" type="email" :placeholder="$t('contactUs.form.emailPlaceholder')" required />
            </div>

            <div class="contact-field">
              <label>{{ $t('contactUs.form.phoneNumber') }}</label>
              <div class="contact-phone-row">
                <select v-model="form.countryCode" aria-label="Country code">
                  <option value="+62">🇮🇩 +62</option><option value="+65">🇸🇬 +65</option><option value="+60">🇲🇾 +60</option><option value="+66">🇹🇭 +66</option><option value="+84">🇻🇳 +84</option><option value="+63">🇵🇭 +63</option><option value="+1">🇺🇸 +1</option><option value="+44">🇬🇧 +44</option><option value="+61">🇦🇺 +61</option><option value="+81">🇯🇵 +81</option><option value="+82">🇰🇷 +82</option><option value="+86">🇨🇳 +86</option><option value="+91">🇮🇳 +91</option><option value="+966">🇸🇦 +966</option><option value="+971">🇦🇪 +971</option>
                </select>
                <input v-model="form.phone" type="text" inputmode="numeric" maxlength="15" pattern="[0-9]*" :placeholder="$t('contactUs.form.phonePlaceholder')" @input="form.phone = form.phone.replace(/\D/g, '')" />
              </div>
            </div>

            <div class="contact-field">
              <label>{{ $t('contactUs.form.briefDescription') }}</label>
              <textarea v-model="form.description" rows="4" :placeholder="$t('contactUs.form.briefDescriptionPlaceholder')"></textarea>
            </div>

            <div ref="turnstileEl" class="contact-captcha"></div>

            <p v-if="formError" class="contact-error">{{ formError }}</p>

            <button type="submit" :disabled="loading" class="contact-submit">
              {{ $t('contactUs.form.submitButton') }}
              <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </form>

          <div class="contact-direct">
            <p>{{ $t('contactUs.preferDirect') }}</p>
            <div class="contact-direct__links">
              <div><a href="https://wa.me/6285111210462" target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>{{ $t('contactUs.whatsapp') }}</a><span>{{ $t('contactUs.whatsappLabel') }}</span></div>
              <div><a href="mailto:sales@shifdlabs.com"><svg viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>{{ $t('contactUs.emailSupport') }}</a><span>{{ $t('contactUs.emailLabel') }}</span></div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>

  <div v-if="loading" class="contact-overlay">
    <div class="contact-loading"><svg class="animate-spin" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity=".25"/><path fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" opacity=".75"/></svg><p>{{ $t('contactUs.loading') }}</p></div>
  </div>

  <div v-if="showSuccessDialog" class="contact-overlay">
    <div class="contact-success animate-fade-in">
      <div class="contact-success__icon">✓</div>
      <h2>{{ $t('contactUs.success.title') }}</h2>
      <p>{{ $t('contactUs.success.message') }}</p>
      <button @click="goToNextPage">{{ $t('contactUs.success.returnHome') }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue';
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocalePath } from '@/composables/useLocalePath'
import Footer from '../components/Footer.vue';

const form = reactive({ name: '', email: '', countryCode: '+62', phone: '', description: '' })
const loading = ref(false)
const showSuccessDialog = ref(false)
const formError = ref('')
const honeypot = ref('')
const TURNSTILE_SITE_KEY = '0x4AAAAAAD2m6Gd90BuCFE-j'
const turnstileToken = ref('')
const turnstileEl = ref<HTMLElement | null>(null)
let turnstileWidgetId: string | undefined

onMounted(() => {
  const w = window as any
  const renderWidget = () => {
    turnstileWidgetId = w.turnstile.render(turnstileEl.value, {
      sitekey: TURNSTILE_SITE_KEY,
      theme: 'light',
      language: locale.value === 'id' ? 'id' : 'en',
      callback: (token: string) => { turnstileToken.value = token },
      'expired-callback': () => { turnstileToken.value = '' },
    })
  }
  if (w.turnstile) {
    renderWidget()
  } else {
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
    script.async = true
    script.onload = renderWidget
    document.head.appendChild(script)
  }
})
const router = useRouter()
const route = useRoute()
const { t, locale } = useI18n()
const { localePath } = useLocalePath()

const plan = String(route.query.plan ?? '')
if (['trial', 'monthly', 'yearly', 'custom'].includes(plan)) {
  form.description = t('contactUs.form.planMessage', { plan: t(`approvalPage.pricing.${plan}.name`) })
}

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/
const PHONE_RE = /^\d{7,15}$/
const SUBMIT_COOLDOWN_MS = 60_000

function validateForm(): boolean {
  const name = form.name.trim()
  const email = form.email.trim()
  const phone = form.phone.trim()
  const desc = form.description.trim()

  if (!name || name.length > 100) { formError.value = t('contactUs.errors.name'); return false }
  if (!EMAIL_RE.test(email)) { formError.value = t('contactUs.errors.email'); return false }
  if (phone && !PHONE_RE.test(phone)) { formError.value = t('contactUs.errors.phone'); return false }
  if (!desc || desc.length > 2000) { formError.value = t('contactUs.errors.description'); return false }
  formError.value = ''
  return true
}

async function handleSubmit() {
  if (loading.value) return
  if (honeypot.value) { showSuccessDialog.value = true; return }

  const lastSubmit = Number(localStorage.getItem('lastContactSubmit') ?? 0)
  if (Date.now() - lastSubmit < SUBMIT_COOLDOWN_MS) { formError.value = t('contactUs.errors.cooldown'); return }
  if (!validateForm()) return
  if (!turnstileToken.value) { formError.value = t('contactUs.errors.captcha'); return }

  loading.value = true
  try {
    const params = new URLSearchParams()
    params.append('name', form.name.trim().slice(0, 100))
    params.append('email', form.email.trim().slice(0, 254))
    const phoneDigits = form.phone.trim().replace(/^0+/, '').slice(0, 15)
    params.append('phone', phoneDigits ? form.countryCode + phoneDigits : '')
    params.append('description', form.description.trim().slice(0, 2000))
    params.append('cf-turnstile-response', turnstileToken.value)

    await fetch('https://script.google.com/macros/s/AKfycbwtV52U3FeSpKlRTsNYKD93UTgBE9NTtg9i1PXMgj1hNVKDx7X8d2UmzCGddDM8sj0HVQ/exec', { method: 'POST', mode: 'no-cors', body: params })
    localStorage.setItem('lastContactSubmit', String(Date.now()))
    showSuccessDialog.value = true
    turnstileToken.value = ''
    const w = window as any
    w.turnstile?.reset(turnstileWidgetId)
  } catch (err) {
    console.error(err)
    formError.value = t('contactUs.errors.failed')
  } finally {
    loading.value = false
  }
}

function goToNextPage() {
  showSuccessDialog.value = false
  router.push(localePath('/'))
}
</script>

<style scoped>
.contact-page { --ink:#17191c; --blue:#3279e7; --yellow:#ffbf1f; --cream:#fbfaf6; }
.contact-container { width:min(1180px,calc(100% - 48px)); margin:0 auto; }
.contact-main { padding-bottom:110px; background:var(--cream); }
.contact-layout { display:grid; grid-template-columns:minmax(0,.88fr) minmax(430px,1.12fr); gap:90px; align-items:start; padding-top:82px; }
.contact-eyebrow { display:flex; align-items:center; gap:10px; color:#566274; font-size:11px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; }.contact-eyebrow span { width:9px; height:9px; border-radius:50%; background:var(--yellow); box-shadow:0 0 0 4px rgba(255,191,31,.2); }
.contact-title { max-width:590px; margin-top:27px; color:var(--ink); font-size:clamp(3rem,5vw,5.1rem); font-weight:700; letter-spacing:-.065em; line-height:.98; }.contact-subtitle { max-width:550px; margin-top:26px; color:#566274; font-size:18px; line-height:1.6; }
.contact-art { position:relative; height:280px; max-width:550px; margin:42px 0 0; }.contact-art__sun { position:absolute; top:13px; left:126px; width:145px; height:145px; border-radius:50%; background:var(--yellow); }.contact-art__orbit { position:absolute; border:1.5px solid rgba(50,121,231,.35); border-radius:50%; }.contact-art__orbit--one { top:29px; left:41px; width:400px; height:210px; transform:rotate(-18deg); }.contact-art__orbit--two { top:61px; left:80px; width:335px; height:170px; border-color:rgba(255,191,31,.8); transform:rotate(18deg); }
.contact-art__card { position:absolute; top:47px; left:174px; width:194px; height:137px; border:3px solid var(--ink); border-radius:15px; background:#fffdf8; box-shadow:7px 7px 0 var(--ink); transform:rotate(-7deg); }.contact-art__card-top { height:25px; padding:8px 0 0 12px; border-bottom:2px solid var(--ink); }.contact-art__card-top i { display:inline-block; width:6px; height:6px; margin-right:4px; border-radius:50%; background:var(--yellow); }.contact-art__card-top i:nth-child(2) { background:var(--blue); }.contact-art__card-top i:nth-child(3) { background:var(--ink); }.contact-art__avatar { position:absolute; top:44px; left:20px; width:55px; height:55px; border:2px solid var(--ink); border-radius:50%; background:var(--blue); }.contact-art__avatar span { position:absolute; top:12px; left:15px; width:21px; height:21px; border:2px solid var(--ink); border-radius:50%; background:#f6d9ba; }.contact-art__avatar span::after { position:absolute; top:21px; left:-5px; width:27px; height:14px; border:2px solid var(--ink); border-radius:14px 14px 0 0; background:#fffdf8; content:''; }.contact-art__line { position:absolute; left:91px; height:9px; border-radius:99px; background:#cbdcf8; }.contact-art__line--long { top:55px; width:76px; }.contact-art__line--short { top:76px; width:53px; background:var(--yellow); }.contact-art__check { position:absolute; right:-20px; bottom:-18px; display:grid; width:45px; height:45px; place-items:center; border:3px solid var(--ink); border-radius:50%; color:var(--ink); background:var(--yellow); font-size:25px; font-weight:800; }
.contact-art__person { position:absolute; right:91px; bottom:19px; width:75px; height:102px; border:3px solid var(--ink); border-radius:40px 40px 11px 11px; background:#fffdf8; transform:rotate(8deg); }.contact-art__person::before { position:absolute; top:-38px; left:18px; width:43px; height:43px; border:3px solid var(--ink); border-radius:50%; background:#f6d9ba; content:''; }.contact-art__person b { position:absolute; top:22px; left:-51px; width:57px; height:15px; border:3px solid var(--ink); border-right:0; border-radius:20px 0 0 20px; background:var(--blue); transform:rotate(-24deg); }.contact-art__person i { position:absolute; top:26px; right:-40px; width:50px; height:15px; border:3px solid var(--ink); border-left:0; border-radius:0 20px 20px 0; background:var(--blue); transform:rotate(27deg); }.contact-art__person em { position:absolute; right:-9px; bottom:-24px; width:22px; height:28px; border:3px solid var(--ink); border-radius:4px; background:var(--yellow); }.contact-art__bubble { position:absolute; border:2px solid var(--ink); border-radius:18px 18px 18px 3px; padding:7px 11px; color:var(--ink); background:#fffdf8; font-size:12px; font-weight:800; box-shadow:3px 3px 0 var(--ink); }.contact-art__bubble--one { top:15px; right:50px; transform:rotate(7deg); }.contact-art__bubble--two { bottom:22px; left:29px; border-radius:50%; padding:10px; color:var(--ink); background:var(--yellow); transform:rotate(-10deg); }
.contact-note { max-width:430px; margin-top:-2px; color:#758093; font-size:13px; line-height:1.5; }.contact-features { margin-top:35px; border-top:1px solid rgba(23,25,28,.18); }.contact-feature { display:grid; grid-template-columns:43px 1fr; gap:16px; padding:22px 0; border-bottom:1px solid rgba(23,25,28,.18); }.contact-feature strong { color:var(--blue); font-size:14px; }.contact-feature h2 { color:var(--ink); font-size:16px; font-weight:700; }.contact-feature p { max-width:390px; margin-top:6px; color:#687286; font-size:13px; line-height:1.5; }
.contact-panel { border:2px solid var(--ink); border-radius:17px; padding:31px; background:#fffdf8; box-shadow:8px 8px 0 var(--ink); }.contact-panel__intro { padding-bottom:23px; border-bottom:1px solid rgba(23,25,28,.16); }.contact-panel__intro p { color:var(--blue); font-size:10px; font-weight:800; letter-spacing:.16em; text-transform:uppercase; }.contact-panel__intro h2 { margin-top:10px; font-size:27px; font-weight:700; letter-spacing:-.04em; }.contact-form { display:flex; flex-direction:column; gap:20px; padding-top:25px; }.contact-field label { display:block; margin-bottom:8px; color:var(--ink); font-size:13px; font-weight:700; }.contact-field input,.contact-field select,.contact-field textarea { width:100%; border:1.5px solid #cbd0d7; border-radius:8px; padding:13px 14px; color:var(--ink); background:#fff; font:inherit; font-size:14px; outline:none; transition:border-color .2s,box-shadow .2s; }.contact-field input::placeholder,.contact-field textarea::placeholder { color:#9aa1aa; }.contact-field input:focus,.contact-field select:focus,.contact-field textarea:focus { border-color:var(--blue); box-shadow:0 0 0 3px rgba(50,121,231,.14); }.contact-field textarea { resize:vertical; min-height:112px; }.contact-phone-row { display:flex; gap:8px; }.contact-phone-row select { flex:0 0 112px; padding-right:6px; }.contact-captcha { display:flex; justify-content:center; min-height:65px; }.contact-error { border:1px solid #fecaca; border-radius:8px; padding:11px 13px; color:#b91c1c; background:#fef2f2; font-size:13px; line-height:1.4; }.contact-submit { display:flex; align-items:center; justify-content:center; gap:10px; border:0; border-radius:8px; padding:15px 18px; color:#fff; background:var(--blue); font:inherit; font-size:15px; font-weight:700; cursor:pointer; box-shadow:0 8px 15px rgba(50,121,231,.2); transition:transform .2s,background .2s,opacity .2s; }.contact-submit:hover { transform:translateY(-2px); background:#2567cf; }.contact-submit:disabled { cursor:not-allowed; opacity:.6; }.contact-submit svg { width:19px; height:19px; fill:none; stroke:currentColor; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.7; }.contact-submit polygon { fill:none; }
.contact-direct { margin-top:28px; padding-top:23px; border-top:1px solid rgba(23,25,28,.16); text-align:center; }.contact-direct>p { color:#687286; font-size:13px; }.contact-direct__links { display:flex; justify-content:center; gap:10px; margin-top:14px; }.contact-direct__links>div { display:flex; flex-direction:column; align-items:center; }.contact-direct__links a { display:inline-flex; align-items:center; gap:7px; border:1.5px solid var(--blue); border-radius:999px; padding:9px 13px; color:var(--blue); background:#fff; font-size:12px; font-weight:700; transition:background .2s,transform .2s; }.contact-direct__links a:hover { background:#edf3ff; transform:translateY(-1px); }.contact-direct__links a svg { width:15px; height:15px; fill:currentColor; stroke:currentColor; stroke-width:1.5; }.contact-direct__links a svg path { stroke:none; }.contact-direct__links a svg rect { fill:none; }.contact-direct__links a svg path:last-child { fill:none; stroke:currentColor; stroke-linecap:round; }.contact-direct__links span { margin-top:6px; color:#8e95a9; font-size:9px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; }
.contact-overlay { position:fixed; inset:0; z-index:50; display:flex; align-items:center; justify-content:center; background:rgba(23,25,28,.52); backdrop-filter:blur(8px); }.contact-loading,.contact-success { width:min(90%,420px); border:2px solid var(--ink); border-radius:17px; padding:34px; text-align:center; background:#fffdf8; box-shadow:8px 8px 0 var(--ink); }.contact-loading svg { width:42px; height:42px; margin:0 auto 15px; color:var(--blue); }.contact-loading p { color:var(--ink); font-weight:600; }.contact-success__icon { display:grid; width:72px; height:72px; margin:0 auto 22px; place-items:center; border:3px solid var(--ink); border-radius:50%; color:var(--ink); background:var(--yellow); font-size:40px; font-weight:800; }.contact-success h2 { color:var(--ink); font-size:27px; font-weight:700; letter-spacing:-.04em; }.contact-success p { margin:14px 0 24px; color:#687286; line-height:1.55; }.contact-success button { width:100%; border:0; border-radius:8px; padding:14px 18px; color:#fff; background:var(--blue); font:inherit; font-weight:700; cursor:pointer; }
@keyframes fade-in { from { opacity:0; transform:scale(.95) translateY(10px); } to { opacity:1; transform:scale(1) translateY(0); } }.animate-fade-in { animation:fade-in .3s ease-out; }
@media (max-width:980px) { .contact-layout { grid-template-columns:1fr; gap:56px; }.contact-intro { max-width:680px; margin:0 auto; }.contact-panel { width:min(100%,680px); margin:0 auto; } }
@media (max-width:600px) { .contact-container { width:min(100% - 32px,600px); }.contact-main { padding-bottom:75px; }.contact-layout { padding-top:57px; }.contact-title { font-size:clamp(2.8rem,14vw,4rem); }.contact-subtitle { font-size:16px; }.contact-art { height:240px; margin-top:32px; transform:scale(.83); transform-origin:left top; width:120%; margin-bottom:-35px; }.contact-panel { padding:23px 18px; border-radius:13px; box-shadow:5px 5px 0 var(--ink); }.contact-panel__intro h2 { font-size:24px; }.contact-phone-row select { flex-basis:102px; padding-left:8px; }.contact-direct__links { flex-direction:column; align-items:center; }.contact-direct__links>div { width:100%; }.contact-direct__links a { justify-content:center; width:min(100%,210px); } }

/* Keep the form compact and balanced with the editorial-style intro. */
.contact-layout { grid-template-columns:minmax(0, 1fr) minmax(400px, 520px); gap:clamp(48px, 6vw, 78px); }
.contact-panel { width:100%; max-width:520px; justify-self:end; padding:25px; }
.contact-panel__intro { padding-bottom:19px; }
.contact-panel__intro h2 { font-size:25px; }
.contact-form { gap:15px; padding-top:20px; }
.contact-field label { margin-bottom:6px; font-size:12px; }
.contact-field input,.contact-field select,.contact-field textarea { padding:11px 12px; font-size:13px; }
.contact-field textarea { min-height:92px; }
.contact-captcha { min-height:58px; }
.contact-submit { padding:13px 16px; font-size:14px; }
.contact-direct { margin-top:22px; padding-top:19px; }

@media (max-width:980px) {
  .contact-layout { grid-template-columns:1fr; gap:48px; }
  .contact-panel { max-width:620px; justify-self:auto; }
}

@media (max-width:600px) {
  .contact-panel { padding:20px 17px; }
  .contact-panel__intro h2 { font-size:22px; }
  .contact-form { gap:14px; }
}
</style>

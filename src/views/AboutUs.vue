<template>
  <div class="about-page overflow-hidden bg-[#fbfaf6] text-[#17191c] selection:bg-[#ffd45c] selection:text-[#17191c]">
    <AppHeader :is-transparent-background="false" />

    <main class="pt-16">
      <section class="about-hero relative isolate">
        <div class="about-container about-hero__grid">
          <div class="about-hero__copy about-reveal">
            <p class="about-eyebrow"><span class="about-eyebrow__dot"></span>{{ $t('aboutUs.heroKicker') }}</p>
            <h1 class="about-display mt-7">{{ $t('aboutUs.heroHeadline') }} <span class="about-display__mark">{{ $t('aboutUs.heroHeadlineHighlight') }}</span></h1>
            <p class="about-lead mt-7">{{ $t('aboutUs.mainDescription') }}</p>

            <div class="about-hero__actions mt-9">
              <a href="https://wa.me/6285111210462" target="_blank" rel="noopener noreferrer" class="about-button about-button--blue">
                {{ $t('aboutUs.ctaLabel') }}
                <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10.5 4.5 16 10l-5.5 5.5" /></svg>
              </a>
              <span class="about-hero__note">{{ $t('aboutUs.heroNote') }}</span>
            </div>
          </div>

          <div class="about-hero__visual about-reveal about-reveal--delay" aria-label="Shifd Labs workflow illustration" role="img">
            <div class="hero-art__caption">{{ $t('aboutUs.heroCardRole') }}</div>
            <div class="hero-art__orbit hero-art__orbit--one"></div><div class="hero-art__orbit hero-art__orbit--two"></div>
            <div class="hero-art__spark hero-art__spark--one">✦</div><div class="hero-art__spark hero-art__spark--two">✳</div>

            <svg class="hero-art" viewBox="0 0 620 530" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M105 405C164 447 256 467 344 452C430 437 499 392 531 324" stroke="#17191C" stroke-width="3" stroke-linecap="round" stroke-dasharray="7 11" />
              <path d="M99 406C66 383 49 348 55 311M51 309C55 289 70 277 88 277M530 325C552 312 567 293 566 271M565 271C565 258 556 250 544 251" stroke="#17191C" stroke-width="3" stroke-linecap="round" />
              <rect x="128" y="92" width="338" height="263" rx="22" fill="#fffdf8" stroke="#17191C" stroke-width="4" /><path d="M128 139H466" stroke="#17191C" stroke-width="4" />
              <circle cx="155" cy="116" r="6" fill="#FFBF1F" /><circle cx="176" cy="116" r="6" fill="#3279E7" /><circle cx="197" cy="116" r="6" fill="#17191C" />
              <rect x="164" y="173" width="122" height="120" rx="15" fill="#EDF3FF" stroke="#17191C" stroke-width="3" /><circle cx="225" cy="217" r="28" fill="#3279E7" stroke="#17191C" stroke-width="3" />
              <path d="M205 271C210 248 239 243 246 271" fill="#fffdf8" stroke="#17191C" stroke-width="3" /><circle cx="217" cy="214" r="3.5" fill="#17191C" /><circle cx="233" cy="214" r="3.5" fill="#17191C" /><path d="M217 226C222 230 228 230 233 226" stroke="#17191C" stroke-width="3" stroke-linecap="round" />
              <path d="M181 182H218M181 192H204" stroke="#17191C" stroke-width="4" stroke-linecap="round" />
              <rect x="311" y="173" width="119" height="29" rx="14.5" fill="#FFBF1F" stroke="#17191C" stroke-width="3" /><circle cx="328" cy="187" r="6" fill="#17191C" /><path d="M345 187H409" stroke="#17191C" stroke-width="3" stroke-linecap="round" />
              <rect x="311" y="216" width="119" height="29" rx="14.5" fill="#fffdf8" stroke="#17191C" stroke-width="3" /><circle cx="328" cy="230" r="6" fill="#3279E7" /><path d="M345 230H397" stroke="#17191C" stroke-width="3" stroke-linecap="round" />
              <rect x="311" y="259" width="119" height="29" rx="14.5" fill="#fffdf8" stroke="#17191C" stroke-width="3" /><circle cx="328" cy="273" r="6" fill="#17191C" /><path d="M345 273H409" stroke="#17191C" stroke-width="3" stroke-linecap="round" />
              <path d="M291 231H303M298 225L304 231L298 237M370 301V329M362 321L370 329L378 321" stroke="#17191C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M299 368C299 339 322 316 351 316C380 316 403 339 403 368" fill="#3279E7" stroke="#17191C" stroke-width="4" /><circle cx="351" cy="359" r="45" fill="#fffdf8" stroke="#17191C" stroke-width="4" />
              <path d="M326 390C329 368 341 357 351 357C361 357 373 368 376 390" fill="#FFBF1F" stroke="#17191C" stroke-width="3" /><circle cx="337" cy="355" r="4" fill="#17191C" /><circle cx="365" cy="355" r="4" fill="#17191C" /><path d="M340 374C347 381 355 381 362 374" stroke="#17191C" stroke-width="3" stroke-linecap="round" />
            </svg>

            <div class="hero-art__tag hero-art__tag--people">{{ $t('aboutUs.focusLabel') }}</div><div class="hero-art__tag hero-art__tag--system">{{ $t('aboutUs.valueCustomerCentric') }}</div>
          </div>
        </div>
      </section>

      <section class="about-intro">
        <div class="about-container about-intro__grid">
          <div><p class="about-section-label">{{ $t('aboutUs.missionLabel') }}</p><h2 class="about-section-title mt-5">{{ $t('aboutUs.introTitle') }}</h2></div>
          <div class="about-intro__body"><p>{{ $t('aboutUs.introDescription') }}</p><div class="about-rule"></div><div class="about-meta-grid"><div><strong>01</strong><span>{{ $t('aboutUs.metaProfileLabel') }}</span></div><div><strong>02</strong><span>{{ $t('aboutUs.metaProductLabel') }}</span></div><div><strong>03</strong><span>{{ $t('aboutUs.metaServicesLabel') }}</span></div></div></div>
        </div>
      </section>

      <section class="about-values">
        <div class="about-container">
          <div class="about-section-heading"><div><p class="about-section-label">{{ $t('aboutUs.valuesLabel') }}</p><h2 class="about-section-title mt-5">{{ $t('aboutUs.valuesTitle') }}</h2></div><p class="about-section-heading__aside">{{ $t('aboutUs.valuesDescription') }}</p></div>

          <div class="about-values__grid mt-14">
            <article class="value-card value-card--yellow">
              <div class="value-illustration value-illustration--people" aria-hidden="true"><div class="mini-person mini-person--one"><span></span></div><div class="mini-person mini-person--two"><span></span></div><div class="mini-person mini-person--three"><span></span></div><div class="mini-speech">hello</div></div>
              <p class="value-card__number">01</p><h3>{{ $t('aboutUs.valuePeopleTitle') }}</h3><p>{{ $t('aboutUs.valuePeopleDesc') }}</p>
            </article>
            <article class="value-card value-card--blue">
              <div class="value-illustration value-illustration--workflow" aria-hidden="true"><div class="workflow-window"><i></i><i></i><i></i><b></b><b></b><b></b></div><div class="workflow-line workflow-line--one"></div><div class="workflow-line workflow-line--two"></div><div class="workflow-check">✓</div></div>
              <p class="value-card__number">02</p><h3>{{ $t('aboutUs.valueWorkTitle') }}</h3><p>{{ $t('aboutUs.valueWorkDesc') }}</p>
            </article>
            <article class="value-card value-card--cream">
              <div class="value-illustration value-illustration--support" aria-hidden="true"><div class="support-phone"><span></span></div><div class="support-bubble support-bubble--one">?</div><div class="support-bubble support-bubble--two">!</div><div class="support-star">✦</div></div>
              <p class="value-card__number">03</p><h3>{{ $t('aboutUs.valueSupportTitle') }}</h3><p>{{ $t('aboutUs.valueSupportDesc') }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="about-cta">
        <div class="about-container about-cta__grid">
          <div class="cta-art" aria-hidden="true"><div class="cta-art__sun"></div><div class="cta-art__window"><span></span><span></span><span></span><span></span></div><div class="cta-art__person"><i></i><b></b><em></em></div><div class="cta-art__line cta-art__line--one"></div><div class="cta-art__line cta-art__line--two"></div><div class="cta-art__star">✦</div></div>
          <div class="about-cta__copy"><p class="about-section-label about-section-label--dark">{{ $t('aboutUs.ctaLabel') }}</p><h2 class="about-section-title mt-5">{{ $t('aboutUs.callToActionQuestion') }}</h2><p class="mt-6">{{ $t('aboutUs.callToActionCaption') }}</p><router-link to="/contact-us" class="about-button about-button--blue mt-8">{{ $t('aboutUs.ctaButton') }}<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10.5 4.5 16 10l-5.5 5.5" /></svg></router-link></div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '../components/AppHeader.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.about-page { --ink:#17191c; --blue:#3279e7; --yellow:#ffbf1f; --cream:#fbfaf6; }
.about-container { width:min(1180px,calc(100% - 48px)); margin:0 auto; }
.about-hero { min-height:700px; padding:92px 0 110px; background:var(--cream); }
.about-hero__grid { display:grid; grid-template-columns:minmax(0,.92fr) minmax(480px,1.08fr); gap:62px; align-items:center; }
.about-eyebrow,.about-section-label { display:flex; align-items:center; gap:10px; color:#566274; font-size:11px; font-weight:800; letter-spacing:.16em; line-height:1.2; text-transform:uppercase; }
.about-eyebrow__dot { width:9px; height:9px; border-radius:999px; background:var(--yellow); box-shadow:0 0 0 4px rgba(255,191,31,.2); }
.about-display { max-width:650px; color:var(--ink); font-size:clamp(3rem,5vw,5.2rem); font-weight:700; letter-spacing:-.065em; line-height:.98; }
.about-display__mark { position:relative; z-index:0; white-space:nowrap; }.about-display__mark::after { position:absolute; z-index:-1; right:-3%; bottom:-3px; left:-2%; height:15px; background:var(--yellow); content:''; transform:rotate(-1.5deg); }
.about-lead { max-width:540px; color:#566274; font-size:18px; line-height:1.6; }
.about-hero__actions { display:flex; align-items:center; flex-wrap:wrap; gap:20px; }.about-button { display:inline-flex; align-items:center; gap:15px; border-radius:7px; padding:15px 20px; font-size:15px; font-weight:700; transition:transform .2s ease,box-shadow .2s ease; }.about-button:hover { transform:translateY(-2px); box-shadow:0 10px 20px rgba(50,121,231,.2); }.about-button svg { width:19px; height:19px; }.about-button svg path { fill:none; stroke:currentColor; stroke-linecap:round; stroke-linejoin:round; stroke-width:1.7; }.about-button--blue { color:white; background:var(--blue); }.about-hero__note { max-width:210px; color:#758093; font-size:13px; line-height:1.45; }
.about-hero__visual { position:relative; min-height:490px; }.hero-art { position:absolute; inset:0; width:100%; height:100%; overflow:visible; }.hero-art__caption { position:absolute; top:23px; right:24px; z-index:2; color:#566274; font-size:10px; font-weight:800; letter-spacing:.15em; text-transform:uppercase; }.hero-art__orbit { position:absolute; border:1.5px solid rgba(50,121,231,.27); border-radius:50%; transform:rotate(-20deg); }.hero-art__orbit--one { top:72px; left:49px; width:480px; height:350px; }.hero-art__orbit--two { top:116px; left:88px; width:400px; height:270px; border-color:rgba(255,191,31,.55); transform:rotate(27deg); }.hero-art__spark { position:absolute; color:var(--blue); font-size:29px; font-weight:700; }.hero-art__spark--one { top:74px; left:25px; }.hero-art__spark--two { right:42px; bottom:72px; color:var(--yellow); font-size:22px; }.hero-art__tag { position:absolute; z-index:2; border:2px solid var(--ink); border-radius:999px; padding:8px 13px; color:var(--ink); background:#fffdf8; font-size:11px; font-weight:800; box-shadow:4px 4px 0 var(--ink); }.hero-art__tag--people { top:137px; left:18px; transform:rotate(-8deg); }.hero-art__tag--system { right:12px; bottom:111px; background:var(--yellow); transform:rotate(7deg); }
.about-intro { padding:120px 0 126px; background:#edf3ff; }.about-intro__grid { display:grid; grid-template-columns:.9fr 1.1fr; gap:100px; align-items:start; }.about-section-title { max-width:650px; color:var(--ink); font-size:clamp(2.2rem,4vw,4rem); font-weight:700; letter-spacing:-.055em; line-height:1.03; }.about-intro__body { padding-top:18px; }.about-intro__body>p { max-width:625px; color:#43516a; font-size:20px; line-height:1.55; }.about-rule { height:1px; margin:40px 0 22px; background:rgba(23,25,28,.2); }.about-meta-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }.about-meta-grid div { display:flex; flex-direction:column; gap:7px; }.about-meta-grid strong { color:var(--blue); font-size:18px; }.about-meta-grid span { color:#43516a; font-size:13px; font-weight:600; }
.about-values { padding:124px 0 136px; background:#fffdf8; }.about-section-heading { display:flex; justify-content:space-between; gap:50px; align-items:end; }.about-section-heading__aside { max-width:340px; color:#687286; font-size:15px; line-height:1.55; }.about-values__grid { display:grid; grid-template-columns:repeat(3,1fr); gap:26px; }.value-card { min-height:495px; border:2px solid var(--ink); border-radius:16px; padding:25px 25px 30px; box-shadow:7px 7px 0 var(--ink); }.value-card--yellow { background:var(--yellow); }.value-card--blue { color:white; background:var(--blue); }.value-card--cream { background:#f3efe5; }.value-illustration { position:relative; height:235px; margin-bottom:32px; overflow:hidden; border-bottom:2px solid var(--ink); }.value-card--blue .value-illustration { border-color:rgba(255,255,255,.65); }.value-card__number { margin:0 0 13px; font-size:12px; font-weight:800; letter-spacing:.12em; opacity:.65; }.value-card h3 { margin:0; font-size:25px; font-weight:700; letter-spacing:-.035em; }.value-card>p:last-child { margin-top:13px; max-width:295px; font-size:15px; line-height:1.55; opacity:.78; }
.mini-person { position:absolute; bottom:20px; width:62px; height:104px; border:3px solid var(--ink); border-radius:37px 37px 13px 13px; background:#fffdf8; }.mini-person span { position:absolute; top:-33px; left:10px; width:37px; height:37px; border:3px solid var(--ink); border-radius:50%; background:#fffdf8; }.mini-person--one { left:55px; height:122px; background:var(--blue); transform:rotate(-9deg); }.mini-person--two { left:130px; z-index:2; width:74px; background:#fffdf8; }.mini-person--three { left:218px; height:93px; background:#f6d9ba; transform:rotate(8deg); }.mini-speech { position:absolute; top:20px; right:30px; border:3px solid var(--ink); border-radius:18px 18px 18px 3px; padding:9px 14px; background:#fffdf8; font-size:14px; font-weight:800; transform:rotate(7deg); }
.workflow-window { position:absolute; top:26px; left:44px; width:220px; height:168px; border:3px solid var(--ink); border-radius:13px; background:#fffdf8; transform:rotate(-5deg); }.workflow-window i { display:inline-block; width:8px; height:8px; margin:14px 1px 20px 12px; border-radius:50%; background:var(--yellow); }.workflow-window i:nth-child(2) { background:var(--blue); }.workflow-window i:nth-child(3) { background:var(--ink); }.workflow-window b { display:block; width:135px; height:13px; margin:9px 0 0 30px; border-radius:999px; background:#dce7fb; }.workflow-window b:nth-of-type(2) { width:110px; background:var(--yellow); }.workflow-window b:nth-of-type(3) { width:145px; background:#b9d0f8; }.workflow-line { position:absolute; z-index:2; width:63px; border-top:3px dashed var(--ink); transform-origin:left; }.workflow-line--one { top:110px; right:37px; transform:rotate(-28deg); }.workflow-line--two { top:166px; right:26px; transform:rotate(25deg); }.workflow-check { position:absolute; right:21px; bottom:30px; display:grid; width:62px; height:62px; place-items:center; border:3px solid var(--ink); border-radius:50%; color:var(--ink); background:var(--yellow); font-size:34px; font-weight:800; transform:rotate(10deg); }
.support-phone { position:absolute; top:20px; left:104px; width:112px; height:190px; border:4px solid var(--ink); border-radius:19px; background:var(--blue); transform:rotate(10deg); }.support-phone::before { position:absolute; top:10px; left:39px; width:30px; height:5px; border-radius:4px; background:var(--ink); content:''; }.support-phone span { position:absolute; top:57px; left:20px; width:67px; height:67px; border:3px solid var(--ink); border-radius:50%; background:#fffdf8; }.support-phone span::after { position:absolute; top:21px; left:18px; width:25px; height:17px; border-bottom:3px solid var(--ink); border-radius:50%; content:''; }.support-bubble { position:absolute; display:grid; width:50px; height:50px; place-items:center; border:3px solid var(--ink); border-radius:50%; background:#fffdf8; font-size:23px; font-weight:800; }.support-bubble--one { top:42px; right:53px; }.support-bubble--two { right:38px; bottom:45px; background:var(--yellow); transform:rotate(-9deg); }.support-star { position:absolute; top:46px; left:40px; color:var(--ink); font-size:36px; transform:rotate(-12deg); }
.about-cta { padding:105px 0; background:var(--yellow); }.about-cta__grid { display:grid; grid-template-columns:1.1fr .9fr; gap:90px; align-items:center; }.about-cta__copy>p:not(.about-section-label) { max-width:520px; color:#4f411d; font-size:18px; line-height:1.55; }.about-section-label--dark { color:#544719; }.cta-art { position:relative; min-height:350px; }.cta-art__sun { position:absolute; top:6px; left:150px; width:158px; height:158px; border-radius:50%; background:#fffdf8; box-shadow:16px 15px 0 var(--ink); }.cta-art__window { position:absolute; top:72px; left:47px; display:grid; grid-template-columns:repeat(2,52px); gap:12px; padding:14px; border:4px solid var(--ink); border-radius:8px; background:var(--blue); transform:rotate(-7deg); }.cta-art__window span { width:52px; height:50px; border:3px solid var(--ink); background:#a9c9ff; }.cta-art__window span:nth-child(2),.cta-art__window span:nth-child(3) { background:var(--yellow); }.cta-art__person { position:absolute; bottom:24px; left:206px; width:108px; height:150px; border:4px solid var(--ink); border-radius:54px 54px 15px 15px; background:#fffdf8; transform:rotate(11deg); }.cta-art__person::before { position:absolute; top:-54px; left:26px; width:67px; height:67px; border:4px solid var(--ink); border-radius:50%; background:#f6d9ba; content:''; }.cta-art__person i { position:absolute; top:30px; left:-57px; width:68px; height:19px; border:4px solid var(--ink); border-right:0; border-radius:30px 0 0 30px; background:var(--blue); transform:rotate(-26deg); }.cta-art__person b { position:absolute; right:-49px; top:34px; width:65px; height:19px; border:4px solid var(--ink); border-left:0; border-radius:0 30px 30px 0; background:var(--blue); transform:rotate(31deg); }.cta-art__person em { position:absolute; right:-6px; bottom:-31px; width:28px; height:36px; border:4px solid var(--ink); border-radius:5px; background:var(--yellow); transform:rotate(-12deg); }.cta-art__line { position:absolute; border-top:4px solid var(--ink); border-radius:50%; }.cta-art__line--one { top:31px; left:342px; width:100px; transform:rotate(31deg); }.cta-art__line--two { right:12px; bottom:56px; width:120px; transform:rotate(-15deg); }.cta-art__star { position:absolute; right:33px; top:35px; color:var(--ink); font-size:34px; }
.about-reveal { animation:about-reveal .8s cubic-bezier(.22,1,.36,1) both; }.about-reveal--delay { animation-delay:.12s; } @keyframes about-reveal { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
@media (max-width:980px) { .about-hero__grid,.about-intro__grid,.about-cta__grid { grid-template-columns:1fr; gap:52px; }.about-hero { padding-top:75px; }.about-hero__visual { max-width:680px; width:100%; margin:0 auto; }.about-section-heading { align-items:start; flex-direction:column; gap:18px; }.about-section-heading__aside { max-width:540px; } }
@media (max-width:700px) { .about-container { width:min(100% - 32px,600px); }.about-hero { min-height:0; padding:68px 0 72px; }.about-display { font-size:clamp(2.8rem,14vw,4.2rem); }.about-lead { font-size:16px; }.about-hero__visual { min-height:365px; transform:scale(.92); transform-origin:top center; margin-bottom:-45px; }.hero-art__orbit--one { left:5%; width:90%; height:270px; }.hero-art__orbit--two { left:12%; width:76%; height:215px; }.hero-art__tag--people { left:0; }.hero-art__tag--system { right:0; }.about-intro,.about-values { padding:78px 0; }.about-intro__body>p { font-size:17px; }.about-meta-grid { gap:10px; }.about-meta-grid span { font-size:11px; }.about-values__grid { grid-template-columns:1fr; gap:24px; }.value-card { min-height:0; }.value-illustration { max-width:350px; }.about-cta { padding:76px 0; }.cta-art { min-height:285px; transform:scale(.86); transform-origin:left center; margin-bottom:-45px; }.about-section-title { font-size:2.55rem; } }

/* Give the final CTA its own composition and hierarchy. */
.about-cta {
  position: relative;
  overflow: hidden;
  background: var(--blue);
}

.about-cta::before {
  position: absolute;
  top: -120px;
  right: -80px;
  width: 360px;
  height: 360px;
  border: 2px solid rgba(255, 253, 248, .22);
  border-radius: 50%;
  content: '';
}

.about-cta__grid {
  position: relative;
  z-index: 1;
  grid-template-columns: .9fr 1.1fr;
}

.about-cta__copy { order: 1; }
.about-cta .cta-art { order: 2; }
.about-cta .about-section-title { color: #fffdf8; }
.about-cta__copy>p:not(.about-section-label) { color: rgba(255, 253, 248, .82); }
.about-cta .about-section-label--dark { color: #ffdc65; }
.about-cta .about-button--blue { color: var(--ink); background: var(--yellow); }
.about-cta .about-button--blue:hover { box-shadow: 0 10px 20px rgba(18, 58, 128, .3); }
.about-cta .cta-art__sun { background: var(--yellow); }
.about-cta .cta-art__window { background: #fffdf8; }
.about-cta .cta-art__line { border-color: rgba(255, 253, 248, .78); }
.about-cta .cta-art__star { color: #ffdc65; }
.about-cta__copy { animation: cta-copy-in .9s cubic-bezier(.22,1,.36,1) both; }
.about-cta .cta-art { animation: cta-art-bob 7s ease-in-out infinite; }

@keyframes cta-copy-in {
  from { opacity: 0; translate: -18px 0; }
  to { opacity: 1; translate: 0 0; }
}

@keyframes cta-art-bob {
  0%, 100% { translate: 0 0; }
  50% { translate: 0 -8px; }
}

@media (prefers-reduced-motion: reduce) {
  .about-cta__copy,
  .about-cta .cta-art { animation: none; }
}

@media (max-width:980px) {
  .about-cta__grid { grid-template-columns:1fr; }
}
</style>

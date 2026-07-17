<template>
  <div class="bg-[#f8f9fb] scheme-light">
    <AppHeader />

    <!-- ============================
         HERO SECTION — REDESIGNED
    ============================= -->
    <section class="relative bg-[#f8f9fb] overflow-hidden">
      <div class="hero-approval relative max-w-7xl mx-auto px-6 pt-24 pb-24 lg:pt-28 lg:pb-32">
        <div class="hero-dots absolute inset-0 pointer-events-none" />
        <svg class="hero-link absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1180 760" preserveAspectRatio="none" fill="none">
          <path d="M240 560 C 420 730, 720 740, 890 560" stroke="#c2d2f2" stroke-width="2" stroke-dasharray="7 9" />
        </svg>

        <div class="relative z-10 max-w-[700px] mx-auto text-center">
          <!-- Badge -->
          <div class="hero-badge inline-flex items-center gap-2 border border-[#d3e1ff] bg-[#e9f0ff] rounded-full px-3.5 py-1.5 animate-fade-up">
            <span class="w-1.5 h-1.5 rounded-full bg-[#1f9d6b] flex-shrink-0"></span>
            <span class="text-[12px] font-bold tracking-wide text-[#2f57c9]">Enterprise-Grade Digital Evolution</span>
          </div>

          <!-- Headline -->
          <h1 class="mt-6 text-5xl sm:text-6xl lg:text-[58px] xl:text-[64px] font-extrabold leading-[1.08] tracking-tight text-[#16233f] animate-fade-up" style="animation-delay:.08s">
            <span>{{ $t('hero.title.part1') }}</span>
            {{ ' ' + $t('hero.title.part2') + ' ' }}
            <span class="hero-accent">
              {{ $t('hero.title.part3') }}
              <svg viewBox="0 0 120 10" preserveAspectRatio="none" fill="none"><path d="M3 7 Q 60 1 117 6" stroke="#3a63e0" stroke-width="3.5" stroke-linecap="round" /></svg>
            </span>
            {{ ' ' + $t('hero.title.part4') + ' ' }}
            <span>{{ $t('hero.title.part5') }}</span>
          </h1>

          <!-- Subheadline -->
          <p class="mt-6 text-base sm:text-lg leading-relaxed text-[#5b6b86] max-w-[580px] mx-auto animate-fade-up" style="animation-delay:.16s">
            {{ $t('hero.caption') }}
          </p>

          <!-- CTAs -->
          <div class="mt-9 flex flex-wrap items-center justify-center gap-3.5 animate-fade-up" style="animation-delay:.26s">
            <a
              href="#why-shifd-section"
              class="inline-flex items-center gap-2 bg-gradient-to-br from-[#3a63e0] to-[#2f6be8] hover:brightness-110 active:scale-[0.98] text-white px-7 py-3.5 rounded-2xl font-bold text-sm shadow-[0_14px_32px_-6px_rgba(47,87,201,0.5)] transition-all duration-200 whitespace-nowrap"
            >
              {{ $t('hero.whyButton') }}
            </a>

            <a
              href="#shifd-services-section"
              class="inline-flex items-center gap-2 bg-white text-[#2f57c9] px-6 py-3.5 rounded-2xl font-bold text-sm border border-[#d3e1ff] hover:bg-[#f3f6ff] transition-colors duration-200 whitespace-nowrap"
            >
              Explore Solutions
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Animated approval-flow illustration -->
        <div class="hero-scene animate-fade-up" style="animation-delay:.25s">
          <div class="hero-blob hero-blob-l"></div>
          <div class="hero-blob hero-blob-r"></div>

          <div class="hero-card hero-card-steps">
            <div class="hero-steps-head">
              <span class="hero-steps-title">Alur persetujuan</span>
              <span class="hero-live"><i></i>LIVE</span>
            </div>
            <div class="hero-steps-body">
              <div class="hero-rail"><div class="hero-rail-fill" :style="{ height: railHeight }"></div></div>
              <div v-for="(s, i) in flowSteps" :key="s.label" class="hero-step" :class="{ done: isDone(i), active: isActive(i) }">
                <div class="hero-step-dot">
                  <span class="num">{{ i + 1 }}</span>
                  <span class="chk">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                </div>
                <div>
                  <div class="hero-step-label">{{ s.label }}</div>
                  <div class="hero-step-sub">{{ s.sub }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="hero-card hero-card-doc">
            <div class="hero-doc-head">
              <div class="hero-doc-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f57c9" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
              </div>
              <div class="min-w-0">
                <div class="hero-doc-title">INV-2024-001</div>
                <div class="hero-doc-sub">Pengajuan anggaran &middot; Keuangan</div>
              </div>
              <span class="hero-doc-chip" :class="{ ok: chipOk }">{{ chipText }}</span>
            </div>
            <div class="hero-doc-lines"><i style="width:100%"></i><i style="width:84%"></i><i style="width:62%"></i></div>
            <div class="hero-doc-amount">
              <span class="text-[10px] font-extrabold tracking-wide text-[#9aa6bd]">NILAI PENGAJUAN</span>
              <span class="text-sm font-extrabold text-[#16233f] whitespace-nowrap">Rp 48.500.000</span>
            </div>
            <div class="hero-doc-sign">
              <div class="hero-sign-label">Tanda tangan &middot; L2 Direktur</div>
              <div class="hero-sign-area">
                <svg width="130" height="40" viewBox="0 0 130 40" fill="none">
                  <path class="hero-sig-path" :class="{ draw: sigDraw }" d="M8 28 C 18 6, 26 36, 38 22 S 58 8, 68 24 S 88 34, 98 16 S 116 20, 124 14" stroke="#2f57c9" stroke-width="2.4" stroke-linecap="round" />
                </svg>
              </div>
              <div class="hero-stamp" :class="{ show: stampShow }">DISETUJUI</div>
            </div>
            <div class="hero-doc-id">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#b6c0d4" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              ID APV-7F2K9 &middot; terenkripsi SHA-256
            </div>
          </div>

          <div class="hero-toast" :class="{ show: toastShow }">
            <div class="hero-toast-ico">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </div>
            <div>
              <div class="text-xs font-extrabold leading-tight text-[#16233f]">Disetujui &amp; terarsip</div>
              <div class="text-[10px] text-[#9aa6bd]">PDF resmi dibuat &middot; baru saja</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END HERO SECTION -->

    <!-- SECTION 2 APPROVAL STARTS -->
    <div
      class="relative isolate overflow-hidden bg-gray-50 reveal opacity-0 min-h-screen flex items-center"
      id="products-services"
    >
      <!-- Smooth gradient top — transisi dari Hero (#f8f9fb) ke bg-gray-50 -->
      <div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#f8f9fb] to-transparent pointer-events-none z-10" />

      <!-- Smooth gradient bottom — transisi ke section berikutnya -->
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      <section class="w-full max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <p class="text-xs font-extrabold uppercase tracking-widest text-[#2f57c9] mb-4">{{ $t('whatWeDo.label') }}</p>
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {{ $t('whatWeDo.title1') }} <span class="text-[#2f57c9]">{{ $t('whatWeDo.title2') }}</span>
          </h2>
          <p class="text-lg text-slate-600 max-w-xl mx-auto">{{ $t('whatWeDo.subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Pillar 01: Products -->
          <div class="feature-card bg-white border border-gray-100 rounded-3xl p-8 lg:p-10 flex flex-col">
            <div class="flex items-center justify-between mb-6">
              <div class="icon-box-blue-primary rounded-2xl flex items-center justify-center shadow-sm" style="width:52px;height:52px;">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path stroke-linecap="round" stroke-linejoin="round" d="M14 2v6h6"/><path stroke-linecap="round" stroke-linejoin="round" d="m9 15 2 2 4-4"/></svg>
              </div>
              <span class="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">{{ $t('whatWeDo.pillar1') }}</span>
            </div>
            <h3 class="text-2xl font-extrabold text-slate-900 tracking-tight mb-3">{{ $t('whatWeDo.products.title') }}</h3>
            <p class="text-slate-500 text-[15px] leading-relaxed mb-5">{{ $t('whatWeDo.products.description') }}</p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="inline-flex items-center gap-2 bg-[#e9f0ff] border border-[#d3e1ff] text-[#2f57c9] text-[13px] font-bold px-3 py-1.5 rounded-full">
                <svg class="w-[15px] h-[15px]" viewBox="0 0 24 24"><rect x="4" y="7" width="12.5" height="12.5" rx="3.2" fill="#2f57c9" opacity="0.24"/><rect x="7.5" y="3.5" width="12.5" height="12.5" rx="3.2" fill="#2f57c9"/><path d="m10.6 9.7 2 2 3.4-3.6" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
                {{ $t('whatWeDo.products.tag') }}
              </span>
            </div>
            <ul class="space-y-3">
              <li class="flex items-center gap-3">
                <span class="w-[18px] h-[18px] rounded-full bg-[#e9f0ff] flex items-center justify-center flex-shrink-0"><svg class="w-2.5 h-2.5" fill="none" stroke="#2f57c9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></span>
                <span class="text-sm font-medium text-slate-700">{{ $t('whatWeDo.products.point1') }}</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-[18px] h-[18px] rounded-full bg-[#e9f0ff] flex items-center justify-center flex-shrink-0"><svg class="w-2.5 h-2.5" fill="none" stroke="#2f57c9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></span>
                <span class="text-sm font-medium text-slate-700">{{ $t('whatWeDo.products.point2') }}</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-[18px] h-[18px] rounded-full bg-[#e9f0ff] flex items-center justify-center flex-shrink-0"><svg class="w-2.5 h-2.5" fill="none" stroke="#2f57c9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></span>
                <span class="text-sm font-medium text-slate-700">{{ $t('whatWeDo.products.point3') }}</span>
              </li>
            </ul>
          </div>

          <!-- Pillar 02: Services -->
          <div class="feature-card bg-white border border-gray-100 rounded-3xl p-8 lg:p-10 flex flex-col">
            <div class="flex items-center justify-between mb-6">
              <div class="rounded-2xl bg-[#1a1c1e] flex items-center justify-center shadow-sm" style="width:52px;height:52px;">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2 2 7l10 5 10-5-10-5z"/><path stroke-linecap="round" stroke-linejoin="round" d="m2 17 10 5 10-5"/><path stroke-linecap="round" stroke-linejoin="round" d="m2 12 10 5 10-5"/></svg>
              </div>
              <span class="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">{{ $t('whatWeDo.pillar2') }}</span>
            </div>
            <h3 class="text-2xl font-extrabold text-slate-900 tracking-tight mb-3">{{ $t('whatWeDo.services.title') }}</h3>
            <p class="text-slate-500 text-[15px] leading-relaxed mb-5">{{ $t('whatWeDo.services.description') }}</p>
            <div class="flex flex-wrap gap-2 mb-6">
              <span class="bg-slate-100 border border-slate-200 text-slate-700 text-[13px] font-bold px-3 py-1.5 rounded-full">{{ $t('whatWeDo.services.tag1') }}</span>
              <span class="bg-slate-100 border border-slate-200 text-slate-700 text-[13px] font-bold px-3 py-1.5 rounded-full">{{ $t('whatWeDo.services.tag2') }}</span>
              <span class="bg-slate-100 border border-slate-200 text-slate-700 text-[13px] font-bold px-3 py-1.5 rounded-full">{{ $t('whatWeDo.services.tag3') }}</span>
            </div>
            <ul class="space-y-3">
              <li class="flex items-center gap-3">
                <span class="w-[18px] h-[18px] rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0"><svg class="w-2.5 h-2.5" fill="none" stroke="#1a1c1e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></span>
                <span class="text-sm font-medium text-slate-700">{{ $t('whatWeDo.services.point1') }}</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-[18px] h-[18px] rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0"><svg class="w-2.5 h-2.5" fill="none" stroke="#1a1c1e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></span>
                <span class="text-sm font-medium text-slate-700">{{ $t('whatWeDo.services.point2') }}</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="w-[18px] h-[18px] rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0"><svg class="w-2.5 h-2.5" fill="none" stroke="#1a1c1e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></span>
                <span class="text-sm font-medium text-slate-700">{{ $t('whatWeDo.services.point3') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
    <!-- SECTION 2 APPROVAL END -->

    <div class="w-full h-20 bg-gradient-to-b from-gray-50 to-[#F8FAFC] pointer-events-none"></div>

    <!-- ============================
     SECTION 3 SERVICE START
    ============================= -->
    <div
      class="relative isolate overflow-hidden z-10 rounded-t-[40px] pb-24 -mt-20"
      id="shifd-services-section"
      style="
        background-color: #F8FAFC;
        background-image:
          radial-gradient(at 0% 0%,   hsla(213, 100%, 73%, 0.18) 0px, transparent 50%),
          radial-gradient(at 100% 0%,  hsla(160, 100%, 76%, 0.18) 0px, transparent 50%),
          radial-gradient(at 100% 100%, hsla(258, 100%, 76%, 0.15) 0px, transparent 50%),
          radial-gradient(at 0% 100%,  hsla(213, 100%, 73%, 0.15) 0px, transparent 50%);
      "
    >
      <!-- Header -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-6 text-center reveal opacity-0">
    
        <!-- Small label -->
        <p class="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4 sm:mb-5">
          {{ $t('services.smallTitle') }}
        </p>
    
        <!-- Main headline -->
        <h2 class="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-4 sm:mb-5">
          {{ $t('services.cta1') }}
          <span class="inline-block bg-[#2f57c9] text-white px-4 py-2 rounded-xl shadow-lg ml-1 sm:ml-2 mt-2 sm:mt-0">
            {{ $t('services.cta2') }}
          </span>
        </h2>
    
        <!-- Bridging text -->
        <p class="text-lg sm:text-xl font-light text-gray-500 mb-4">
          {{ $t('services.bridgingText') }}
        </p>
    
        <!-- Caption -->
        <p class="text-base sm:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
          {{ $t('services.caption') }}
        </p>
      </section>
    
      <!-- Service Cards Grid -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 reveal opacity-0">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
    
          <ServiceCard
            icon="fa-solid fa-mobile-screen-button"
            title="Mobile Development"
            :description="$t('services.mobileDevDesc')"
            :tags="['Native', 'Hybrid']"
            :deliverables="serviceDeliverables.mobile"
            color="blue"
          />
    
          <ServiceCard
            icon="fa-solid fa-display"
            title="Web Development"
            :description="$t('services.webDevDesc')"
            :tags="['Open Source']"
            :deliverables="serviceDeliverables.web"
            color="green"
          />
    
          <ServiceCard
            icon="fa-regular fa-comments"
            title="Solution Consultation"
            :description="$t('services.consultationDesc')"
            :tags="['Free Consultation']"
            :deliverables="serviceDeliverables.consultation"
            color="violet"
          />
    
        </div>
      </div>
    </div>
    <!-- SECTION 3 SERVICE END -->

    <div class="relative isolate min-h-screen overflow-hidden bg-[#2E5B9F] reveal opacity-0" id="why-shifd-section">
      <div class="relative px-6 pt-20">
        <div class="mx-auto text-start"> 
          <p class="text-[30px] text-center tracking-tight font-light text-white reveal opacity-0">
            {{ $t('companyValues.why') }}
          </p>

          <p class="text-[120px] text-center font-['DM_Serif_Text'] text-white leading-none mb-10">
            Shifd?
          </p>

          <p class="text-[30px] px-4 md:px-40 text-center font-normal text-white max-w-6xl mx-auto">
            {{ $t('companyValues.caption1') }}
          </p>

          <p class="text-[30px] px-4 md:px-40 text-center font-extralight italic text-white mt-4">
            {{ $t('companyValues.caption2') }}
          </p>
        </div>
      </div>

      <div class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14 mt-20 text-white text-center px-6">
        <div class="flex flex-col items-center">
          <div class="h-12 flex items-center justify-center mb-6">
            <img :src="cloudBasedIcon" class="h-12 w-auto invert brightness-0" alt="Cloud Based" />
          </div>
          <p class="text-[25px] font-semibold leading-snug mb-3">Cloud Based</p>
          <p class="text-white/80 text-[18px] leading-[1.7] max-w-xs">
            {{ $t('companyValues.value1') }}
          </p>
        </div>

        <div class="flex flex-col items-center">
          <div class="h-12 flex items-center justify-center mb-6">
            <img :src="dedicatedSupportIcon" class="h-12 w-auto invert brightness-0" alt="Dedicated Support" />
          </div>
          <p class="text-[25px] font-semibold leading-snug mb-3">Dedicated Support</p>
          <p class="text-white/80 text-[18px] leading-[1.7] max-w-xs">
            {{ $t('companyValues.value2') }}
          </p>
        </div>

        <div class="flex flex-col items-center">
          <div class="h-12 flex items-center justify-center mb-6">
            <img :src="technicalExcellenceIcon" class="h-12 w-auto invert brightness-0" alt="Technical Excellence" />
          </div>
          <p class="text-[25px] font-semibold leading-snug mb-3">Technical Excellence</p>
          <p class="text-white/80 text-[18px] leading-[1.7] max-w-xs">
            {{ $t('companyValues.value3') }}
          </p>
        </div>

        <div class="flex flex-col items-center">
          <div class="h-12 flex items-center justify-center mb-6">
            <img :src="securityRealibilityIcon" class="h-12 w-auto invert brightness-0" alt="Security & Reliability" />
          </div>
          <p class="text-[25px] font-semibold leading-snug mb-3">Security & Reliability</p>
          <p class="text-white/80 text-[18px] leading-[1.7] max-w-xs">
            {{ $t('companyValues.value4') }}
          </p>
        </div>
      </div>

      <div class="relative mt-20 flex flex-col gap-4 py-10 w-full overflow-hidden uppercase font-sans mb-50">
        <div class="relative flex overflow-hidden">
          <div class="flex w-max animate-marquee-reverse whitespace-nowrap">
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-black font-[poppins] text-white">Fully customizable</span>
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Fully customizable</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Fully customizable</span>
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Fully customizable</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Fully customizable</span>
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Fully customizable</span>
            </div>
          </div>
        </div>

        <div class="relative flex overflow-hidden">
          <div class="flex animate-marquee whitespace-nowrap">
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Secure Reliable</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Secure Reliable</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Secure Reliable</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Secure Reliable</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Secure Reliable</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Secure Reliable</span>
            </div>
          </div>
        </div>

        <div class="relative flex overflow-hidden">
          <div class="flex animate-marquee-reverse whitespace-nowrap">
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Multi Platform</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Multi Platform</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Multi Platform</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Multi Platform</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Multi Platform</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Multi Platform</span>
            </div>
          </div>
        </div>

        <div class="relative flex overflow-hidden">
          <div class="flex animate-marquee whitespace-nowrap">
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Customer Centric</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Customer Centric</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Customer Centric</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Customer Centric</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Customer Centric</span>
              <span class="text-[9rem] leading-none mx-8 font-black text-white font-[poppins]">Customer Centric</span>
            </div>
          </div>
        </div>

        <div class="relative flex overflow-hidden">
          <div class="flex animate-marquee-reverse whitespace-nowrap">
            <div class="flex items-center">
              <span class="text-9xl mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">On-Time Delivery</span>
              <span class="text-9xl mx-8 font-black text-white font-[poppins]">On-Time Delivery</span>
            </div>
            <div class="flex items-center">
              <span class="text-9xl mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">On-Time Delivery</span>
              <span class="text-9xl mx-8 font-black text-white font-[poppins]">On-Time Delivery</span>
            </div>
            <div class="flex items-center">
              <span class="text-9xl mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">On-Time Delivery</span>
              <span class="text-9xl mx-8 font-black text-white font-[poppins]">On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 5 CTA START -->
    <div class="relative z-10 bg-white rounded-t-[40px] -mt-20 reveal opacity-0" id="contact-section">
 
      <!-- Full-width CTA section -->
      <section class="relative w-full overflow-hidden cta-mesh-bg">
 
        <!-- Decorative background elements -->
        <div aria-hidden="true" class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
          <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div class="absolute -bottom-24 -left-24 w-72 h-72 border border-blue-200 rounded-full opacity-50"></div>
          <div class="absolute -top-12 -right-12 w-48 h-48 border border-cyan-200 rounded-full opacity-50"></div>
        </div>
 
        <!-- Content -->
        <div class="relative z-10 px-6 py-20 sm:py-24 md:py-32 lg:px-16 text-center">
 
          <!-- Heading group -->
          <div class="max-w-3xl mx-auto space-y-5 sm:space-y-6">
            <h2 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
              {{ $t('callToAction.title1') }}
              <span class="cta-text-gradient inline-block">{{ $t('callToAction.title2') }}</span>
            </h2>
            <p class="text-lg sm:text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
              {{ $t('callToAction.caption') }}
            </p>
          </div>
 
          <!-- Buttons -->
          <div class="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
 
            <!-- WhatsApp Button -->
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              class="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#2f57c9] hover:bg-[#2448a8] rounded-2xl hover:shadow-lg hover:shadow-[#2f57c9]/30 transition-all duration-200 w-full sm:w-auto whitespace-nowrap"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 mr-2.5 transition-transform duration-200 group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.49 2.138 7.837L0 32l8.374-2.195A15.916 15.916 0 0 0 16 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.046 22.3c-.332.933-1.953 1.786-2.686 1.898-.687.104-1.552.148-2.503-.158-.577-.187-1.317-.435-2.261-.853-3.979-1.718-6.579-5.72-6.778-5.986-.198-.265-1.618-2.15-1.618-4.102 0-1.952 1.024-2.913 1.387-3.311.364-.397.794-.497 1.059-.497.265 0 .53.003.762.014.244.012.572-.093.895.683.332.794 1.127 2.746 1.226 2.944.099.199.165.43.033.694-.133.265-.199.43-.397.662-.199.232-.418.519-.596.697-.199.198-.406.413-.175.81.232.397 1.03 1.7 2.212 2.754 1.52 1.355 2.8 1.775 3.197 1.974.397.198.629.165.861-.1.232-.264.993-1.158 1.258-1.555.265-.397.53-.332.894-.199.364.133 2.313 1.09 2.71 1.288.397.199.662.298.761.464.1.165.1.96-.232 1.88z"/>
              </svg>
              {{ $t('callToAction.whatsAppUs') }}
            </a>
 
            <!-- Contact Us Button -->
            <router-link
              to="/contact-us"
              aria-label="Contact Us"
              class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white border-2 border-[#2f57c9] text-[#2f57c9] hover:bg-[#2f57c9]/5 hover:border-[#2448a8] rounded-2xl transition-all duration-200 w-full sm:w-auto whitespace-nowrap"
            >
              {{ $t('callToAction.contactUs') }}
            </router-link>
 
          </div>
        </div>
      </section>
 
    </div>
    <!-- SECTION 5 CTA END -->

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from 'vue'
import ServiceCard from '../components/Services.vue'

import cloudBasedIcon from '@/assets/company-values/cloud-based.svg'
import dedicatedSupportIcon from '@/assets/company-values/dedicated-support.svg'
import technicalExcellenceIcon from '@/assets/company-values/technical-excellence.svg'
import securityRealibilityIcon from '@/assets/company-values/security-realibility.svg'

import AppHeader from '../components/AppHeader.vue'
import Footer from '../components/Footer.vue'
import { serviceDeliverables } from '@/constants/services'

// Hero illustration: animated approval-flow cycle (steps → e-sign → archived)
const flowSteps = [
  { label: 'L1 · Manajer', sub: 'Review anggaran' },
  { label: 'L2 · Direktur', sub: 'Persetujuan akhir' },
  { label: 'Tanda tangan', sub: 'E-sign terverifikasi' },
  { label: 'Terarsip', sub: 'PDF + jejak audit' },
]
const doneAt = [1, 2, 4, 5]
const activeMap = [0, 1, 2, 2, 3, -1]
const railHeights = ['0%', '34%', '67%', '67%', '100%', '100%']
const chipLabels = ['Menunggu L1', 'Menunggu L2', 'Proses e-sign', 'Proses e-sign', 'Disetujui', 'Disetujui']

const cycle = ref(0)
const isDone = (i: number) => cycle.value >= doneAt[i]!
const isActive = (i: number) => !isDone(i) && activeMap[cycle.value] === i
const railHeight = computed(() => railHeights[cycle.value]!)
const chipText = computed(() => chipLabels[cycle.value]!)
const chipOk = computed(() => cycle.value >= 4)
const sigDraw = computed(() => cycle.value >= 3)
const stampShow = computed(() => cycle.value >= 4)
const toastShow = computed(() => cycle.value >= 5)

let cycleTimer: ReturnType<typeof setInterval>

onMounted(() => {
  cycleTimer = setInterval(() => {
    cycle.value = (cycle.value + 1) % 6
  }, 1400)

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up')
        entry.target.classList.remove('opacity-0')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el)
  })
})

onUnmounted(() => {
  clearInterval(cycleTimer)
})
</script>

<style scoped>
/* .reveal hanya penanda untuk IntersectionObserver; animasi masuknya
   ditangani penuh oleh .animate-fade-up (style.css) — jangan tambah
   transition di sini agar tidak bersaing dengan animation. */

/* ─── Section 2: What We Do cards ─── */
.feature-card {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}
@media (hover: hover) {
  .feature-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
}
.icon-box-blue-primary {
  background: linear-gradient(135deg, #2f57c9 0%, #2448a8 100%);
}

/* ─── Hero: approval-flow illustration (ported from design-reference) ─── */
@keyframes heroStrokeDraw { to { stroke-dashoffset: 0; } }
@keyframes heroStampIn {
  0%   { opacity: 0; transform: rotate(-18deg) scale(2.1); }
  55%  { opacity: 1; transform: rotate(-7deg) scale(.93); }
  100% { opacity: 1; transform: rotate(-7deg) scale(1); }
}
@keyframes heroPopCheck {
  0%   { transform: scale(.3); opacity: 0; }
  60%  { transform: scale(1.12); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}
@keyframes heroBlob {
  0%, 100% { transform: translate(0,0) scale(1); }
  50%       { transform: translate(16px,-14px) scale(1.05); }
}
@keyframes heroDashMove { to { stroke-dashoffset: -64; } }

.hero-approval { min-height: 780px; }
.hero-dots {
  background-image: radial-gradient(#c9d8f7 1.4px, transparent 1.4px);
  background-size: 26px 26px;
  -webkit-mask-image: radial-gradient(closest-side at 50% 44%, transparent 20%, #000 58%, transparent 100%);
  mask-image: radial-gradient(closest-side at 50% 44%, transparent 20%, #000 58%, transparent 100%);
}
.hero-link path { animation: heroDashMove 1.1s linear infinite; }

.hero-badge { color: #2f57c9; }
.hero-accent {
  position: relative;
  display: inline-block;
  background: linear-gradient(100deg, #2f57c9, #5a86f0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-accent svg { position: absolute; left: 0; bottom: -8px; width: 100%; height: 10px; }
.hero-accent path { stroke-dasharray: 130; stroke-dashoffset: 130; animation: heroStrokeDraw .8s .9s ease both; }

.hero-scene { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
.hero-blob { position: absolute; border-radius: 50%; pointer-events: none; }
.hero-blob-l { width: 380px; height: 380px; background: radial-gradient(circle, rgba(58,99,224,.14), rgba(58,99,224,0) 70%); top: 60px; left: -70px; animation: heroBlob 9s ease-in-out infinite; }
.hero-blob-r { width: 420px; height: 420px; background: radial-gradient(circle, rgba(58,99,224,.12), rgba(58,99,224,0) 70%); top: 130px; right: -80px; animation: heroBlob 11s ease-in-out infinite 1.2s; }

.hero-card { background: #fff; border: 1px solid #e9eef6; border-radius: 20px; position: absolute; }
.hero-card-doc { right: 0; top: 380px; width: 300px; transform: rotate(3.5deg); padding: 22px; box-shadow: 0 34px 70px -32px rgba(20,35,63,.45); z-index: 1; }
.hero-card-steps { left: 0; top: 200px; width: 262px; transform: rotate(-5deg); padding: 20px; box-shadow: 0 28px 60px -30px rgba(20,35,63,.4); z-index: 2; }

.hero-doc-head { display: flex; align-items: center; gap: 10px; padding-bottom: 14px; border-bottom: 1px solid #eef1f7; }
.hero-doc-ico { width: 36px; height: 36px; border-radius: 10px; background: #e9f0ff; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.hero-doc-title { font-weight: 800; font-size: 14px; color: #16233f; }
.hero-doc-sub { font-size: 11px; color: #9aa6bd; white-space: nowrap; }
.hero-doc-chip { margin-left: auto; font-size: 11px; font-weight: 700; padding: 4px 9px; border-radius: 7px; white-space: nowrap; transition: all .3s; color: #2f57c9; background: #e9f0ff; }
.hero-doc-chip.ok { color: #1f9d6b; background: #e6f6ee; }
.hero-doc-lines { display: flex; flex-direction: column; gap: 9px; margin-top: 16px; }
.hero-doc-lines i { height: 9px; border-radius: 6px; background: #edf1f9; display: block; }
.hero-doc-amount { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 16px; background: #f7f9fd; border: 1px solid #eef1f7; border-radius: 11px; padding: 10px 14px; }
.hero-doc-sign { position: relative; margin-top: 16px; border: 1.5px dashed #c9d8f7; border-radius: 13px; padding: 12px 14px 8px; background: #fbfcff; }
.hero-sign-label { font-size: 10px; font-weight: 800; letter-spacing: .06em; color: #9aa6bd; text-transform: uppercase; }
.hero-sign-area { height: 42px; display: flex; align-items: center; }
.hero-sig-path { stroke-dasharray: 220; stroke-dashoffset: 220; }
.hero-sig-path.draw { animation: heroStrokeDraw 1.1s ease forwards; }
.hero-stamp { position: absolute; right: -10px; top: -16px; border: 2.5px solid #1f9d6b; color: #1f9d6b; background: rgba(230,246,238,.94); border-radius: 10px; padding: 7px 12px; font-size: 13px; font-weight: 800; letter-spacing: .14em; box-shadow: 0 10px 24px -12px rgba(31,157,107,.6); opacity: 0; }
.hero-stamp.show { animation: heroStampIn .5s cubic-bezier(.2,.9,.3,1.3) both; }
.hero-doc-id { display: flex; align-items: center; gap: 6px; margin-top: 12px; font-size: 10px; color: #b6c0d4; font-weight: 600; }

.hero-steps-head { display: flex; align-items: center; gap: 8px; }
.hero-steps-title { font-weight: 800; font-size: 13px; color: #16233f; }
.hero-live { margin-left: auto; display: inline-flex; align-items: center; gap: 5px; background: #e6f6ee; color: #1f9d6b; font-size: 10px; font-weight: 800; padding: 3px 9px; border-radius: 999px; }
.hero-live i { width: 6px; height: 6px; border-radius: 50%; background: #1f9d6b; }
.hero-steps-body { position: relative; margin-top: 10px; }
.hero-rail { position: absolute; left: 16px; top: 16px; bottom: 16px; width: 2px; border-radius: 999px; background: #e6ebf4; overflow: hidden; }
.hero-rail-fill { width: 100%; border-radius: 999px; background: linear-gradient(180deg, #3a63e0, #2f6be8); transition: height .7s ease; height: 0%; }
.hero-step { display: flex; align-items: center; gap: 12px; padding: 9px 0; position: relative; }
.hero-step-dot { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; position: relative; z-index: 1; transition: all .4s; background: #f1f5fd; border: 2px solid #e3e9f2; color: #9aa6bd; font-size: 12px; font-weight: 800; }
.hero-step-dot .chk { display: none; }
.hero-step.active .hero-step-dot { background: #fff; border-color: #2f57c9; color: #2f57c9; box-shadow: 0 0 0 5px rgba(47,87,201,.14); }
.hero-step.done .hero-step-dot { background: linear-gradient(135deg, #3a63e0, #2f6be8); border-color: transparent; box-shadow: 0 6px 14px -6px rgba(47,87,201,.5); }
.hero-step.done .num { display: none; }
.hero-step.done .chk { display: flex; animation: heroPopCheck .45s ease both; }
.hero-step-label { font-size: 13px; font-weight: 800; transition: color .4s; color: #9aa6bd; white-space: nowrap; }
.hero-step.done .hero-step-label, .hero-step.active .hero-step-label { color: #16233f; }
.hero-step-sub { font-size: 11px; color: #9aa6bd; margin-top: 1px; white-space: nowrap; }

.hero-toast { position: absolute; left: 20%; bottom: 30px; z-index: 3; background: #fff; border: 1px solid #e9eef6; border-radius: 14px; padding: 11px 15px; box-shadow: 0 16px 36px -12px rgba(20,35,63,.35); display: flex; align-items: center; gap: 9px; opacity: 0; }
.hero-toast.show { animation: heroPopCheck .5s ease both; }
.hero-toast-ico { width: 30px; height: 30px; border-radius: 50%; background: #1f9d6b; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

@media (max-width: 1000px) {
  .hero-approval { min-height: 0; }
  .hero-scene { position: relative; margin-top: 48px; display: flex; flex-direction: column; gap: 20px; align-items: center; }
  .hero-card { position: relative; inset: auto; transform: none; }
  .hero-card-doc, .hero-card-steps { top: auto; left: auto; right: auto; width: min(340px, 100%); }
  .hero-toast { position: relative; left: auto; bottom: auto; opacity: 1; }
  .hero-link, .hero-dots { display: none; }
}

/* ─── Legacy styles (fade transition, font-outline) ─── */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 300ms ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.font-outline {
  -webkit-text-stroke: 2px white;
  color: transparent;
}

.cta-mesh-bg {
  background-color: #ffffff;
  background-image:
    radial-gradient(at 0% 0%,   hsla(210, 100%, 95%, 1) 0px, transparent 50%),
    radial-gradient(at 100% 0%,  hsla(190, 100%, 95%, 1) 0px, transparent 50%),
    radial-gradient(at 50% 100%, hsla(220, 100%, 95%, 1) 0px, transparent 50%);
}
 
.cta-text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(to right, #3b82f6, #06b6d4);
}


</style>
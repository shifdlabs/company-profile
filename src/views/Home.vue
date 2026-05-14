<template>
  <div class="bg-[#f8f9fb] scheme-light">
    <AppHeader />

    <!-- ============================
         HERO SECTION — REDESIGNED
    ============================= -->
    <div class="relative min-h-screen bg-[#f8f9fb] overflow-hidden">
      <!-- Subtle grid background -->
      <div class="absolute inset-0 hero-grid pointer-events-none" />

      <div class="relative max-w-7xl mx-auto px-6 xl:px-0">
        <div class="min-h-screen flex flex-col lg:flex-row items-center gap-16 lg:gap-8 pt-20 pb-16 lg:pt-24 lg:pb-0 lg:min-h-screen">

          <!-- LEFT: Text content -->
          <div class="flex-1 lg:max-w-[54%] animate-fade-up">

            <!-- Badge -->
            <div class="inline-flex items-center gap-2 border border-gray-300 bg-white/70 rounded-full px-4 py-1.5 mb-8 shadow-xs">
              <span class="w-1.5 h-1.5 rounded-full bg-[#2f80ed] flex-shrink-0"></span>
              <span class="text-[11px] font-semibold tracking-widest text-[#5c5e61] uppercase">
                Enterprise-Grade Digital Evolution
              </span>
            </div>

            <!-- Headline -->
            <h1 class="text-5xl sm:text-6xl lg:text-[68px] xl:text-7xl font-black leading-[1.04] tracking-tight text-[#1a1c1e] mb-6">
              <span>{{ $t('hero.title.part1') }}</span>
              {{ ' ' + $t('hero.title.part2') + ' ' }}
              <em class="hero-italic text-[#2f80ed]">{{ $t('hero.title.part3') }}</em>
              {{ ' ' + $t('hero.title.part4') + ' ' }}
              <span>{{ $t('hero.title.part5') }}</span>
            </h1>

            <!-- Subheadline -->
            <p class="text-base sm:text-lg text-[#44474a] leading-relaxed max-w-[500px] mb-10">
              {{ $t('hero.caption') }}
            </p>

            <!-- CTAs -->
            <div class="flex flex-wrap items-center gap-6">
              <a
                href="#why-shifd-section"
                class="inline-flex items-center justify-center bg-[#1a1c1e] hover:bg-[#2d3033] active:scale-[0.98] text-white px-10 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-md whitespace-nowrap min-w-[200px]"
              >
                {{ $t('hero.whyButton') }}
              </a>

              <a
                href="#shifd-services-section"
                class="inline-flex items-center gap-2 text-[#1a1c1e] hover:text-[#2f80ed] font-bold text-sm transition-colors duration-200 whitespace-nowrap"
              >
                Explore Solutions
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
                </svg>
              </a>
            </div>
          </div>

          <!-- RIGHT: Animated Dashboard Mockup -->
          <div class="flex-1 flex items-center justify-center lg:justify-end lg:pl-6 w-full">
            <div class="relative w-full max-w-[460px] lg:max-w-[500px]">

              <!-- STATUS card: floating top-right -->
              <div class="absolute -top-6 -right-2 sm:-top-8 sm:right-0 lg:-top-6 lg:-right-6 z-20 hero-float-fast">
                <div class="flex items-center gap-3 bg-[#1a1c1e] text-white rounded-2xl px-4 py-3 shadow-2xl">
                  <div class="w-9 h-9 rounded-xl bg-[#2f80ed]/25 flex items-center justify-center flex-shrink-0">
                    <!-- Shield check icon -->
                    <svg class="w-5 h-5 text-[#2f80ed]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
                    </svg>
                  </div>
                  <div class="min-w-0">
                    <p class="text-[10px] uppercase tracking-widest text-white/50 font-medium leading-none mb-0.5">Status</p>
                    <p class="text-sm font-bold leading-none whitespace-nowrap">Hardened</p>
                  </div>
                </div>
              </div>

              <!-- Main dashboard card -->
              <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hero-float-main">
                <!-- Animated blue scan line at top -->
                <div class="h-[3px] hero-scan-bar"></div>

                <div class="p-5 sm:p-6">

                  <!-- Card header: icon + placeholder text + LIVE badge -->
                  <div class="flex items-center gap-3 mb-5">
                    <div class="w-10 h-10 rounded-xl bg-[#f0f6ff] border border-[#2f80ed]/15 flex items-center justify-center flex-shrink-0">
                      <!-- Analytics icon -->
                      <svg class="w-5 h-5 text-[#2f80ed]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
                      <div class="h-2 bg-gray-100 rounded-full w-20"></div>
                    </div>
                    <span class="text-[10px] font-bold tracking-widest text-[#2f80ed] bg-[#f0f6ff] border border-[#2f80ed]/20 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                      LIVE
                    </span>
                  </div>

                  <!-- Data rows -->
                  <div class="space-y-2.5 mb-5">
                    <!-- Active row -->
                    <div class="flex items-center gap-3 bg-[#f8f9fb] rounded-xl px-4 py-3">
                      <span class="w-2 h-2 rounded-full bg-[#2f80ed] flex-shrink-0 hero-pulse-dot"></span>
                      <div class="h-2 bg-gray-300 rounded-full flex-1"></div>
                      <div class="h-2 bg-[#2f80ed]/30 rounded-full w-14 flex-shrink-0 ml-auto"></div>
                    </div>
                    <!-- Inactive row -->
                    <div class="flex items-center gap-3 bg-[#f8f9fb] rounded-xl px-4 py-3">
                      <span class="w-2 h-2 rounded-full bg-gray-300 flex-shrink-0"></span>
                      <div class="h-2 bg-gray-200 rounded-full w-3/4"></div>
                      <div class="h-2 bg-gray-200 rounded-full w-10 flex-shrink-0 ml-auto"></div>
                    </div>
                  </div>

                  <!-- Stat: 99.98% -->
                  <div class="flex items-end justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p class="text-[42px] font-black text-[#1a1c1e] tracking-tight leading-none">99.98%</p>
                      <p class="text-xs text-[#5c5e61] mt-1 font-medium tracking-wide">Uptime SLA</p>
                    </div>
                    <div class="w-9 h-9 rounded-full bg-[#2f80ed] flex items-center justify-center shadow-md flex-shrink-0">
                      <span class="text-[10px] font-bold text-white">AI</span>
                    </div>
                  </div>

                </div>
              </div>

              <!-- Conversion badge: floating bottom-left -->
              <div class="absolute -bottom-6 left-0 sm:-bottom-8 sm:left-4 lg:-bottom-6 lg:left-6 z-20 hero-float-slow">
                <div class="bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-3 flex items-center gap-4">
                  <div class="min-w-0">
                    <p class="text-sm font-bold text-[#2f80ed] whitespace-nowrap">+32% Conversion</p>
                    <p class="text-[9px] uppercase tracking-widest text-[#5c5e61] font-medium whitespace-nowrap">Infrastructure Optimization</p>
                  </div>
                  <div class="w-9 h-9 rounded-xl bg-[#f0f6ff] flex items-center justify-center flex-shrink-0">
                    <!-- Trend up icon -->
                    <svg class="w-4.5 h-4.5 text-[#2f80ed]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- END HERO SECTION -->

    <!-- SECTION 2 APPROVAL STARTS -->
    <div
      class="relative isolate overflow-hidden bg-gray-50 reveal opacity-0"
      id="products-services"
    >
      <!-- Smooth gradient top — transisi dari Hero (#f8f9fb) ke bg-gray-50 -->
      <div class="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#f8f9fb] to-transparent pointer-events-none z-10" />
    
      <!-- Smooth gradient bottom — transisi ke section berikutnya -->
      <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
    
      <ApprovalFeatures />
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
          <span class="inline-block bg-[#1363DF] text-white px-4 py-2 rounded-xl shadow-lg ml-1 sm:ml-2 mt-2 sm:mt-0">
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

      <div class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-20 text-white text-center px-6">
        <div class="flex flex-col items-center gap-1">
          <div class="h-20 w-18 flex items-center justify-center mb-4">
            <img :src="cloudBasedIcon" class="max-h-full max-w-full invert brightness-0" />
          </div>
          <p class="text-[25px] font-semibold h-10 flex items-center justify-center mb-3">Cloud Based</p>
          <p class="text-white/80 text-[20px] leading-[1.7] max-w-xs min-h-[140px]">
            {{ $t('companyValues.value1') }}
          </p>
        </div>

        <div class="flex flex-col items-center gap-1">
          <div class="h-16 w-16 flex items-center justify-center mb-8">
            <img :src="dedicatedSupportIcon" class="max-h-full max-w-full invert brightness-0" />
          </div>
          <p class="text-[25px] font-semibold h-10 flex items-center justify-center mb-3">Dedicated Support</p>
          <p class="text-white/80 text-[20px] leading-[1.7] max-w-xs min-h-[140px]">
            {{ $t('companyValues.value2') }}
          </p>
        </div>

        <div class="flex flex-col items-center gap-1">
          <div class="h-18 w-18 flex items-center justify-center mb-6">
            <img :src="technicalExcellenceIcon" class="max-h-full max-w-full invert brightness-0" />
          </div>
          <p class="text-[25px] font-semibold h-10 flex items-center justify-center mb-3">Technical Excellence</p>
          <p class="text-white/80 text-[20px] leading-[1.7] max-w-xs min-h-[140px]">
            {{ $t('companyValues.value3') }}
          </p>
        </div>

        <div class="flex flex-col items-center gap-5">
          <div class="h-18 w-18 flex items-center justify-center mb-2">
            <img :src="securityRealibilityIcon" class="max-h-full max-w-full invert brightness-0" />
          </div>
          <p class="text-[25px] font-semibold h-10 flex items-center justify-center">Security & Reliability</p>
          <p class="text-white/80 text-[20px] leading-[1.7] max-w-xs min-h-[140px]">
            {{ $t('companyValues.value4') }}
          </p>
        </div>
      </div> 

      <div class="relative mt-20 flex flex-col gap-4 py-10 w-full overflow-hidden uppercase font-sans mb-50">
        <div class="relative flex overflow-hidden">
          <div class="flex w-max animate-marquee-reverse whitespace-nowrap">
            <div class="flex items-center">
              <span class="text-[9rem] leading-none leading-none mx-8 font-black font-[poppins] text-white">Fully customizable</span>
              <span class="text-[9rem] leading-none leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Fully customizable</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none leading-none mx-8 font-black text-white font-[poppins]">Fully customizable</span>
              <span class="text-[9rem] leading-none leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Fully customizable</span>
            </div>
            <div class="flex items-center">
              <span class="text-[9rem] leading-none leading-nonemx-8 font-black text-white font-[poppins]">Fully customizable</span>
              <span class="text-[9rem] leading-none leading-none mx-8 font-bold text-transparent font-[poppins]" style="-webkit-text-stroke: 2px white;">Fully customizable</span>
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
              class="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#1363DF] hover:bg-[#0f55c4] rounded-2xl hover:shadow-lg hover:shadow-[#1363DF]/30 transition-all duration-200 w-full sm:w-auto whitespace-nowrap"
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
              class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white border-2 border-[#1363DF] text-[#1363DF] hover:bg-[#1363DF]/5 hover:border-[#0f55c4] rounded-2xl transition-all duration-200 w-full sm:w-auto whitespace-nowrap"
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
import { onMounted } from 'vue'
import ServiceCard from '../components/Services.vue'

import cloudBasedIcon from '@/assets/company-values/cloud-based.svg'
import dedicatedSupportIcon from '@/assets/company-values/dedicated-support.svg'
import technicalExcellenceIcon from '@/assets/company-values/technical-excellence.svg'
import securityRealibilityIcon from '@/assets/company-values/security-realibility.svg'

import AppHeader from '../components/AppHeader.vue'
import Footer from '../components/Footer.vue'
import ApprovalFeatures from '@/components/ApprovalFeatures.vue'
import { serviceDeliverables } from '@/constants/services'

onMounted(() => {
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
</script>

<style scoped>
.reveal {
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

/* ─── Hero: subtle grid background ─── */
.hero-grid {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.038) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 0, 0, 0.038) 1px, transparent 1px);
  background-size: 52px 52px;
}

/* ─── Hero: "impact" italic style ─── */
.hero-italic {
  font-style: italic;
  font-family: inherit;
}

/* ─── Dashboard float animations ─── */
@keyframes heroFloatMain {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}
@keyframes heroFloatFast {
  0%, 100% { transform: translateY(0px) rotate(-1.5deg); }
  50%       { transform: translateY(-7px) rotate(-1.5deg); }
}
@keyframes heroFloatSlow {
  0%, 100% { transform: translateY(0px) rotate(1deg); }
  50%       { transform: translateY(-12px) rotate(1deg); }
}

.hero-float-main {
  animation: heroFloatMain 7s ease-in-out infinite;
}
.hero-float-fast {
  animation: heroFloatFast 5s ease-in-out infinite;
}
.hero-float-slow {
  animation: heroFloatSlow 8s ease-in-out infinite;
  animation-delay: -3s;
}

/* ─── Scan bar at top of dashboard card ─── */
@keyframes heroScanBar {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(300%); }
}
.hero-scan-bar {
  background: linear-gradient(90deg, transparent 0%, #2f80ed 40%, #7ab5f7 60%, transparent 100%);
  animation: heroScanBar 2.8s ease-in-out infinite;
}

/* ─── Pulsing live dot ─── */
@keyframes heroPulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.45; transform: scale(1.4); }
}
.hero-pulse-dot {
  animation: heroPulseDot 1.8s ease-in-out infinite;
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
<template>
  <div class="bg-[#f8f9fb] dark:bg-gray-950 scheme-light dark:scheme-dark">
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

    <!-- ============================================================
         ALL SECTIONS BELOW ARE UNCHANGED FROM THE ORIGINAL
    ============================================================ -->

    <div class="relative isolate overflow-hidden animate-fade-up mb-20" id="products-services">
      <div class="relative px-6 pt-10">
        <div class="max-auto text-center">
          <p class="text-[35px] md:text-[38px] lg:text-[43px] text-center font-light tracking-tight text-gray-600">
            {{ $t('productIntroduction.title') }}
          </p>

          <p
            class="mt-4
                  max-w-6xl
                  mx-auto
                  font-extralight
                  text-center
                  text-xl lg:text-xl
                  text-gray-600"
          >
            {{ $t('productIntroduction.caption') }}
          </p>
        </div>
      </div>
    </div>
    
    <div class="relative isolate min-h-screen overflow-hidden animate-fade-up mb-20" id="products-services">
      <div
        class="
          inline-flex items-center gap-3 sm:gap-4
          border-1 border-gray-300
          rounded-[200px]
          px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4
          ml-4 sm:ml-4 md:ml-6 lg:ml-15
        "
      >
        <img
          src="/src/assets/shifd-approval-icon.svg"
          alt="Shifd Approval Icon"
          class="
            w-10 h-10
            sm:w-12 sm:h-12
            md:w-20 md:h-20
            lg:w-25 lg:h-25
          "
        />

        <div class="leading-tight">
          <p class="text-xs sm:text-sm md:text-[20px] text-gray-400">
            shifd
          </p>
          <p class="text-lg sm:text-xl md:text-[35px] text-gray-600 font-extrabold">
            Approval
          </p>
        </div>
      </div>

      <div
        class="flex flex-col gap-6 px-6 mt-4 md:mt-10 lg:flex-row lg:items-center lg:px-15"
      >
        <!-- LEFT TEXT -->
        <span
          class="text-[32px] md:text-[40px] lg:text-[50px] text-gray-600 font-bold max-w-[700px] text-left"
        >
          {{ $t('approval.title1') }}
          <span class="text-[#7367F0]">{{ $t('approval.title2') }}</span>
          {{ $t('approval.title3') }}
        </span>

        <!-- RIGHT TEXT -->
        <span
          class="
            text-[16px]
            md:text-[18px]
            lg:text-[20px]
            font-light
            max-w-[700px]

            text-left
            lg:text-right
            lg:ml-auto
          "
        >
          {{ $t('approval.caption') }}
        </span>
      </div>

      <ApprovalFeatures />
    </div>


    <div class="w-full h-[100px] bg-linear-to-b from-white to-gray-600"></div>

    <div class="relative isolate min-h-screen overflow-hidden z-10 bg-white rounded-t-[40px] pb-24 -mt-20" id="shifd-services-section">
      <div class="relative px-6 pt-20">
        <div class="max-auto text-start">
          <p class="text-[25px] text-center tracking-tight font-inter text-gray-600">
            {{ $t('services.smallTitle') }}
          </p>

          <p class="text-[50px] font-bold mt-10 text-center text-l">
            <span class="text-gray-600">{{ $t('services.cta1') }}</span>

            <span
              class="
                bg-blue-500 text-white px-8 py-4 rounded-2xl shadow-lg inline-flex items-center ml-2
                sm:px-8 sm:py-5
                md:px-10 md:py-6
                lg:px-8 lg:py-4
              "
            >
              <span class="typing-text inline-block overflow-hidden">
                {{ $t('services.cta2') }}
              </span>
            </span>
          </p>

          <p class="text-[35px] text-center font-extralight mt-5 text-gray-600">
            {{ $t('services.bridgingText') }}
          </p>

          <p
            class="
              text-[23px] font-normal mt-3 text-gray-600 text-center
              px-6
              sm:px-8
              md:px-20
              lg:pl-[130px] lg:pr-[130px]
              xl:pl-[130px] xl:pr-[130px]
              max-w-[1600px] mx-auto
            "
          >
            {{ $t('services.caption') }}
          </p>
        </div>
      </div>

      <div
        class="grid gap-12 mt-20 justify-center
              grid-cols-1
              md:grid-cols-1
              lg:grid-cols-3
              xl:grid-cols-3
              max-w-[400px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[1200px] xl:max-w-[1200px]
              mx-auto
          "
      >
        <ServiceCard
          icon="fa-solid fa-mobile-screen-button text-6xl text-gray-700"
          title="Mobile Development"
          :description="$t('services.mobileDevDesc')"
          :tags="['Native', 'Hybrid']"
          :deliverables="serviceDeliverables.mobile"
        />
        <ServiceCard
          icon="fa-solid fa-display text-6xl text-gray-700"
          title="Web Development"
          :description="$t('services.webDevDesc')"
          :tags="['Open Source']"
          :deliverables="serviceDeliverables.web"
        />
        <ServiceCard
          icon="fa-regular fa-comments text-6xl text-gray-700"
          title="Solution Consultation"
          :description="$t('services.consultationDesc')"
          :tags="['Free Consultation']"
          :deliverables="serviceDeliverables.consultation"
        />
      </div>
    </div>

    <div class="relative isolate min-h-screen overflow-hidden bg-[#2E5B9F]" id="why-shifd-section">
      <div class="relative px-6 pt-20">
        <div class="mx-auto text-start"> 
          <p class="text-[30px] text-center tracking-tight font-light text-white">
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

    <div class="relative z-10 bg-white rounded-t-[40px] -mt-20" id="contact-section">
      <div class="relative px-6 pt-20 pb-20">
        <div class="max-auto text-start">
          <p
            class="
              text-[80px] leading-[1.1] text-center tracking-tight font-bold text-gray-800 mb-10
              max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1200px] xl:max-w-[1200px]
              mx-auto
            "
          >
            {{ $t('callToAction.title1') }} 
            <span class="text-blue-500">{{ $t('callToAction.title2') }}</span>
          </p>

          <p class="text-[30px] px-4 md:px-40 text-center font-light text-gray-600 max-w-6xl mx-auto mb-10">
            {{ $t('callToAction.caption') }}
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <!-- WhatsApp Button -->
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              class="
                flex items-center justify-center gap-2
                bg-[#1363DF] hover:bg-[#337dec] text-white
                rounded-xl shadow-lg transition

                w-full sm:w-[220px] md:w-auto
                px-4 py-3 sm:px-6 sm:py-4
                text-sm sm:text-base md:text-lg
                font-semibold
                whitespace-nowrap
              "
            >
              <i class="fa-brands fa-whatsapp text-lg sm:text-xl md:text-2xl"></i>
              <span>{{ $t('callToAction.whatsAppUs') }}</span>
            </a>

            <!-- Outline Button -->
            <router-link
              to="/contact-us"
              class="
                flex items-center justify-center
                rounded-xl border border-blue-500
                text-blue-500 font-medium
                hover:bg-blue-50 transition

                w-full sm:w-[220px] md:w-auto
                px-4 py-3 sm:px-12 sm:py-4
                text-sm sm:text-base md:text-lg
                whitespace-nowrap
              "
            >
              {{ $t('callToAction.contactUs') }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import ServiceCard from '../components/Services.vue'

import cloudBasedIcon from '@/assets/company-values/cloud-based.svg'
import dedicatedSupportIcon from '@/assets/company-values/dedicated-support.svg'
import technicalExcellenceIcon from '@/assets/company-values/technical-excellence.svg'
import securityRealibilityIcon from '@/assets/company-values/security-realibility.svg'

import AppHeader from '../components/AppHeader.vue'
import Footer from '../components/Footer.vue'
import ApprovalFeatures from '@/components/ApprovalFeatures.vue'
import { serviceDeliverables } from '@/constants/services'
</script>

<style scoped>
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
</style>
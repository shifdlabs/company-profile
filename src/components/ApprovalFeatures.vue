<template>
  <section class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">

    <!-- =====================
         HEADER
    ===================== -->
    <div class="text-center mb-16">

      <!-- Logo Badge (UI dari Stitch, logo file dari aset lama) -->
      <div class="flex justify-center mb-8">
        <div class="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100">
          <img
            src="/src/assets/shifd-approval-icon.svg"
            alt="Shifd Approval"
            class="w-10 h-10 rounded-xl mr-3 shadow-md flex-shrink-0"
          />
          <div class="text-left">
            <p class="text-[10px] uppercase tracking-widest text-gray-400 font-bold leading-none">shifd</p>
            <p class="text-xl font-extrabold text-slate-800 leading-tight">Approval</p>
          </div>
        </div>
      </div>

      <!-- Title -->
      <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
        {{ $t('approval.headlinePrefix') }}
        <span class="text-indigo-600">{{ $t('approval.headlineHighlight') }}</span>
      </h2>

      <!-- Subtitle -->
      <p class="text-lg text-slate-600 max-w-2xl mx-auto">
        {{ $t('approval.caption') }}
      </p>
    </div>

    <!-- =====================
         FEATURES GRID
    ===================== -->
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

      <!-- ── HERO CARD: Seamless Dashboard ── -->
      <div
        class="md:col-span-2 lg:col-span-2 feature-card bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col min-h-[340px] items-start"
      >
        <!-- Text content -->
        <div class="relative z-10">
          <h3 class="text-3xl font-bold mb-4">{{ $t('approval.features.title1') }}</h3>
          <p class="text-indigo-100 text-lg max-w-sm leading-relaxed">
            {{ $t('approval.features.description1') }}
          </p>
          <div class="flex flex-wrap gap-2 mt-6">
            <div class="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20 flex items-center space-x-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="text-xs font-bold tracking-wide">Interactive Chart</span>
            </div>
            <div class="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20 flex items-center space-x-2">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
              </svg>
              <span class="text-xs font-bold tracking-wide">Quick Action</span>
            </div>
          </div>
        </div>

        <!-- Animated wave background -->
        <div class="absolute bottom-0 right-0 w-full h-1/2 opacity-20 pointer-events-none select-none overflow-hidden">
          <svg
            class="absolute bottom-0 min-w-[200%] h-full animate-wave"
            preserveAspectRatio="none"
            viewBox="0 0 1000 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,50 C150,150 350,0 500,50 C650,100 850,0 1000,50 L1000,100 L0,100 Z" fill="white"/>
          </svg>
        </div>

        <!-- Data row overlay (desktop only) -->
        <div class="absolute bottom-8 right-10 z-10 hidden lg:block opacity-40">
          <div class="space-y-3">
            <div class="flex items-center space-x-3 bg-white/5 p-2 rounded-lg border border-white/10 w-48">
              <div class="w-6 h-6 rounded bg-white/20"></div>
              <div class="flex-1 space-y-1">
                <div class="h-1.5 w-16 bg-white/30 rounded"></div>
                <div class="h-1 w-10 bg-white/20 rounded"></div>
              </div>
            </div>
            <div class="flex items-center space-x-3 bg-white/5 p-2 rounded-lg border border-white/10 w-48">
              <div class="w-6 h-6 rounded bg-white/20"></div>
              <div class="flex-1 space-y-1">
                <div class="h-1.5 w-20 bg-white/30 rounded"></div>
                <div class="h-1 w-8 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bar chart + "ACTIVE VIEW" badge overlay -->
        <div class="absolute top-10 right-10 opacity-30">
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 flex items-center space-x-2">
            <span class="text-[10px] font-bold text-white tracking-widest uppercase">ACTIVE VIEW</span>
            <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"/>
            </svg>
          </div>
          <svg fill="none" height="80" viewBox="0 0 120 80" width="120">
            <rect fill="white" height="30" rx="2" width="12" x="10" y="50"/>
            <rect fill="white" height="50" rx="2" width="12" x="30" y="30"/>
            <rect fill="white" height="35" rx="2" width="12" x="50" y="45"/>
            <rect fill="white" height="60" rx="2" width="12" x="70" y="20"/>
            <rect fill="white" height="40" rx="2" width="12" x="90" y="40"/>
          </svg>
        </div>
      </div>

      <!-- ── Electronic Workflow ── -->
      <div class="feature-card bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-start min-h-[340px]">
        <div class="w-12 h-12 icon-box-indigo rounded-2xl flex items-center justify-center mb-6 shadow-sm">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 002-2h2a2 2 0 002 2" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-3 text-slate-800">{{ $t('approval.features.title2') }}</h3>
        <p class="text-slate-500 text-sm leading-relaxed mb-6">{{ $t('approval.features.description2') }}</p>

        <!-- Draft → Review → Approve progress -->
        <div class="mt-auto w-full pt-4">
          <div class="flex items-center justify-between px-2">
            <div class="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 text-[10px] font-bold">1</div>
            <div class="flex-1 h-px bg-indigo-100 mx-2"></div>
            <div class="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 text-[10px] font-bold">2</div>
            <div class="flex-1 h-px bg-indigo-100 mx-2"></div>
            <div class="w-8 h-8 rounded-full bg-indigo-600 shadow-sm flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M5 13l4 4L19 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
              </svg>
            </div>
          </div>
          <div class="flex justify-between text-[8px] font-bold text-gray-400 uppercase tracking-tighter px-1 mt-2">
            <span>Draft</span>
            <span>Review</span>
            <span>Approve</span>
          </div>
        </div>
      </div>

      <!-- ── Multi Layer Approval ── -->
      <div class="feature-card bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-start min-h-[340px]">
        <div class="w-12 h-12 icon-box-purple rounded-2xl flex items-center justify-center mb-6 shadow-sm">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-3 text-slate-800">{{ $t('approval.features.title3') }}</h3>
        <p class="text-slate-500 text-sm leading-relaxed mb-4">{{ $t('approval.features.description3') }}</p>

        <!-- L1 / L2 progress bars -->
        <div class="mt-auto w-full pt-4">
          <div class="flex flex-col space-y-3">
            <div class="flex items-center space-x-3">
              <div class="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0">L1</div>
              <div class="h-1.5 flex-1 bg-indigo-100 rounded-full">
                <div class="h-full w-full bg-indigo-500 rounded-full"></div>
              </div>
              <span class="text-[10px] font-bold text-indigo-600 uppercase flex-shrink-0">Done</span>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-6 h-6 rounded bg-white border border-indigo-200 flex items-center justify-center text-[10px] text-indigo-400 font-bold flex-shrink-0">L2</div>
              <div class="h-1.5 flex-1 bg-indigo-50 rounded-full">
                <div class="h-full w-1/2 bg-indigo-400 rounded-full"></div>
              </div>
              <span class="text-[10px] font-bold text-gray-400 uppercase flex-shrink-0">Pending</span>
            </div>
          </div>
        </div>
      </div>

      <!-- ── Paperless with PDF Output ── -->
      <div class="feature-card bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-start min-h-[340px]">
        <div class="w-12 h-12 icon-box-blue rounded-2xl flex items-center justify-center mb-6 shadow-sm">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <path d="M9 17h6M9 13h6M13 3v6h6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-3 text-slate-800">{{ $t('approval.features.title4') }}</h3>
        <p class="text-slate-500 text-sm leading-relaxed mb-4">{{ $t('approval.features.description4') }}</p>

        <!-- PDF file mockup -->
        <div class="mt-auto w-full pt-4">
          <div class="bg-slate-50 border border-gray-100 rounded-xl p-4 flex items-center justify-between shadow-inner">
            <div class="flex items-center space-x-3">
              <div class="bg-red-50 p-1.5 rounded-lg border border-red-100 flex-shrink-0">
                <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"/>
                </svg>
              </div>
              <div>
                <p class="text-[10px] font-bold text-slate-800 leading-tight uppercase">Report_2024.pdf</p>
                <p class="text-[8px] text-gray-400">2.4 MB • Encrypted</p>
              </div>
            </div>
            <svg class="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
          </div>
        </div>
      </div>

      <!-- ── E-Signature ── -->
      <div class="feature-card bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-start min-h-[340px]">
        <div class="w-12 h-12 icon-box-emerald rounded-2xl flex items-center justify-center mb-6 shadow-sm">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-3 text-slate-800">{{ $t('approval.features.title5') }}</h3>
        <p class="text-slate-500 text-sm leading-relaxed mb-6">{{ $t('approval.features.description5') }}</p>

        <!-- Signature mockup -->
        <div class="mt-auto w-full">
          <div class="border-b-2 border-emerald-100 pb-2 flex items-end justify-between">
            <div class="italic text-emerald-800 font-serif text-lg tracking-tight select-none opacity-80">J. Richardson</div>
            <div class="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md flex items-center space-x-1 border border-emerald-100">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fill-rule="evenodd"/>
              </svg>
              <span class="text-[8px] font-bold uppercase tracking-wider">Verified</span>
            </div>
          </div>
          <p class="text-[8px] text-gray-400 mt-2 font-mono">ID: 8842-XF9-2024</p>
        </div>
      </div>

      <!-- ── Custom Doc Numbering (wide) ── -->
      <div class="md:col-span-2 feature-card bg-white border border-gray-100 rounded-3xl p-8 flex flex-col md:flex-row items-start gap-6 md:gap-0 md:space-x-8 min-h-[340px]">
        <!-- Text side -->
        <div class="flex-1 flex flex-col items-start">
          <div class="w-12 h-12 icon-box-orange rounded-2xl flex items-center justify-center shadow-sm mb-6">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3 text-slate-800">{{ $t('approval.features.title6') }}</h3>
          <p class="text-slate-500 text-sm leading-relaxed">{{ $t('approval.features.description6') }}</p>
        </div>

        <!-- Interactive UI mockup -->
        <div class="w-full md:max-w-[240px] flex-shrink-0 flex flex-col gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 shadow-inner">
          <div class="space-y-4">
            <div>
              <label class="text-[10px] font-bold text-gray-400 uppercase tracking-tight mb-1 block">Format Configuration</label>
              <div class="grid grid-cols-2 gap-2">
                <div class="relative">
                  <span class="absolute top-1 left-2 text-[8px] text-gray-400 font-bold">PREFIX</span>
                  <input
                    class="w-full bg-white border border-gray-100 rounded-lg pt-4 pb-1.5 px-2 text-[11px] font-mono text-slate-700 focus:outline-none pointer-events-none"
                    readonly type="text" value="INV"
                  />
                </div>
                <div class="relative">
                  <span class="absolute top-1 left-2 text-[8px] text-gray-400 font-bold">YEAR</span>
                  <input
                    class="w-full bg-white border border-gray-100 rounded-lg pt-4 pb-1.5 px-2 text-[11px] font-mono text-slate-700 focus:outline-none pointer-events-none"
                    readonly type="text" value="2024"
                  />
                </div>
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-[10px] font-bold text-gray-400 uppercase tracking-tight block">Generated Sequence</label>
              <div class="bg-white rounded-lg border border-gray-100 divide-y divide-gray-50">
                <div class="px-3 py-2 flex justify-between items-center">
                  <span class="text-[11px] font-mono text-indigo-600">INV-2024-001</span>
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </div>
                <div class="px-3 py-2 flex justify-between items-center">
                  <span class="text-[11px] font-mono text-slate-400">INV-2024-002</span>
                  <span class="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                </div>
                <div class="px-3 py-2 flex justify-between items-center opacity-60">
                  <span class="text-[11px] font-mono text-slate-400">INV-2024-003</span>
                  <span class="w-1.5 h-1.5 rounded-full bg-gray-200"></span>
                </div>
              </div>
            </div>
            <div class="flex items-center justify-between pt-2 border-t border-gray-100">
              <div class="flex items-center space-x-2">
                <div class="w-6 h-3.5 bg-orange-500 rounded-full relative">
                  <div class="absolute right-0.5 top-0.5 w-2.5 h-2.5 bg-white rounded-full"></div>
                </div>
                <span class="text-[10px] font-medium text-slate-600">Auto-increment</span>
              </div>
              <span class="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- END Features Grid -->

    <!-- =====================
         CTA BUTTON
    ===================== -->
    <div class="mt-16 text-center">
      <router-link
        to="/contact-us"
        class="cta-link group inline-flex items-center font-semibold px-10 py-3.5 rounded-xl transition-all duration-300 border border-[#6366f1]/50 text-[#6366f1] hover:border-[#6366f1] hover:bg-[#6366f1]/5 bg-transparent"
      >
        {{ $t('approval.ctaButton') }}
        <svg
          class="arrow-icon ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
        </svg>
      </router-link>
    </div>

  </section>
</template>





<style scoped>
/* Card hover — lift dengan cubic-bezier bounce */
.feature-card {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Animated wave di hero card */
@keyframes wave {
  0%   { transform: translateX(0); }
  50%  { transform: translateX(-25%); }
  100% { transform: translateX(0); }
}
.animate-wave {
  animation: wave 10s ease-in-out infinite;
}

/* Icon gradient boxes */
.icon-box-indigo  { background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); }
.icon-box-purple  { background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%); }
.icon-box-blue    { background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); }
.icon-box-emerald { background: linear-gradient(135deg, #10b981 0%, #059669 100%); }
.icon-box-orange  { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); }
</style>
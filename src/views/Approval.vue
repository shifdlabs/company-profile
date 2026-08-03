<template>
  <div class="bg-[#f6f8fc] text-[#16233f] overflow-x-hidden">
    <AppHeader />

    <!-- ── HERO ── -->
    <section class="hero-approval-page relative bg-[#f6f8fc] overflow-hidden">
      <div class="relative max-w-7xl mx-auto px-6 pt-24 pb-24 lg:pt-28 lg:pb-32">
        <div class="hero-dots absolute inset-0 pointer-events-none" />
        <svg class="hero-link absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1180 760" preserveAspectRatio="none" fill="none">
          <path d="M240 560 C 420 730, 720 740, 890 560" stroke="#c2d2f2" stroke-width="2" stroke-dasharray="7 9" />
        </svg>

        <div class="relative z-10 max-w-[700px] mx-auto text-center">
          <div class="hero-badge inline-flex items-center gap-2 border border-[#d3e1ff] bg-[#e9f0ff] rounded-full px-3.5 py-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-[#1f9d6b] flex-shrink-0"></span>
            <span class="text-[12px] font-bold tracking-wide text-[#2f57c9]">{{ $t('approvalPage.hero.badge') }}</span>
          </div>

          <h1 class="mt-6 text-5xl sm:text-6xl lg:text-[58px] font-black leading-[1.08] tracking-tight text-[#16233f]">
            {{ $t('approvalPage.hero.title1') }}
            <span class="hero-accent">
              {{ $t('approvalPage.hero.titleHighlight') }}
              <svg viewBox="0 0 120 10" preserveAspectRatio="none" fill="none"><path d="M3 7 Q 60 1 117 6" stroke="#3a63e0" stroke-width="3.5" stroke-linecap="round" /></svg>
            </span>
            {{ $t('approvalPage.hero.title2') }}
          </h1>

          <p class="mt-6 text-base sm:text-lg leading-relaxed text-[#5b6b86] max-w-[580px] mx-auto">
            {{ $t('approvalPage.hero.description') }}
          </p>

          <div class="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-2xl text-sm font-bold"
              style="background: linear-gradient(135deg,#3a63e0,#2f6be8); box-shadow: 0 14px 32px -6px rgba(47,87,201,.5)"
            >
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.9-5.6A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z"/>
              </svg>
              {{ $t('approvalPage.hero.ctaContact') }}
            </a>
            <a
              href="#alur"
              class="inline-flex items-center gap-2 bg-white text-[#2f57c9] px-6 py-3.5 rounded-2xl text-sm font-bold border border-[#d3e1ff]"
            >
              {{ $t('approvalPage.hero.ctaHow') }}
            </a>
          </div>
        </div>

        <!-- Animated approval-flow illustration -->
        <div class="hero-scene">
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
            <div class="hero-ai-badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#fff"><path d="M12 2l1.9 5.6L19.5 9l-5.6 1.9L12 16.5l-1.9-5.6L4.5 9l5.6-1.4L12 2z" /></svg>
              {{ $t('approvalPage.hero.aiBadge') }}
            </div>
            <div class="hero-doc-head">
              <div class="hero-doc-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2f57c9" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></svg>
              </div>
              <div class="min-w-0">
                <div class="hero-doc-title">INV-2024-001</div>
                <div class="hero-doc-sub">{{ $t('approvalPage.hero.dept1') }}</div>
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
              <div class="text-xs font-extrabold leading-tight text-[#16233f]">{{ $t('approvalPage.flow.toLabel') }}</div>
              <div class="text-[10px] text-[#9aa6bd]">{{ $t('approvalPage.flow.toDesc') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── ANIMATED END-TO-END ── -->
    <section id="alur" class="bg-white border-y border-[#eef1f7] py-24 px-8">
      <div class="max-w-[1180px] mx-auto text-center">
        <p class="text-xs font-black uppercase tracking-[.08em] text-[#2f57c9]">{{ $t('approvalPage.flow.label') }}</p>
        <h2 class="text-[clamp(28px,3.6vw,40px)] font-black tracking-[-0.02em] mt-3.5 leading-[1.12]">
          {{ $t('approvalPage.flow.title') }}
        </h2>
        <p class="text-[17px] text-[#5b6b86] mt-4 max-w-[560px] mx-auto">
          {{ $t('approvalPage.flow.description') }}
        </p>

        <div class="mt-16 max-w-[1000px] mx-auto bg-[#f7f9fd] border border-[#eef1f7] rounded-[28px] px-10 py-14 overflow-x-auto">
          <div class="flex items-center justify-between min-w-[560px]">
            <!-- Manual -->
            <div
              class="text-center transition-all duration-500 flex-1"
              :style="{ opacity: stage === 0 ? 1 : 0.5, transform: stage === 0 ? 'scale(1)' : 'scale(0.96)' }"
            >
              <div class="mx-auto w-24 h-24 rounded-[22px] bg-white border border-[#e3e9f2] flex items-center justify-center" style="box-shadow: 0 12px 24px -14px rgba(20,35,63,.3)">
                <svg class="w-10 h-10" fill="none" stroke="#9aa6bd" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <polyline points="6 9 6 2 18 2 18 9"/>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                  <rect x="6" y="14" width="12" height="8"/>
                </svg>
              </div>
              <p class="font-bold text-[15px] mt-4">{{ $t('approvalPage.flow.fromLabel') }}</p>
              <p class="text-[13px] text-[#9aa6bd] mt-1">{{ $t('approvalPage.flow.fromDesc') }}</p>
            </div>

            <!-- Connector 1 -->
            <div class="relative mx-2 shrink-0 approval-connector">
              <div
                class="absolute top-0 left-0 h-full rounded-full bg-[#2f57c9] transition-all duration-700"
                :style="{ width: stage >= 1 ? '100%' : '0%' }"
              />
            </div>

            <!-- Check center -->
            <div class="relative mx-auto flex-shrink-0" style="width:120px; height:120px; display:flex; align-items:center; justify-content:center">
              <div
                class="absolute inset-3 rounded-full border-[3px] border-[#2f57c9]"
                :class="stage >= 2 ? 'approval-ring' : 'opacity-0'"
              />
              <div
                class="w-24 h-24 rounded-full flex items-center justify-center"
                style="background: linear-gradient(140deg,#3a63e0,#2f6be8); box-shadow: 0 18px 44px -12px rgba(47,87,201,.7)"
              >
                <div
                  class="flex transition-all duration-500"
                  :style="{
                    transform: stage >= 2 ? 'scale(1)' : 'scale(0.55)',
                    opacity: stage >= 2 ? 1 : 0.35,
                    transitionTimingFunction: 'cubic-bezier(.2,.9,.3,1.4)'
                  }"
                >
                  <svg class="w-12 h-12" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Connector 2 -->
            <div class="relative mx-2 shrink-0 approval-connector">
              <div
                class="absolute top-0 left-0 h-full rounded-full bg-[#2f57c9] transition-all duration-700"
                :style="{ width: stage >= 3 ? '100%' : '0%' }"
              />
            </div>

            <!-- Done -->
            <div
              class="text-center transition-all duration-500 flex-1"
              :style="{ opacity: stage >= 3 ? 1 : 0.35, transform: stage >= 3 ? 'translateX(0)' : 'translateX(12px)' }"
            >
              <div
                class="mx-auto w-24 h-24 rounded-[22px] bg-[#2f57c9] flex items-center justify-center"
                style="box-shadow: 0 16px 34px -14px rgba(47,87,201,.6)"
              >
                <svg class="w-10 h-10" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <path d="M14 2v6h6"/>
                  <path d="m9 15 2 2 4-4"/>
                </svg>
              </div>
              <p class="font-bold text-[15px] mt-4">{{ $t('approvalPage.flow.toLabel') }}</p>
              <p class="text-[13px] text-[#9aa6bd] mt-1">{{ $t('approvalPage.flow.toDesc') }}</p>
            </div>
          </div>
        </div>

        <div class="section-divider mt-14">{{ $t('approvalPage.howItWorks.title') }}</div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8 text-left">
          <div
            v-for="step in steps"
            :key="(step as any).n"
            class="bg-white border border-[#e9eef6] rounded-[20px] px-6 py-7"
            style="box-shadow: 0 18px 40px -28px rgba(20,35,63,.3)"
          >
            <p class="text-[40px] font-black leading-none tracking-[-0.02em] text-[#2f57c9]">{{ (step as any).n }}</p>
            <h3 class="font-black text-[17px] mt-4">{{ (step as any).t }}</h3>
            <p class="text-sm text-[#5b6b86] leading-[1.55] mt-2.5">{{ (step as any).d }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FEATURES ── -->
    <section id="fitur-inti" class="bg-white border-t border-[#eef1f7] py-24 px-8">
      <div class="max-w-[1180px] mx-auto">
        <div class="text-center">
          <div class="inline-flex items-center gap-3">
            <span class="w-7 h-7 rounded-[9px] bg-[#2f57c9] text-white text-xs font-black flex items-center justify-center">{{ $t('approvalPage.features.chapter') }}</span>
            <span class="text-[13px] font-black uppercase tracking-[.08em] text-[#2f57c9]">{{ $t('approvalPage.features.label') }}</span>
          </div>
          <h2 class="text-[clamp(28px,3.6vw,40px)] font-black tracking-[-0.02em] mt-4">{{ $t('approvalPage.features.title') }}</h2>
          <p class="text-[17px] text-[#5b6b86] mt-3.5 max-w-[540px] mx-auto">{{ $t('approvalPage.features.description') }}</p>
        </div>

        <!-- Row 1: Dashboard -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-[72px]">
          <div>
            <span class="inline-flex items-center text-xs font-black uppercase tracking-[.05em] text-[#2f57c9] bg-[#e9f0ff] px-3 py-1.5 rounded-lg">{{ $t('approvalPage.features.dashboardBadge') }}</span>
            <h3 class="text-[28px] font-black tracking-[-0.02em] mt-4">{{ $t('approvalPage.features.dashboardTitle') }}</h3>
            <p class="text-base text-[#5b6b86] leading-relaxed mt-3.5">{{ $t('approvalPage.features.dashboardDesc') }}</p>
            <div class="flex flex-col gap-3 mt-6">
              <div v-for="point in dashboardPoints" :key="String(point)" class="flex items-center gap-3 text-[15px] font-semibold text-[#16233f]">
                <span class="w-5 h-5 rounded-full bg-[#e9f0ff] flex items-center justify-center shrink-0">
                  <svg class="w-3 h-3" fill="none" stroke="#2f57c9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </span>
                {{ point }}
              </div>
            </div>
          </div>
          <!-- Chart mockup -->
          <div class="rounded-3xl p-8 text-white" style="background: linear-gradient(155deg,#3a63e0,#2546b0); box-shadow: 0 30px 60px -28px rgba(47,87,201,.7)">
            <div class="flex items-center justify-between">
              <span class="font-black text-base">{{ $t('approvalPage.features.chartTitle') }}</span>
              <span class="text-[11px] font-bold px-2.5 py-1 rounded-lg" style="background: rgba(255,255,255,.16)">{{ $t('approvalPage.features.chartThisWeek') }}</span>
            </div>
            <div class="flex items-end gap-2.5 mt-6" style="height: 120px">
              <div class="flex-1 rounded-t-lg" style="height:42%;background:rgba(255,255,255,.28)"></div>
              <div class="flex-1 rounded-t-lg" style="height:64%;background:rgba(255,255,255,.28)"></div>
              <div class="flex-1 rounded-t-lg" style="height:50%;background:rgba(255,255,255,.28)"></div>
              <div class="flex-1 rounded-t-lg bg-white" style="height:88%"></div>
              <div class="flex-1 rounded-t-lg" style="height:72%;background:rgba(255,255,255,.28)"></div>
              <div class="flex-1 rounded-t-lg" style="height:58%;background:rgba(255,255,255,.28)"></div>
            </div>
            <div class="grid grid-cols-2 gap-3 mt-6">
              <div class="rounded-[13px] p-3.5" style="background:rgba(255,255,255,.12)">
                <p class="text-[11px] font-bold text-[#bfcdea]">{{ $t('approvalPage.features.chartApproved') }}</p>
                <p class="text-white text-[22px] font-black mt-1">128</p>
              </div>
              <div class="rounded-[13px] p-3.5" style="background:rgba(255,255,255,.12)">
                <p class="text-[11px] font-bold text-[#bfcdea]">{{ $t('approvalPage.features.chartPending') }}</p>
                <p class="text-white text-[22px] font-black mt-1">14</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2: Multi-layer -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">
          <div class="bg-[#f7f9fd] border border-[#eef1f7] rounded-3xl p-9">
            <div class="flex flex-col gap-5">
              <div>
                <div class="flex items-center justify-between mb-2.5">
                  <span class="text-xs font-black text-[#2f57c9] bg-[#e9f0ff] px-2.5 py-1 rounded-[6px]">L1 · Manajer</span>
                  <span class="text-xs font-bold text-[#1f9d6b]">{{ $t('approvalPage.features.statusDone') }}</span>
                </div>
                <div class="h-2.5 rounded-full bg-[#e3e9f2] overflow-hidden">
                  <div class="h-full w-full bg-[#2f57c9] rounded-full"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-2.5">
                  <span class="text-xs font-black text-[#2f57c9] bg-[#e9f0ff] px-2.5 py-1 rounded-[6px]">L2 · Direktur</span>
                  <span class="text-xs font-bold text-[#c8821f]">{{ $t('approvalPage.features.statusPending') }}</span>
                </div>
                <div class="h-2.5 rounded-full bg-[#e3e9f2] overflow-hidden">
                  <div class="h-full bg-[#86a6f5] rounded-full" style="width:46%"></div>
                </div>
              </div>
              <div>
                <div class="flex items-center justify-between mb-2.5">
                  <span class="text-xs font-black text-[#9aa6bd] bg-[#eef1f7] px-2.5 py-1 rounded-[6px]">L3 · Finance</span>
                  <span class="text-xs font-bold text-[#9aa6bd]">{{ $t('approvalPage.features.statusQueued') }}</span>
                </div>
                <div class="h-2.5 rounded-full bg-[#e3e9f2] overflow-hidden">
                  <div class="h-full w-0 bg-[#86a6f5] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span class="inline-flex items-center text-xs font-black uppercase tracking-[.05em] text-[#2f57c9] bg-[#e9f0ff] px-3 py-1.5 rounded-lg">{{ $t('approvalPage.features.multilayerBadge') }}</span>
            <h3 class="text-[28px] font-black tracking-[-0.02em] mt-4">{{ $t('approvalPage.features.multilayerTitle') }}</h3>
            <p class="text-base text-[#5b6b86] leading-relaxed mt-3.5">{{ $t('approvalPage.features.multilayerDesc') }}</p>
          </div>
        </div>

        <!-- Row 3: Numbering -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">
          <div>
            <span class="inline-flex items-center text-xs font-black uppercase tracking-[.05em] text-[#2f57c9] bg-[#e9f0ff] px-3 py-1.5 rounded-lg">{{ $t('approvalPage.features.numberingBadge') }}</span>
            <h3 class="text-[28px] font-black tracking-[-0.02em] mt-4">{{ $t('approvalPage.features.numberingTitle') }}</h3>
            <p class="text-base text-[#5b6b86] leading-relaxed mt-3.5">{{ $t('approvalPage.features.numberingDesc') }}</p>
          </div>
          <div class="bg-[#f7f9fd] border border-[#eef1f7] rounded-3xl p-7">
            <p class="text-[11px] font-black tracking-[.06em] text-[#9aa6bd] uppercase">{{ $t('approvalPage.features.formatConfig') }}</p>
            <div class="grid grid-cols-2 gap-3 mt-3.5">
              <div class="bg-white border border-[#e6ebf4] rounded-[11px] p-3">
                <p class="text-[10px] font-bold text-[#9aa6bd]">PREFIX</p>
                <p class="font-black text-[15px] font-mono">INV</p>
              </div>
              <div class="bg-white border border-[#e6ebf4] rounded-[11px] p-3">
                <p class="text-[10px] font-bold text-[#9aa6bd]">{{ $t('approvalPage.features.formatYear') }}</p>
                <p class="font-black text-[15px]">2024</p>
              </div>
            </div>
            <p class="text-[11px] font-black tracking-[.06em] text-[#9aa6bd] uppercase mt-5">{{ $t('approvalPage.features.formatGenerated') }}</p>
            <div class="flex flex-col gap-2 mt-3">
              <div class="flex items-center justify-between bg-white border border-[#e6ebf4] rounded-[10px] px-3.5 py-2.5">
                <span class="font-bold text-[#2f57c9] text-sm font-mono tracking-wide">INV-2024-001</span>
                <span class="w-2 h-2 rounded-full bg-[#1f9d6b]"></span>
              </div>
              <div class="flex items-center justify-between bg-white border border-[#eef1f7] rounded-[10px] px-3.5 py-2.5">
                <span class="font-semibold text-[#9aa6bd] text-sm font-mono tracking-wide">INV-2024-002</span>
                <span class="w-2 h-2 rounded-full bg-[#d8dfeb]"></span>
              </div>
              <div class="flex items-center justify-between bg-white border border-[#eef1f7] rounded-[10px] px-3.5 py-2.5">
                <span class="font-semibold text-[#9aa6bd] text-sm font-mono tracking-wide">INV-2024-003</span>
                <span class="w-2 h-2 rounded-full bg-[#d8dfeb]"></span>
              </div>
            </div>
            <div class="flex items-center justify-between mt-4 pt-4 border-t border-[#eef1f7]">
              <span class="text-sm text-[#5b6b86] font-semibold">{{ $t('approvalPage.features.formatAutoIncrement') }}</span>
              <span class="text-xs font-black text-[#1f9d6b]">{{ $t('approvalPage.features.formatActive') }}</span>
            </div>
          </div>
        </div>

        <!-- 3 Small feature cards -->
        <div class="section-divider mt-20">{{ $t('approvalPage.features.cardsDivider') }}</div>
        <div class="grid sm:grid-cols-3 gap-6 mt-8">
          <div class="bg-[#f7f9fd] border border-[#eef1f7] rounded-[20px] p-7">
            <div class="w-12 h-12 rounded-[13px] bg-[#e9f0ff] flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="#2f57c9" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
                <path d="M20 4 8.5 7M20 20 8.5 17"/>
                <circle cx="20" cy="4" r="2"/><circle cx="20" cy="20" r="2"/>
              </svg>
            </div>
            <h4 class="text-[18px] font-black mt-4">{{ $t('approvalPage.features.card1Title') }}</h4>
            <p class="text-sm text-[#5b6b86] leading-[1.55] mt-2.5">{{ $t('approvalPage.features.card1Desc') }}</p>
          </div>
          <div class="bg-[#f7f9fd] border border-[#eef1f7] rounded-[20px] p-7">
            <div class="w-12 h-12 rounded-[13px] bg-[#e9f0ff] flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="#2f57c9" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/>
              </svg>
            </div>
            <h4 class="text-[18px] font-black mt-4">{{ $t('approvalPage.features.card2Title') }}</h4>
            <p class="text-sm text-[#5b6b86] leading-[1.55] mt-2.5">{{ $t('approvalPage.features.card2Desc') }}</p>
          </div>
          <div class="bg-[#f7f9fd] border border-[#eef1f7] rounded-[20px] p-7">
            <div class="w-12 h-12 rounded-[13px] bg-[#e9f0ff] flex items-center justify-center">
              <svg class="w-5 h-5" fill="none" stroke="#2f57c9" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                <path d="M2 2l7.586 7.586"/>
                <circle cx="11" cy="11" r="2"/>
              </svg>
            </div>
            <h4 class="text-[18px] font-black mt-4">{{ $t('approvalPage.features.card3Title') }}</h4>
            <p class="text-sm text-[#5b6b86] leading-[1.55] mt-2.5">{{ $t('approvalPage.features.card3Desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── AI DRAFTING ── -->
    <section id="ai-drafting" class="py-24 px-8 relative overflow-hidden">
      <div class="ai-dots absolute inset-0 pointer-events-none" />

      <div class="relative max-w-[1180px] mx-auto">
        <div class="text-center max-w-[680px] mx-auto">
          <div class="inline-flex items-center gap-3">
            <span
              class="w-7 h-7 rounded-[9px] text-white text-xs font-black flex items-center justify-center"
              style="background: linear-gradient(135deg,#3a63e0,#2f6be8); box-shadow: 0 8px 18px -8px rgba(47,87,201,.8)"
            >{{ $t('approvalPage.aiDrafting.chapter') }}</span>
            <span class="inline-flex items-center gap-2 text-[13px] font-black uppercase tracking-[.08em] text-[#2f57c9]">
              <svg class="ai-sparkle w-3.5 h-3.5" viewBox="0 0 24 24" fill="#2f57c9"><path d="M12 2l1.9 5.6L19.5 9l-5.6 1.9L12 16.5l-1.9-5.6L4.5 9l5.6-1.4L12 2z" /></svg>
              {{ $t('approvalPage.aiDrafting.label') }}
            </span>
          </div>
          <h2 class="text-[clamp(28px,3.6vw,42px)] font-black tracking-[-0.02em] mt-[18px] leading-[1.12]">
            {{ $t('approvalPage.aiDrafting.title1') }}
            <span class="hero-accent">{{ $t('approvalPage.aiDrafting.titleHighlight') }}</span>
          </h2>
          <p class="text-[17px] leading-relaxed text-[#5b6b86] mt-4">{{ $t('approvalPage.aiDrafting.description') }}</p>
        </div>

        <div
          class="mt-14 border border-[#e0e9fb] rounded-[32px] p-8"
          style="background: linear-gradient(165deg,#f0f5ff,#ffffff 60%); box-shadow: 0 40px 90px -50px rgba(20,35,63,.5)"
        >
          <div class="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-7 items-stretch">
            <!-- Input -->
            <div class="bg-white border border-[#e9eef6] rounded-[22px] p-6 flex flex-col">
              <p class="text-[11px] font-black tracking-[.07em] text-[#9aa6bd] uppercase">{{ $t('approvalPage.aiDrafting.inputTitle') }}</p>

              <div class="mt-5">
                <div class="flex items-center gap-2 mb-2.5">
                  <span class="ai-step-num">1</span>
                  <span class="text-[13px] font-bold text-[#16233f]">{{ $t('approvalPage.aiDrafting.field1Label') }}</span>
                </div>
                <div class="flex items-center justify-between bg-[#f7f9fd] border border-[#e6ebf4] rounded-[11px] px-3.5 py-3">
                  <span class="text-sm font-bold text-[#16233f]">{{ $t('approvalPage.aiDrafting.field1Value') }}</span>
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#9aa6bd" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </div>

              <div class="mt-[18px]">
                <div class="flex items-center gap-2 mb-2.5">
                  <span class="ai-step-num">2</span>
                  <span class="text-[13px] font-bold text-[#16233f]">{{ $t('approvalPage.aiDrafting.field2Label') }}</span>
                </div>
                <div class="bg-[#f7f9fd] border border-[#e6ebf4] rounded-[11px] px-3.5 py-3 text-sm font-semibold text-[#16233f]">
                  {{ $t('approvalPage.aiDrafting.field2Value') }}
                </div>
              </div>

              <div class="mt-[18px]">
                <div class="flex items-center gap-2 mb-2.5">
                  <span class="ai-step-num">3</span>
                  <span class="text-[13px] font-bold text-[#16233f]">{{ $t('approvalPage.aiDrafting.field3Label') }}</span>
                </div>
                <div class="bg-[#f7f9fd] border border-[#e6ebf4] rounded-[11px] px-3.5 py-3.5 flex flex-col gap-2.5">
                  <div v-for="(pt, pi) in aiPoints" :key="pi" class="flex gap-2.5 items-start">
                    <span class="w-[5px] h-[5px] rounded-full bg-[#86a6f5] mt-[7px] shrink-0"></span>
                    <span class="text-[13.5px] leading-[1.45] text-[#3d4d68]">{{ pt }}</span>
                  </div>
                </div>
              </div>

              <div class="mt-[22px]">
                <p class="text-[11px] font-black tracking-[.07em] text-[#9aa6bd] uppercase mb-3">{{ $t('approvalPage.aiDrafting.toneLabel') }}</p>
                <div class="flex flex-col gap-2">
                  <button
                    v-for="(tone, ti) in aiTones"
                    :key="ti"
                    type="button"
                    @click="pickTone(ti)"
                    class="flex items-center gap-3 w-full text-left px-3.5 py-3 rounded-[11px] border transition-all duration-200"
                    :class="aiTone === ti
                      ? 'bg-[#e9f0ff] border-[#b9cdfb] shadow-[0_6px_16px_-10px_rgba(47,87,201,.8)]'
                      : 'bg-[#f7f9fd] border-[#e6ebf4]'"
                  >
                    <span
                      class="w-[15px] h-[15px] rounded-full bg-white shrink-0 transition-all duration-200"
                      :class="aiTone === ti ? 'border-[4.5px] border-[#2f57c9]' : 'border-2 border-[#c8d2e4]'"
                    ></span>
                    <span>
                      <span class="block text-[13.5px] font-bold" :class="aiTone === ti ? 'text-[#2f57c9]' : 'text-[#16233f]'">{{ (tone as any).label }}</span>
                      <span class="block text-[11.5px] text-[#9aa6bd] font-medium mt-px">{{ (tone as any).sub }}</span>
                    </span>
                  </button>
                </div>
              </div>

              <button
                type="button"
                @click="rerunAi"
                class="mt-6 w-full inline-flex items-center justify-center gap-2.5 text-white px-5 py-3.5 rounded-[13px] text-[14.5px] font-bold transition-opacity duration-200"
                :style="{
                  background: 'linear-gradient(135deg,#3a63e0,#2f6be8)',
                  boxShadow: '0 14px 30px -10px rgba(47,87,201,.55)',
                  opacity: aiRunning ? 0.75 : 1,
                }"
              >
                <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="#fff"><path d="M12 2l1.9 5.6L19.5 9l-5.6 1.9L12 16.5l-1.9-5.6L4.5 9l5.6-1.4L12 2z" /></svg>
                {{ aiRunning ? $t('approvalPage.aiDrafting.btnRunning') : $t('approvalPage.aiDrafting.btnIdle') }}
              </button>
            </div>

            <!-- Output -->
            <div
              class="bg-white border border-[#e9eef6] rounded-[22px] px-7 py-7 flex flex-col"
              style="box-shadow: 0 24px 50px -38px rgba(20,35,63,.45)"
            >
              <div class="flex items-center gap-2.5 pb-4 border-b border-[#eef1f7]">
                <div
                  class="w-8 h-8 rounded-[9px] flex items-center justify-center shrink-0"
                  style="background: linear-gradient(135deg,#3a63e0,#2f6be8)"
                >
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="#fff"><path d="M12 2l1.9 5.6L19.5 9l-5.6 1.9L12 16.5l-1.9-5.6L4.5 9l5.6-1.4L12 2z" /></svg>
                </div>
                <div class="min-w-0">
                  <div class="text-[13.5px] font-black">{{ $t('approvalPage.aiDrafting.outputTitle') }}</div>
                  <div class="text-[11px] text-[#9aa6bd]">{{ aiCaption }}</div>
                </div>
                <span
                  v-if="aiRunning"
                  class="ml-auto inline-flex items-center gap-2 bg-[#e9f0ff] text-[#2f57c9] text-[11px] font-black px-3 py-1.5 rounded-full whitespace-nowrap"
                >
                  <span class="flex gap-[3px]">
                    <span class="ai-dot"></span>
                    <span class="ai-dot" style="animation-delay:.15s"></span>
                    <span class="ai-dot" style="animation-delay:.3s"></span>
                  </span>
                  {{ $t('approvalPage.aiDrafting.statusRunning') }}
                </span>
                <span
                  v-else
                  class="ml-auto inline-flex items-center gap-1.5 bg-[#e6f6ee] text-[#1f9d6b] text-[11px] font-black px-3 py-1.5 rounded-full whitespace-nowrap"
                >
                  <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="#1f9d6b" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  {{ $t('approvalPage.aiDrafting.statusDone') }}
                </span>
              </div>

              <div class="flex-1 min-h-[290px] pt-5 text-[14.5px] leading-[1.75] text-[#3d4d68] whitespace-pre-wrap">{{ aiText }}<span v-if="aiRunning" class="ai-caret"></span></div>

              <div class="flex items-center gap-2.5 pt-4 border-t border-[#eef1f7]">
                <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#c8821f" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16.5v.01" /></svg>
                <span class="text-[12.5px] text-[#8b97ad] leading-[1.45]">{{ $t('approvalPage.aiDrafting.disclaimer') }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust cards -->
        <div class="grid sm:grid-cols-3 gap-6 mt-8">
          <div v-for="(item, ii) in aiTrust" :key="ii" class="bg-white border border-[#e9eef6] rounded-[20px] p-6">
            <div class="w-11 h-11 rounded-[12px] bg-[#e9f0ff] flex items-center justify-center" v-html="aiTrustIcons[ii]"></div>
            <h4 class="text-[17px] font-black mt-4">{{ (item as any).t }}</h4>
            <p class="text-sm text-[#5b6b86] leading-[1.55] mt-2.5">{{ (item as any).d }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SHOWCASE (FITUR UNGGULAN) ── -->
    <section class="bg-[#0c1730] text-white py-24 px-8 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(820px 480px at 78% 18%, rgba(58,99,224,.22), transparent 70%)"></div>
      <div class="relative max-w-[1180px] mx-auto">
        <div class="text-center">
          <div class="inline-flex items-center gap-3">
            <span class="w-7 h-7 rounded-[9px] bg-[#5d7fc4] text-white text-xs font-black flex items-center justify-center">{{ $t('approvalPage.showcase.chapter') }}</span>
            <span class="text-[13px] font-black uppercase tracking-[.08em] text-[#aebfe4]">{{ $t('approvalPage.showcase.badge') }}</span>
          </div>
          <h2 class="text-[clamp(30px,4vw,46px)] font-black tracking-[-0.025em] mt-5 leading-[1.1] text-white whitespace-pre-line">
            {{ $t('approvalPage.showcase.title') }}
          </h2>
          <p class="text-[17px] text-[#aab6cf] mt-4 max-w-[600px] mx-auto">
            {{ $t('approvalPage.showcase.descBefore') }}
            <em class="not-italic text-[#dbe4f7] font-bold">{{ $t('approvalPage.showcase.descEm') }}</em>
            {{ $t('approvalPage.showcase.descAfter') }}
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start mt-14">
          <!-- Tabs -->
          <div class="flex flex-col gap-3">
            <button
              v-for="(tab, i) in showcaseTabs"
              :key="i"
              @click="setFeature(i)"
              class="flex items-center gap-3.5 w-full px-4 py-3.5 rounded-[15px] text-left cursor-pointer font-[inherit] border-2 transition-all duration-200"
              :class="activeFeature === i
                ? 'bg-white border-[#2f57c9] shadow-[0_24px_48px_-22px_rgba(47,87,201,.75)]'
                : 'bg-[#dfe6f2] border-transparent'"
            >
              <span
                class="w-[42px] h-[42px] rounded-[12px] flex items-center justify-center shrink-0 transition-colors duration-200"
                :class="activeFeature === i ? 'bg-[#2f57c9] text-white' : 'bg-[#c5d3ec] text-[#3a5bb0]'"
                v-html="featureIcons[i]"
              ></span>
              <span class="min-w-0 flex-1">
                <span class="block text-[11px] font-bold tracking-[.05em] uppercase text-[#9aa6bd]">{{ (tab as any).sub }}</span>
                <span class="block text-[15px] font-black mt-0.5 text-[#16233f]">{{ (tab as any).label }}</span>
              </span>
              <span class="text-xs font-black text-[#c2cfe6]">{{ (tab as any).num }}</span>
            </button>
          </div>

          <!-- Feature panels -->
          <div class="relative min-h-[430px]">
            <Transition name="feat-fade" mode="out-in">
              <div :key="activeFeature">

                <!-- 0: Audit Trail -->
                <template v-if="activeFeature === 0">
                  <h3 class="text-[26px] font-black tracking-[-0.02em] text-white">{{ $t('approvalPage.showcase.f0.title') }}</h3>
                  <p class="text-[15px] text-[#aab6cf] leading-relaxed mt-2.5 max-w-[520px]">{{ $t('approvalPage.showcase.f0.desc') }}</p>
                  <div class="mt-6 bg-white rounded-[20px] p-5" style="box-shadow: 0 40px 80px -40px rgba(0,0,0,.7)">
                    <div class="flex items-center gap-2.5 pb-3.5 border-b border-[#eef1f7]">
                      <span class="font-black text-sm text-[#16233f]">{{ $t('approvalPage.showcase.f0.panelTitle') }} · {{ $t('approvalPage.showcase.f0.docNum') }}</span>
                      <span class="ml-auto inline-flex items-center gap-1 text-[11px] font-black text-[#1f9d6b] bg-[#e6f6ee] px-2.5 py-1 rounded-[7px]">
                        <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="#1f9d6b" stroke-width="2.4"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        {{ $t('approvalPage.showcase.f0.immutable') }}
                      </span>
                    </div>
                    <div class="flex flex-col mt-1.5">
                      <div class="flex items-center gap-3 py-2.5 border-b border-[#f2f5fa]">
                        <span class="w-2 h-2 rounded-full bg-[#2f57c9] shrink-0"></span>
                        <span class="text-[13px] text-[#16233f]"><b class="font-bold">{{ $t('approvalPage.showcase.f0.created') }}</b> {{ $t('approvalPage.showcase.f0.by') }} Andre P.</span>
                        <span class="ml-auto text-xs text-[#9aa6bd] tabular-nums">12 Jun · 09:14</span>
                      </div>
                      <div class="flex items-center gap-3 py-2.5 border-b border-[#f2f5fa]">
                        <span class="w-2 h-2 rounded-full bg-[#86a6f5] shrink-0"></span>
                        <span class="text-[13px] text-[#16233f]"><b class="font-bold">{{ $t('approvalPage.showcase.f0.opened') }}</b> {{ $t('approvalPage.showcase.f0.by') }} Bila R.</span>
                        <span class="ml-auto text-xs text-[#9aa6bd] tabular-nums">12 Jun · 10:02</span>
                      </div>
                      <div class="flex items-center gap-3 py-2.5 border-b border-[#f2f5fa]">
                        <span class="w-2 h-2 rounded-full bg-[#c8821f] shrink-0"></span>
                        <span class="text-[13px] text-[#16233f]"><b class="font-bold">{{ $t('approvalPage.showcase.f0.commented') }}</b> {{ $t('approvalPage.showcase.f0.by') }} Citra W.</span>
                        <span class="ml-auto text-xs text-[#9aa6bd] tabular-nums">12 Jun · 10:20</span>
                      </div>
                      <div class="flex items-center gap-3 py-2.5 border-b border-[#f2f5fa]">
                        <span class="w-2 h-2 rounded-full bg-[#1f9d6b] shrink-0"></span>
                        <span class="text-[13px] text-[#16233f]"><b class="font-bold">{{ $t('approvalPage.showcase.f0.approved') }}</b> {{ $t('approvalPage.showcase.f0.by') }} {{ $t('approvalPage.showcase.f2.approvedBy') }}</span>
                        <span class="ml-auto text-xs text-[#9aa6bd] tabular-nums">12 Jun · 11:05</span>
                      </div>
                      <div class="flex items-center gap-3 py-2.5">
                        <span class="w-2 h-2 rounded-full bg-[#6b7a99] shrink-0"></span>
                        <span class="text-[13px] text-[#16233f]"><b class="font-bold">{{ $t('approvalPage.showcase.f0.downloaded') }}</b> {{ $t('approvalPage.showcase.f0.by') }} Andre P.</span>
                        <span class="ml-auto text-xs text-[#9aa6bd] tabular-nums">12 Jun · 11:30</span>
                      </div>
                    </div>
                    <div class="flex gap-2.5 mt-3.5 pt-3.5 border-t border-[#eef1f7]">
                      <span class="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#fef0f0] text-[#c0392b] text-[13px] font-bold py-2.5 rounded-[11px]">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
                        {{ $t('approvalPage.showcase.f0.exportPdf') }}
                      </span>
                      <span class="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#e6f6ee] text-[#1f7a52] text-[13px] font-bold py-2.5 rounded-[11px]">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#1f7a52" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 13 2 3 2-3"/></svg>
                        {{ $t('approvalPage.showcase.f0.exportExcel') }}
                      </span>
                    </div>
                  </div>
                </template>

                <!-- 1: Delegation -->
                <template v-else-if="activeFeature === 1">
                  <h3 class="text-[26px] font-black tracking-[-0.02em] text-white">{{ $t('approvalPage.showcase.f1.title') }}</h3>
                  <p class="text-[15px] text-[#aab6cf] leading-relaxed mt-2.5 max-w-[520px]">{{ $t('approvalPage.showcase.f1.desc') }}</p>
                  <div class="mt-6 bg-white rounded-[20px] p-6" style="box-shadow: 0 40px 80px -40px rgba(0,0,0,.7)">
                    <div class="flex items-center justify-between">
                      <span class="font-black text-sm text-[#16233f]">{{ $t('approvalPage.showcase.f1.panelTitle') }}</span>
                      <span class="inline-flex items-center gap-1.5 text-xs font-black text-[#2f57c9] bg-[#e9f0ff] px-3 py-1.5 rounded-lg">
                        <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="#2f57c9" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                        5 – 12 Jun
                      </span>
                    </div>
                    <div class="flex items-center gap-3.5 mt-5">
                      <div class="text-center flex-1">
                        <div class="w-14 h-14 rounded-full bg-[#16233f] text-white flex items-center justify-center font-black text-lg mx-auto">AP</div>
                        <div class="text-[13px] font-bold text-[#16233f] mt-2.5">Andre P.</div>
                        <div class="text-[11px] text-[#9aa6bd]">{{ $t('approvalPage.showcase.f1.fromRole') }}</div>
                      </div>
                      <div class="flex flex-col items-center text-[#2f57c9] shrink-0">
                        <svg width="40" height="20" viewBox="0 0 40 20" fill="none" stroke="#2f57c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 10h32"/><path d="m28 4 6 6-6 6"/></svg>
                        <span class="text-[10px] font-black tracking-[.04em] text-[#9aa6bd] mt-0.5">{{ $t('approvalPage.showcase.f1.delegateLabel') }}</span>
                      </div>
                      <div class="text-center flex-1">
                        <div class="w-14 h-14 rounded-full bg-[#2f57c9] text-white flex items-center justify-center font-black text-lg mx-auto">BR</div>
                        <div class="text-[13px] font-bold text-[#16233f] mt-2.5">Bila R.</div>
                        <div class="text-[11px] text-[#9aa6bd]">{{ $t('approvalPage.showcase.f1.toRole') }}</div>
                      </div>
                    </div>
                    <div class="mt-5 bg-[#f7f9fd] border border-[#eef1f7] rounded-[13px] px-4 py-3 flex items-center gap-3">
                      <span class="w-8 h-8 rounded-lg bg-[#e6f6ee] flex items-center justify-center shrink-0">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#1f9d6b" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>
                      </span>
                      <div class="min-w-0">
                        <div class="text-[13px] font-bold text-[#16233f]">{{ $t('approvalPage.showcase.f1.actingApproved') }}</div>
                        <div class="text-[11px] text-[#6b7a99]">{{ $t('approvalPage.showcase.f1.actingBy') }} <b class="text-[#2f57c9] font-bold">{{ $t('approvalPage.showcase.f1.actingOnBehalf') }}</b></div>
                      </div>
                      <span class="ml-auto text-[10px] font-black text-[#c8821f] bg-[#fdf3e3] px-2.5 py-1 rounded-lg whitespace-nowrap">{{ $t('approvalPage.showcase.f1.actingBadge') }}</span>
                    </div>
                  </div>
                </template>

                <!-- 2: QR -->
                <template v-else-if="activeFeature === 2">
                  <h3 class="text-[26px] font-black tracking-[-0.02em] text-white">{{ $t('approvalPage.showcase.f2.title') }}</h3>
                  <p class="text-[15px] text-[#aab6cf] leading-relaxed mt-2.5 max-w-[520px]">{{ $t('approvalPage.showcase.f2.desc') }}</p>
                  <div class="mt-6 grid grid-cols-2 gap-4 items-center">
                    <div class="bg-white rounded-[18px] p-5" style="box-shadow: 0 40px 80px -40px rgba(0,0,0,.7)">
                      <div class="h-2.5 w-3/5 rounded bg-[#16233f] mb-2"></div>
                      <div class="h-1.5 w-11/12 rounded bg-[#e3e9f2] mb-1"></div>
                      <div class="h-1.5 w-4/5 rounded bg-[#e3e9f2] mb-1"></div>
                      <div class="h-1.5 w-11/12 rounded bg-[#e3e9f2]"></div>
                      <div class="flex justify-center mt-4">
                        <svg width="92" height="92" viewBox="0 0 29 29" shape-rendering="crispEdges">
                          <rect width="29" height="29" fill="#fff"/>
                          <path fill="#16233f" d="M0 0h7v7h-7zM2 2v3h3v-3zM22 0h7v7h-7zM24 2v3h3v-3zM0 22h7v7h-7zM2 24v3h3v-3zM9 0h2v2h-2zM13 0h2v4h-2zM17 0h3v2h-3zM9 3h2v2h-2zM12 5h3v2h-3zM17 4h2v3h-2zM20 5h2v2h-2zM9 9h2v2h-2zM0 9h2v2h-2zM4 9h3v2h-3zM13 9h4v2h-4zM20 9h2v3h-2zM24 9h5v2h-5zM0 13h2v3h-2zM4 13h2v2h-2zM7 13h4v2h-4zM13 13h2v2h-2zM17 13h2v4h-2zM22 13h2v2h-2zM26 13h3v2h-3zM9 16h3v2h-3zM20 15h2v3h-2zM24 16h3v2h-3zM9 20h2v3h-2zM12 20h4v2h-4zM17 20h3v2h-3zM22 20h3v2h-3zM26 20h3v3h-3zM13 23h2v3h-2zM17 24h2v2h-2zM20 24h2v3h-2zM24 24h3v2h-3zM9 26h3v2h-3z"/>
                        </svg>
                      </div>
                    </div>
                    <div class="bg-[#0f1b33] border border-[rgba(125,151,207,.28)] rounded-[18px] p-5">
                      <span class="inline-flex items-center gap-1.5 text-xs font-black text-[#3ddc97] bg-[rgba(61,220,151,.12)] px-3 py-1.5 rounded-lg">
                        <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="#3ddc97" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>
                        {{ $t('approvalPage.showcase.f2.verifiedLabel') }}
                      </span>
                      <div class="flex flex-col gap-3 mt-4">
                        <div>
                          <div class="text-[10px] font-bold tracking-[.05em] uppercase text-[#7d8aa6]">{{ $t('approvalPage.showcase.f2.issuedBy') }}</div>
                          <div class="text-[13px] font-bold text-white mt-0.5">{{ $t('approvalPage.showcase.f2.issuerName') }}</div>
                        </div>
                        <div>
                          <div class="text-[10px] font-bold tracking-[.05em] uppercase text-[#7d8aa6]">{{ $t('approvalPage.showcase.f2.letterNumber') }}</div>
                          <div class="text-[13px] font-bold text-white mt-0.5">{{ $t('approvalPage.showcase.f2.letterNum') }}</div>
                        </div>
                        <div class="flex gap-6">
                          <div>
                            <div class="text-[10px] font-bold tracking-[.05em] uppercase text-[#7d8aa6]">{{ $t('approvalPage.showcase.f2.dateLabel') }}</div>
                            <div class="text-[13px] font-bold text-white mt-0.5">{{ $t('approvalPage.showcase.f2.dateVal') }}</div>
                          </div>
                          <div>
                            <div class="text-[10px] font-bold tracking-[.05em] uppercase text-[#7d8aa6]">{{ $t('approvalPage.showcase.f2.approvedLabel') }}</div>
                            <div class="text-[13px] font-bold text-white mt-0.5">{{ $t('approvalPage.showcase.f2.approvedBy') }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>

                <!-- 3: SLA -->
                <template v-else-if="activeFeature === 3">
                  <h3 class="text-[26px] font-black tracking-[-0.02em] text-white">{{ $t('approvalPage.showcase.f3.title') }}</h3>
                  <p class="text-[15px] text-[#aab6cf] leading-relaxed mt-2.5 max-w-[520px]">{{ $t('approvalPage.showcase.f3.desc') }}</p>
                  <div class="mt-6 bg-white rounded-[20px] p-6" style="box-shadow: 0 40px 80px -40px rgba(0,0,0,.7)">
                    <div class="flex items-center gap-5">
                      <div class="relative w-24 h-24 shrink-0">
                        <svg width="96" height="96" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="45" fill="none" stroke="#eef1f7" stroke-width="9"/>
                          <circle cx="50" cy="50" r="45" fill="none" stroke="#c8821f" stroke-width="9" stroke-linecap="round" stroke-dasharray="283" stroke-dashoffset="64" transform="rotate(-90 50 50)" style="animation: drawRing 1s ease forwards"/>
                        </svg>
                        <div class="absolute inset-0 flex flex-col items-center justify-center">
                          <span class="text-lg font-black text-[#16233f] leading-none">1h 45m</span>
                          <span class="text-[10px] text-[#9aa6bd] font-semibold">{{ $t('approvalPage.showcase.f3.remaining') }}</span>
                        </div>
                      </div>
                      <div class="flex-1">
                        <div class="text-[13px] font-bold text-[#16233f]">{{ $t('approvalPage.showcase.f3.level') }}</div>
                        <div class="text-xs text-[#9aa6bd] mt-0.5">{{ $t('approvalPage.showcase.f3.slaText') }} <b class="text-[#16233f] font-bold">{{ $t('approvalPage.showcase.f3.slaDuration') }}</b></div>
                        <span class="inline-flex items-center gap-1.5 mt-2 text-[11px] font-black text-[#c8821f] bg-[#fdf3e3] px-2.5 py-1.5 rounded-lg">{{ $t('approvalPage.showcase.f3.nearingDeadline') }}</span>
                      </div>
                    </div>
                    <div class="flex flex-col mt-4 pt-4 border-t border-[#eef1f7]">
                      <div class="flex items-center gap-3 py-2.5">
                        <span class="w-7 h-7 rounded-full bg-[#e6f6ee] flex items-center justify-center shrink-0">
                          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#1f9d6b" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg>
                        </span>
                        <span class="text-[13px] text-[#16233f]">{{ $t('approvalPage.showcase.f3.reminderSent') }}</span>
                        <span class="ml-auto text-[11px] text-[#9aa6bd]">{{ $t('approvalPage.showcase.f3.reminderAt') }}</span>
                      </div>
                      <div class="flex items-center gap-3 py-2.5">
                        <span class="w-7 h-7 rounded-full bg-[#e9f0ff] flex items-center justify-center shrink-0">
                          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#2f57c9" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5"/><path d="m5 12 7-7 7 7"/></svg>
                        </span>
                        <span class="text-[13px] text-[#16233f]">{{ $t('approvalPage.showcase.f3.escalatedTo') }} <b class="font-bold">{{ $t('approvalPage.showcase.f3.supervisor') }}</b></span>
                        <span class="ml-auto text-xs font-black text-[#2f57c9] bg-[#e9f0ff] px-2.5 py-1 rounded-lg">{{ $t('approvalPage.showcase.f3.autoLabel') }}</span>
                      </div>
                    </div>
                  </div>
                </template>

                <!-- 4: Recall -->
                <template v-else-if="activeFeature === 4">
                  <h3 class="text-[26px] font-black tracking-[-0.02em] text-white">{{ $t('approvalPage.showcase.f4.title') }}</h3>
                  <p class="text-[15px] text-[#aab6cf] leading-relaxed mt-2.5 max-w-[520px]">{{ $t('approvalPage.showcase.f4.desc') }}</p>
                  <div class="mt-6 bg-white rounded-[20px] p-5" style="box-shadow: 0 40px 80px -40px rgba(0,0,0,.7)">
                    <div class="bg-[#f7f9fd] border border-[#eef1f7] rounded-[14px] p-4 flex items-center gap-3 showcase-slide-back">
                      <span class="w-10 h-10 rounded-[10px] bg-[#e9f0ff] flex items-center justify-center shrink-0">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#2f57c9" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>
                      </span>
                      <div class="min-w-0">
                        <div class="font-bold text-sm text-[#16233f]">SK-2024-040</div>
                        <div class="text-[11px] text-[#9aa6bd]">{{ $t('approvalPage.showcase.f4.docSub') }}</div>
                      </div>
                      <span class="ml-auto text-[11px] font-bold text-[#c8821f] bg-[#fdf3e3] px-2.5 py-1 rounded-lg whitespace-nowrap">{{ $t('approvalPage.showcase.f4.sentStatus') }}</span>
                    </div>
                    <div class="flex items-center justify-center my-3.5">
                      <span class="inline-flex items-center gap-1.5 bg-[#e9f0ff] text-[#2f57c9] text-[13px] font-black px-5 py-2.5 rounded-[11px]">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#2f57c9" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v6h6"/><path d="M3.51 9a9 9 0 1 0 2.13-3.36L3 8"/></svg>
                        {{ $t('approvalPage.showcase.f4.recallBtn') }}
                      </span>
                    </div>
                    <div class="bg-[#f0fbf6] border border-[#cdeede] rounded-[14px] p-4 flex items-center gap-3">
                      <span class="w-10 h-10 rounded-[10px] bg-[#dcf2e7] flex items-center justify-center shrink-0">
                        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#1f9d6b" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                      </span>
                      <div class="min-w-0">
                        <div class="font-bold text-sm text-[#16233f]">{{ $t('approvalPage.showcase.f4.backToDraft') }}</div>
                        <div class="text-[11px] text-[#6b7a99]">{{ $t('approvalPage.showcase.f4.editable') }} · <span class="text-[#9aa6bd]">{{ $t('approvalPage.showcase.f4.recallLog') }}</span></div>
                      </div>
                      <span class="ml-auto text-[11px] font-bold text-[#1f9d6b] bg-[#dcf2e7] px-2.5 py-1 rounded-lg whitespace-nowrap">{{ $t('approvalPage.showcase.f4.draftLabel') }}</span>
                    </div>
                  </div>
                </template>

                <!-- 6: Email Notification -->
                <template v-else-if="activeFeature === 6">
                  <h3 class="text-[26px] font-black tracking-[-0.02em] text-white">{{ $t('approvalPage.showcase.f6.title') }}</h3>
                  <p class="text-[15px] text-[#aab6cf] leading-relaxed mt-2.5 max-w-[520px]">{{ $t('approvalPage.showcase.f6.desc') }}</p>
                  <div class="mt-6 bg-white rounded-[20px] overflow-hidden" style="box-shadow: 0 40px 80px -40px rgba(0,0,0,.7)">
                    <!-- Email client chrome -->
                    <div class="bg-[#f7f9fd] border-b border-[#eef1f7] px-5 py-3 flex items-center gap-2.5">
                      <div class="flex gap-1.5">
                        <span class="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
                        <span class="w-3 h-3 rounded-full bg-[#febc2e]"></span>
                        <span class="w-3 h-3 rounded-full bg-[#28c840]"></span>
                      </div>
                      <div class="flex-1 mx-3 bg-white border border-[#e3e9f2] rounded-lg px-3 py-1 text-[11px] text-[#9aa6bd] font-mono truncate">
                        approval-system@shifd.id
                      </div>
                    </div>
                    <!-- Email meta -->
                    <div class="px-5 pt-4 pb-3 border-b border-[#f2f5fa]">
                      <div class="flex items-start justify-between gap-3">
                        <div class="flex items-center gap-3">
                          <div class="w-9 h-9 rounded-full bg-[#e9f0ff] flex items-center justify-center shrink-0 text-[13px] font-black text-[#2f57c9]">A</div>
                          <div>
                            <p class="text-[13px] font-bold text-[#16233f]">approval-system@shifd.id</p>
                            <p class="text-[11px] text-[#9aa6bd]">manager@perusahaan.com</p>
                          </div>
                        </div>
                        <span class="text-[11px] text-[#9aa6bd] shrink-0 pt-0.5">09:15</span>
                      </div>
                      <p class="font-black text-[15px] text-[#16233f] mt-3">{{ $t('approvalPage.showcase.f6.subject') }}</p>
                    </div>
                    <!-- Email body -->
                    <div class="px-5 py-4">
                      <div class="flex flex-col gap-3">
                        <div class="bg-[#f7f9fd] border border-[#eef1f7] rounded-[13px] px-4 py-3 flex items-center gap-3">
                          <div class="w-8 h-8 rounded-[9px] bg-[#e9f0ff] flex items-center justify-center shrink-0">
                            <svg class="w-4 h-4" fill="none" stroke="#2f57c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
                            </svg>
                          </div>
                          <div class="min-w-0 flex-1">
                            <p class="text-[11px] font-bold text-[#9aa6bd] uppercase tracking-wide">{{ $t('approvalPage.showcase.f6.docLabel') }}</p>
                            <p class="text-[13px] font-bold text-[#16233f] truncate">{{ $t('approvalPage.showcase.f6.docName') }}</p>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 bg-[#fef3f2] border border-[#fecaca] rounded-[11px] px-4 py-2.5">
                          <svg class="w-4 h-4 shrink-0" fill="none" stroke="#dc2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10"/><path d="M12 8v4l2.5 2"/>
                          </svg>
                          <p class="text-[13px] text-[#dc2626]"><span class="font-bold">{{ $t('approvalPage.showcase.f6.deadlineLabel') }}:</span> {{ $t('approvalPage.showcase.f6.deadlineVal') }}</p>
                        </div>
                        <button class="w-full rounded-[11px] py-3 text-[13px] font-black text-white text-center" style="background: linear-gradient(135deg,#3a63e0,#2f6be8)">
                          {{ $t('approvalPage.showcase.f6.ctaBtn') }}
                        </button>
                      </div>
                      <p class="text-center text-[10px] text-[#9aa6bd] mt-3">{{ $t('approvalPage.showcase.f6.sentNote') }}</p>
                    </div>
                  </div>
                </template>

                <!-- 5: Template -->
                <template v-else-if="activeFeature === 5">
                  <h3 class="text-[26px] font-black tracking-[-0.02em] text-white">{{ $t('approvalPage.showcase.f5.title') }}</h3>
                  <p class="text-[15px] text-[#aab6cf] leading-relaxed mt-2.5 max-w-[520px]">{{ $t('approvalPage.showcase.f5.desc') }}</p>
                  <div class="mt-6 bg-white rounded-[20px] p-5" style="box-shadow: 0 40px 80px -40px rgba(0,0,0,.7)">
                    <div class="flex flex-wrap gap-2.5">
                      <span
                        v-for="(chip, ci) in showcaseChips"
                        :key="ci"
                        class="inline-flex items-center gap-1.5 text-[13px] font-black px-3.5 py-2 rounded-[10px]"
                        :class="ci === 0 ? 'text-white bg-[#2f57c9]' : 'text-[#5b6b86] bg-[#f2f5fa]'"
                      >
                        <svg v-if="ci === 0" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                        {{ chip }}
                      </span>
                    </div>
                    <div class="grid grid-cols-2 gap-3 mt-4">
                      <div class="bg-[#f7f9fd] border border-[#eef1f7] rounded-[11px] px-3 py-3">
                        <div class="text-[10px] font-bold text-[#9aa6bd] uppercase tracking-[.04em]">{{ $t('approvalPage.showcase.f5.numberLabel') }}</div>
                        <div class="text-[13px] font-bold text-[#2f57c9] mt-0.5">ST-2024-051 <span class="text-[10px] text-[#1f9d6b] font-black">AUTO</span></div>
                      </div>
                      <div class="bg-[#f7f9fd] border border-[#eef1f7] rounded-[11px] px-3 py-3">
                        <div class="text-[10px] font-bold text-[#9aa6bd] uppercase tracking-[.04em]">{{ $t('approvalPage.showcase.f5.dateLabel') }}</div>
                        <div class="text-[13px] font-bold text-[#16233f] mt-0.5">{{ $t('approvalPage.showcase.f5.dateVal') }}</div>
                      </div>
                      <div class="col-span-2 bg-[#fffdf5] border border-dashed border-[#e8d9a8] rounded-[11px] px-3 py-3">
                        <div class="text-[10px] font-bold text-[#c8821f] uppercase tracking-[.04em]">{{ $t('approvalPage.showcase.f5.subjectLabel') }}</div>
                        <div class="text-[13px] text-[#9aa6bd] mt-0.5">{{ $t('approvalPage.showcase.f5.subjectPlaceholder') }}</div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2.5 mt-4 pt-3.5 border-t border-[#eef1f7]">
                      <span class="text-xs text-[#9aa6bd] font-semibold">{{ $t('approvalPage.showcase.f5.chainLabel') }}</span>
                      <span class="text-xs font-bold text-[#16233f]">{{ $t('approvalPage.showcase.f5.chainValue') }}</span>
                      <span class="ml-auto text-[11px] font-black text-[#1f9d6b] bg-[#e6f6ee] px-2.5 py-1 rounded-lg">{{ $t('approvalPage.showcase.f5.autoLabel') }}</span>
                    </div>
                  </div>
                </template>

              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- ── WHY CHOOSE ── -->
    <section class="max-w-[1180px] mx-auto px-8 py-24">
      <div class="text-center">
        <p class="text-xs font-black uppercase tracking-[.08em] text-[#2f57c9]">{{ $t('approvalPage.why.label') }}</p>
        <h2 class="text-[clamp(28px,3.6vw,40px)] font-black tracking-[-0.02em] mt-3.5">{{ $t('approvalPage.why.title') }}</h2>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        <div
          v-for="benefit in benefits"
          :key="(benefit as any).t"
          class="bg-white border border-[#e9eef6] rounded-[20px] p-7"
          style="box-shadow: 0 18px 40px -30px rgba(20,35,63,.3)"
        >
          <div class="w-11 h-11 rounded-[12px] bg-[#e9f0ff] flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="#2f57c9" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M20 6 9 17l-5-5"/>
            </svg>
          </div>
          <h4 class="text-[18px] font-black mt-4">{{ (benefit as any).t }}</h4>
          <p class="text-sm text-[#5b6b86] leading-[1.55] mt-2">{{ (benefit as any).d }}</p>
        </div>
      </div>
    </section>

    <!-- ── PRICING ── -->
    <section id="pricing" class="bg-white border-t border-[#eef1f7] py-24 px-8 reveal opacity-0">
      <div class="max-w-[1180px] mx-auto">
        <div class="text-center">
          <p class="text-xs font-black uppercase tracking-[.08em] text-[#2f57c9]">{{ $t('approvalPage.pricing.label') }}</p>
          <h2 class="text-[clamp(28px,3.6vw,40px)] font-black tracking-[-0.02em] mt-3.5">
            {{ $t('approvalPage.pricing.title') }} <span class="text-[#2f57c9]">{{ $t('approvalPage.pricing.titleHighlight') }}</span>
          </h2>
          <p class="text-[17px] text-[#5b6b86] mt-4 max-w-[560px] mx-auto">{{ $t('approvalPage.pricing.desc') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-14">
          <div
            v-for="plan in pricingPlans"
            :key="plan.key"
            class="pricing-card relative rounded-3xl p-8 grid grid-rows-subgrid row-span-6 gap-y-0"
            :class="plan.dark
              ? 'bg-[#1a1c1e]'
              : plan.highlight
                ? 'bg-white border-2 border-[#2f57c9] shadow-lg shadow-[#2f57c9]/10'
                : 'bg-white border border-[#d3e1ff]'"
          >
            <span
              v-if="plan.highlight"
              class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2f57c9] text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap"
            >{{ $t('approvalPage.pricing.bestValue') }}</span>

            <h3 class="text-lg font-extrabold mb-1 flex items-center gap-2" :class="plan.dark ? 'text-white' : 'text-slate-900'">
              {{ plan.name }}
              <span v-if="plan.discount" class="bg-[#e9f0ff] text-[#2f57c9] text-[11px] font-extrabold px-2 py-0.5 rounded-full whitespace-nowrap">{{ plan.discount }}</span>
            </h3>
            <p class="text-[13px] mb-6" :class="plan.dark ? 'text-slate-400' : 'text-slate-500'">{{ plan.tagline }}</p>
            <div class="mb-1">
              <span class="text-4xl font-extrabold tracking-tight whitespace-nowrap" :class="plan.dark ? 'text-white' : 'text-slate-900'">{{ plan.price }}</span>
            </div>
            <p class="text-[13px] font-medium mb-8" :class="plan.dark ? 'text-slate-400' : 'text-slate-500'">{{ plan.priceNote }}</p>

            <ul class="space-y-3 mb-8">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-3">
                <span class="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0" :class="plan.dark ? 'bg-white/10' : 'bg-[#e9f0ff]'">
                  <svg class="w-2.5 h-2.5" fill="none" :stroke="plan.dark ? '#ffffff' : '#2f57c9'" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                </span>
                <span class="text-sm font-medium" :class="plan.dark ? 'text-slate-300' : 'text-slate-700'">{{ feature }}</span>
              </li>
            </ul>

            <router-link
              :to="{ path: '/contact-us', query: { plan: plan.key } }"
              class="mt-auto inline-flex items-center justify-center w-full py-3 rounded-xl font-bold text-sm transition-colors"
              :class="plan.dark
                ? 'bg-white text-[#1a1c1e] hover:bg-slate-200'
                : plan.highlight
                  ? 'bg-[#2f57c9] hover:bg-[#2448a8] text-white shadow-md shadow-[#2f57c9]/25'
                  : 'border border-slate-200 text-slate-900 hover:border-[#2f57c9] hover:text-[#2f57c9]'"
            >{{ plan.btn }}</router-link>
          </div>
        </div>

        <p class="text-center text-[13px] text-slate-500 mt-10">
          {{ $t('approvalPage.pricing.note', { currency }) }}
          {{ $t('approvalPage.pricing.helpText') }}
          <router-link to="/contact-us" class="font-bold text-[#2f57c9] hover:underline">{{ $t('approvalPage.pricing.helpLink') }}</router-link>.
        </p>
      </div>
    </section>

    <!-- ── FAQ ── -->
    <section class="bg-white border-t border-[#eef1f7] py-24 px-8">
      <div class="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">
        <div>
          <p class="text-xs font-black uppercase tracking-[.08em] text-[#2f57c9]">{{ $t('approvalPage.faq.label') }}</p>
          <h2 class="text-[clamp(26px,3.2vw,36px)] font-black tracking-[-0.02em] mt-3.5">{{ $t('approvalPage.faq.title') }}</h2>
          <p class="text-base text-[#5b6b86] leading-relaxed mt-4">{{ $t('approvalPage.faq.desc') }}</p>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 mt-5 text-white px-5 py-3 rounded-xl font-bold text-sm"
            style="background: linear-gradient(135deg,#3a63e0,#2f6be8); box-shadow: 0 12px 28px -8px rgba(47,87,201,.5)"
          >
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.9-5.6A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z"/>
            </svg>
            {{ $t('approvalPage.faq.contactBtn') }}
          </a>
        </div>
        <div class="flex flex-col gap-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="bg-[#f7f9fd] border border-[#eef1f7] rounded-2xl px-5"
          >
            <button
              class="w-full flex items-center justify-between gap-4 py-4 text-left font-bold text-[#16233f] text-base bg-transparent border-0 cursor-pointer font-inherit"
              @click="toggleFaq(i)"
            >
              <span>{{ (faq as any).q }}</span>
              <span
                class="text-2xl text-[#2f57c9] shrink-0 leading-none font-normal transition-transform duration-300 inline-block"
                :style="{ transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }"
              >+</span>
            </button>
            <Transition name="faq-expand">
              <p v-if="openFaq === i" class="text-[15px] text-[#5b6b86] leading-relaxed pb-5 pr-8 mt-0">{{ (faq as any).a }}</p>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="py-24 px-8">
      <div
        class="max-w-[1080px] mx-auto rounded-[32px] px-8 sm:px-14 py-20 text-center relative overflow-hidden"
        style="background: linear-gradient(150deg,#3258cc,#22377e); box-shadow: 0 40px 90px -40px rgba(47,87,201,.7)"
      >
        <div class="absolute w-[280px] h-[280px] rounded-full pointer-events-none" style="background: rgba(255,255,255,.06); top:-90px; right:-60px"></div>
        <div class="absolute w-[200px] h-[200px] rounded-full pointer-events-none" style="background: rgba(255,255,255,.05); bottom:-80px; left:-40px"></div>
        <h2 class="relative text-[clamp(28px,3.6vw,42px)] font-black text-white tracking-[-0.02em] leading-[1.12] m-0">
          {{ $t('approvalPage.cta.title') }}
        </h2>
        <p class="relative text-[17px] text-[#cdd9f0] mt-4 max-w-[520px] mx-auto">
          {{ $t('approvalPage.cta.desc') }}
        </p>
        <div class="relative flex flex-wrap gap-3.5 justify-center mt-8">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-white text-[#2f57c9] px-7 py-3.5 rounded-2xl text-[15px] font-black"
          >
            <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.9-5.6A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z"/>
            </svg>
            {{ $t('approvalPage.cta.btn1') }}
          </a>
          <router-link
            to="/contact-us"
            class="inline-flex items-center gap-2 text-white px-6 py-3.5 rounded-2xl text-[15px] font-bold border"
            style="background: rgba(255,255,255,.12); border-color: rgba(255,255,255,.25)"
          >
            {{ $t('approvalPage.cta.btn2') }}
          </router-link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/AppHeader.vue'
import Footer from '@/components/Footer.vue'
import { isFromIndonesia } from '@/i18n'

const { t, tm } = useI18n()

const stage = ref(0)
const openFaq = ref(-1)
const activeFeature = ref(0)
const autoFeat = ref(true)
let stageTimer: ReturnType<typeof setInterval>
let featTimer: ReturnType<typeof setInterval>

// Hero illustration: animated approval-flow cycle (steps → e-sign → archived)
const flowSteps = [
  { label: 'L1 · Manajer', sub: 'Review anggaran' },
  { label: 'L2 · Direktur', sub: 'Persetujuan akhir' },
  { label: 'Tanda tangan', sub: 'E-sign terverifikasi' },
  { label: 'Terarsip', sub: 'PDF + jejak audit' },
]
const heroDoneAt = [1, 2, 4, 5]
const heroActiveMap = [0, 1, 2, 2, 3, -1]
const heroRailHeights = ['0%', '34%', '67%', '67%', '100%', '100%']
const heroChipLabels = ['Menunggu L1', 'Menunggu L2', 'Proses e-sign', 'Proses e-sign', 'Disetujui', 'Disetujui']

const cycle = ref(0)
const isDone = (i: number) => cycle.value >= heroDoneAt[i]!
const isActive = (i: number) => !isDone(i) && heroActiveMap[cycle.value] === i
const railHeight = computed(() => heroRailHeights[cycle.value]!)
const chipText = computed(() => heroChipLabels[cycle.value]!)
const chipOk = computed(() => cycle.value >= 4)
const sigDraw = computed(() => cycle.value >= 3)
const stampShow = computed(() => cycle.value >= 4)
const toastShow = computed(() => cycle.value >= 5)
let cycleTimer: ReturnType<typeof setInterval>

// AI drafting: typewriter that reveals the selected tone's letter 5 chars at a time
const aiTone = ref(0)
const aiChars = ref(0)
const aiRunning = ref(true)
let aiTimer: ReturnType<typeof setInterval>

const aiTones = computed(() => tm('approvalPage.aiDrafting.tones') as Array<{ label: string; sub: string; caption: string; letter: string }>)
const aiPoints = computed(() => tm('approvalPage.aiDrafting.field3Points') as string[])
const aiTrust = computed(() => tm('approvalPage.aiDrafting.trust') as Array<{ t: string; d: string }>)
const aiLetter = computed(() => aiTones.value[aiTone.value]?.letter ?? '')
const aiCaption = computed(() => aiTones.value[aiTone.value]?.caption ?? '')
const aiText = computed(() => aiLetter.value.slice(0, aiChars.value))

const pickTone = (i: number) => {
  aiTone.value = i
  rerunAi()
}
const rerunAi = () => {
  aiChars.value = 0
  aiRunning.value = true
}

const aiTrustIcons: string[] = [
  `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#2f57c9" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7V5h16v2M9 20h6M12 5v15"/></svg>`,
  `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#2f57c9" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7.5 3.5v5c0 4.6-3.2 8.4-7.5 9.5-4.3-1.1-7.5-4.9-7.5-9.5v-5L12 3z"/><path d="m9.2 12 2 2 3.6-3.8"/></svg>`,
  `<svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#2f57c9" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
]

const toggleFaq = (i: number) => {
  openFaq.value = openFaq.value === i ? -1 : i
}

const setFeature = (i: number) => {
  activeFeature.value = i
  autoFeat.value = false
}

const steps = computed(() => tm('approvalPage.howItWorks.steps') as Array<{ n: string; t: string; d: string }>)
const benefits = computed(() => tm('approvalPage.why.benefits') as Array<{ t: string; d: string }>)
const faqs = computed(() => tm('approvalPage.faq.items') as Array<{ q: string; a: string }>)
const dashboardPoints = computed(() => tm('approvalPage.features.dashboardPoints') as string[])
const showcaseTabs = computed(() => tm('approvalPage.showcase.tabs') as Array<{ sub: string; label: string; num: string }>)
const showcaseChips = computed(() => tm('approvalPage.showcase.f5.chips') as string[])

// ponytail: fixed-rate USD prices (1 USD ≈ Rp 16.000), update manually when pricing changes
const currency = isFromIndonesia ? 'IDR' : 'USD'
const pricingPlans = computed(() => {
  const base: Array<{ key: string; price: string; discount?: string; highlight?: boolean; dark?: boolean }> = [
    { key: 'trial', price: isFromIndonesia ? 'Rp 0' : '$0' },
    { key: 'monthly', price: isFromIndonesia ? 'Rp 120.000' : '$7.50' },
    { key: 'yearly', price: isFromIndonesia ? 'Rp 100.000' : '$6.25', discount: '-17%', highlight: true },
    { key: 'custom', price: t('approvalPage.pricing.custom.price'), dark: true },
  ]
  return base.map((p) => ({
    ...p,
    name: t(`approvalPage.pricing.${p.key}.name`),
    tagline: t(`approvalPage.pricing.${p.key}.tagline`),
    priceNote: t(`approvalPage.pricing.${p.key}.priceNote`),
    features: tm(`approvalPage.pricing.${p.key}.features`) as string[],
    btn: t(`approvalPage.pricing.${p.key}.btn`),
  }))
})

const featureIcons: string[] = [
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>`,
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3"/><path d="M21 18v3"/><path d="M18 21h-1"/></svg>`,
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2"/><path d="M5 3 2.5 5.5"/><path d="M19 3l2.5 2.5"/></svg>`,
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v6h6"/><path d="M3.51 9a9 9 0 1 0 2.13-3.36L3 8"/></svg>`,
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="7" rx="1.5"/><rect x="3" y="14" width="9" height="7" rx="1.5"/><rect x="16" y="14" width="5" height="7" rx="1.5"/></svg>`,
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
]

onMounted(() => {
  stageTimer = setInterval(() => {
    stage.value = (stage.value + 1) % 4
  }, 1600)
  featTimer = setInterval(() => {
    if (autoFeat.value) activeFeature.value = (activeFeature.value + 1) % 7
  }, 4200)
  cycleTimer = setInterval(() => {
    cycle.value = (cycle.value + 1) % 6
  }, 1400)
  aiTimer = setInterval(() => {
    if (!aiRunning.value) return
    const next = aiChars.value + 5
    if (next >= aiLetter.value.length) {
      aiChars.value = aiLetter.value.length
      aiRunning.value = false
    } else {
      aiChars.value = next
    }
  }, 20)

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up')
        entry.target.classList.remove('opacity-0')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' })
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})

onUnmounted(() => {
  clearInterval(stageTimer)
  clearInterval(featTimer)
  clearInterval(cycleTimer)
  clearInterval(aiTimer)
})
</script>

<style scoped>
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
@keyframes heroFloaty {
  0%, 100% { transform: rotate(6deg) translateY(0); }
  50%       { transform: rotate(6deg) translateY(-10px); }
}
@keyframes aiSparkle { 0%, 100% { opacity: .55; } 50% { opacity: 1; } }
@keyframes aiBounceDot {
  0%, 80%, 100% { transform: translateY(0); opacity: .45; }
  40%            { transform: translateY(-4px); opacity: 1; }
}
@keyframes aiBlink { 50% { opacity: 0; } }

.hero-approval-page { min-height: 780px; }
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

.hero-ai-badge {
  position: absolute; top: -16px; right: 12px;
  display: inline-flex; align-items: center; gap: 7px;
  background: linear-gradient(135deg, #3a63e0, #2f6be8);
  color: #fff; font-size: 11.5px; font-weight: 800;
  padding: 7px 13px; border-radius: 999px; letter-spacing: .01em; white-space: nowrap;
  box-shadow: 0 14px 28px -12px rgba(47,87,201,.9);
  animation: heroFloaty 5.5s ease-in-out infinite;
}
.hero-ai-badge svg { animation: aiSparkle 2.4s ease-in-out infinite; }

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
  .hero-approval-page { min-height: 0; }
  .hero-scene { position: relative; margin-top: 48px; display: flex; flex-direction: column; gap: 20px; align-items: center; }
  .hero-card { position: relative; inset: auto; transform: none; }
  .hero-card-doc, .hero-card-steps { top: auto; left: auto; right: auto; width: min(340px, 100%); }
  .hero-toast { position: relative; left: auto; bottom: auto; opacity: 1; }
  .hero-link, .hero-dots { display: none; }
}

/* Eyebrow divider: "— label —" rule used between sub-groups of a section */
.section-divider {
  display: flex; align-items: center; gap: 16px;
  font-size: 12px; font-weight: 800; letter-spacing: .07em;
  text-transform: uppercase; color: #9aa6bd; white-space: nowrap;
}
.section-divider::before,
.section-divider::after { content: ''; height: 1px; flex: 1; background: #e6ebf4; }

/* ─── AI drafting ─── */
.ai-dots {
  background-image: radial-gradient(#d9e3f8 1.3px, transparent 1.3px);
  background-size: 28px 28px;
  -webkit-mask-image: radial-gradient(closest-side at 50% 30%, #000 10%, transparent 80%);
  mask-image: radial-gradient(closest-side at 50% 30%, #000 10%, transparent 80%);
  opacity: .7;
}
.ai-sparkle { animation: aiSparkle 2.4s ease-in-out infinite; }
.ai-step-num {
  width: 19px; height: 19px; border-radius: 6px; flex-shrink: 0;
  background: #e9f0ff; color: #2f57c9; font-size: 11px; font-weight: 800;
  display: flex; align-items: center; justify-content: center;
}
.ai-dot { width: 4px; height: 4px; border-radius: 50%; background: #2f57c9; animation: aiBounceDot 1s infinite; }
.ai-caret {
  display: inline-block; width: 2px; height: 16px; background: #2f57c9;
  vertical-align: -3px; margin-left: 1px; animation: aiBlink .9s step-end infinite;
}

/* Animated dashed connector */
.approval-connector {
  width: 90px;
  height: 4px;
  border-radius: 999px;
  background-image: repeating-linear-gradient(90deg, #c2cfe6 0 9px, transparent 9px 18px);
  background-size: 18px 100%;
  animation: dash 0.8s linear infinite;
}
@keyframes dash {
  to { background-position: -18px 0; }
}

/* Pulse ring on the check circle */
.approval-ring {
  animation: pulseRing 1.6s ease-out infinite;
}
@keyframes pulseRing {
  0%   { transform: scale(0.85); opacity: 0.7; }
  70%  { transform: scale(1.7);  opacity: 0; }
  100% { opacity: 0; }
}

/* FAQ expand transition */
.faq-expand-enter-active,
.faq-expand-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.faq-expand-enter-from,
.faq-expand-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* Showcase feature panel transition */
.feat-fade-enter-active,
.feat-fade-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}
.feat-fade-enter-from,
.feat-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* SLA ring animation */
@keyframes drawRing {
  from { stroke-dashoffset: 283; }
  to   { stroke-dashoffset: 64; }
}

/* Pricing cards — lift on hover */
.pricing-card {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}
@media (hover: hover) {
  .pricing-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
}

/* Recall slide-back animation */
@keyframes slideBack {
  0%   { transform: translateX(0); opacity: 1; }
  45%  { transform: translateX(-16px) scale(.97); opacity: .55; }
  100% { transform: translateX(0); opacity: 1; }
}
.showcase-slide-back {
  animation: slideBack 2.4s ease-in-out infinite;
}
</style>

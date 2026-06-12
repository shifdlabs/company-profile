<template>
  <div class="bg-[#f6f8fc] text-[#16233f] overflow-x-hidden">
    <AppHeader />

    <!-- ── HERO ── -->
    <div style="background: radial-gradient(720px 440px at 80% 38%, rgba(58,99,224,.1), transparent 70%)">
      <div class="max-w-[1180px] mx-auto px-8 pt-28 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left -->
        <div>
          <div class="inline-flex items-center gap-2 bg-[#e9f0ff] border border-[#d3e1ff] text-[#2f57c9] text-xs font-bold px-3.5 py-2 rounded-full tracking-wide">
            <span class="w-2 h-2 rounded-full bg-[#1f9d6b] shrink-0 inline-block"></span>
            {{ $t('approvalPage.hero.badge') }}
          </div>
          <h1 class="text-[clamp(38px,5vw,58px)] font-black leading-[1.04] tracking-[-0.025em] mt-5 text-[#16233f]">
            {{ $t('approvalPage.hero.title1') }}
            <span
              class="bg-clip-text text-transparent"
              style="background-image: linear-gradient(100deg, #2f57c9, #5a86f0)"
            >{{ $t('approvalPage.hero.titleHighlight') }}</span>
            {{ $t('approvalPage.hero.title2') }}
          </h1>
          <p class="text-lg leading-relaxed text-[#5b6b86] mt-5 max-w-[500px]">
            {{ $t('approvalPage.hero.description') }}
          </p>
          <div class="flex flex-wrap gap-3.5 mt-8">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-white px-6 py-3.5 rounded-[14px] text-sm font-bold"
              style="background: linear-gradient(135deg,#3a63e0,#2f6be8); box-shadow: 0 14px 32px -6px rgba(47,87,201,.5)"
            >
              <svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.6-.8L3 21l1.9-5.6A8.38 8.38 0 0 1 4 11.5 8.5 8.5 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z"/>
              </svg>
              {{ $t('approvalPage.hero.ctaContact') }}
            </a>
            <a
              href="#alur"
              class="inline-flex items-center gap-2 bg-white text-[#2f57c9] px-6 py-3.5 rounded-[14px] text-sm font-bold border border-[#d3e1ff]"
            >
              {{ $t('approvalPage.hero.ctaHow') }}
            </a>
          </div>
        </div>

        <!-- Right: Approval card mockup -->
        <div class="relative hidden lg:block">
          <div
            class="bg-white border border-[#e9eef6] rounded-3xl p-5 approval-float-main"
            style="box-shadow: 0 30px 70px -30px rgba(20,35,63,.4)"
          >
            <div class="flex items-center gap-2.5 pb-4 border-b border-[#eef1f7]">
              <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                <rect x="4" y="7" width="12.5" height="12.5" rx="3.2" fill="#2f57c9" opacity="0.24"/>
                <rect x="7.5" y="3.5" width="12.5" height="12.5" rx="3.2" fill="#2f57c9"/>
                <path d="m10.6 9.7 2 2 3.4-3.6" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="font-black text-[15px]">{{ $t('approvalPage.hero.cardTitle') }}</span>
              <span class="ml-auto bg-[#2f57c9] text-white text-xs font-bold px-2.5 py-0.5 rounded-lg">3</span>
            </div>
            <div class="flex flex-col gap-2.5 pt-4">
              <div class="flex items-center gap-3 bg-[#f7f9fd] border border-[#eef1f7] rounded-[13px] px-3.5 py-3">
                <div class="w-9 h-9 rounded-[9px] bg-[#e9f0ff] flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="#2f57c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
                  </svg>
                </div>
                <div class="min-w-0">
                  <p class="font-bold text-[13px]">INV-2024-001</p>
                  <p class="text-[11px] text-[#9aa6bd]">{{ $t('approvalPage.hero.dept1') }}</p>
                </div>
                <span class="ml-auto text-[11px] font-bold text-[#2f57c9] bg-[#e9f0ff] px-2 py-1 rounded-lg whitespace-nowrap">{{ $t('approvalPage.hero.statusWaitL2') }}</span>
              </div>
              <div class="flex items-center gap-3 bg-[#f7f9fd] border border-[#eef1f7] rounded-[13px] px-3.5 py-3">
                <div class="w-9 h-9 rounded-[9px] bg-[#e6f6ee] flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="#1f9d6b" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                <div class="min-w-0">
                  <p class="font-bold text-[13px]">PO-2024-118</p>
                  <p class="text-[11px] text-[#9aa6bd]">Procurement</p>
                </div>
                <span class="ml-auto text-[11px] font-bold text-[#1f9d6b] bg-[#e6f6ee] px-2 py-1 rounded-lg whitespace-nowrap">{{ $t('approvalPage.hero.statusApproved') }}</span>
              </div>
              <div class="flex items-center gap-3 bg-[#f7f9fd] border border-[#eef1f7] rounded-[13px] px-3.5 py-3">
                <div class="w-9 h-9 rounded-[9px] bg-[#e9f0ff] flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="#2f57c9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
                  </svg>
                </div>
                <div class="min-w-0">
                  <p class="font-bold text-[13px]">MOU-2024-007</p>
                  <p class="text-[11px] text-[#9aa6bd]">{{ $t('approvalPage.hero.dept3') }}</p>
                </div>
                <span class="ml-auto text-[11px] font-bold text-[#2f57c9] bg-[#e9f0ff] px-2 py-1 rounded-lg whitespace-nowrap">{{ $t('approvalPage.hero.statusWaitL1') }}</span>
              </div>
            </div>
          </div>
          <!-- Floating approved badge -->
          <div
            class="absolute -top-5 -right-3 bg-white border border-[#e9eef6] rounded-2xl px-4 py-2.5 flex items-center gap-2.5 approval-float-badge"
            style="box-shadow: 0 16px 36px -12px rgba(20,35,63,.35)"
          >
            <div class="w-8 h-8 rounded-full bg-[#1f9d6b] flex items-center justify-center shrink-0">
              <svg class="w-4 h-4" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </div>
            <div>
              <p class="text-xs font-black leading-tight">{{ $t('approvalPage.hero.badgeApproved') }}</p>
              <p class="text-[10px] text-[#9aa6bd]">{{ $t('approvalPage.hero.badgeTime') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── ANIMATED END-TO-END ── -->
    <section id="alur" class="bg-white border-y border-[#eef1f7] py-24 px-8">
      <div class="max-w-[1000px] mx-auto text-center">
        <p class="text-xs font-black uppercase tracking-[.08em] text-[#2f57c9]">{{ $t('approvalPage.flow.label') }}</p>
        <h2 class="text-[clamp(28px,3.6vw,40px)] font-black tracking-[-0.02em] mt-3.5 leading-[1.12]">
          {{ $t('approvalPage.flow.title') }}
        </h2>
        <p class="text-[17px] text-[#5b6b86] mt-4 max-w-[560px] mx-auto">
          {{ $t('approvalPage.flow.description') }}
        </p>

        <div class="mt-16 bg-[#f7f9fd] border border-[#eef1f7] rounded-[28px] px-10 py-14 overflow-x-auto">
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
      </div>
    </section>

    <!-- ── HOW IT WORKS ── -->
    <section class="max-w-[1180px] mx-auto px-8 py-24">
      <div class="text-center">
        <p class="text-xs font-black uppercase tracking-[.08em] text-[#2f57c9]">{{ $t('approvalPage.howItWorks.label') }}</p>
        <h2 class="text-[clamp(28px,3.6vw,40px)] font-black tracking-[-0.02em] mt-3.5">{{ $t('approvalPage.howItWorks.title') }}</h2>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        <div
          v-for="step in steps"
          :key="(step as any).n"
          class="bg-white border border-[#e9eef6] rounded-[20px] p-7"
          style="box-shadow: 0 18px 40px -28px rgba(20,35,63,.3)"
        >
          <p class="step-number text-[48px] font-black leading-none">{{ (step as any).n }}</p>
          <h3 class="font-black text-[17px] mt-4">{{ (step as any).t }}</h3>
          <p class="text-sm text-[#5b6b86] leading-[1.55] mt-2.5">{{ (step as any).d }}</p>
        </div>
      </div>
    </section>

    <!-- ── FEATURES ── -->
    <section class="bg-white border-t border-[#eef1f7] py-24 px-8">
      <div class="max-w-[1180px] mx-auto">
        <div class="text-center">
          <p class="text-xs font-black uppercase tracking-[.08em] text-[#2f57c9]">{{ $t('approvalPage.features.label') }}</p>
          <h2 class="text-[clamp(28px,3.6vw,40px)] font-black tracking-[-0.02em] mt-3.5">{{ $t('approvalPage.features.title') }}</h2>
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
        <div class="grid sm:grid-cols-3 gap-6 mt-20">
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
                <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
              </svg>
            </div>
            <h4 class="text-[18px] font-black mt-4">{{ $t('approvalPage.features.card3Title') }}</h4>
            <p class="text-sm text-[#5b6b86] leading-[1.55] mt-2.5">{{ $t('approvalPage.features.card3Desc') }}</p>
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

const { tm } = useI18n()

const stage = ref(0)
const openFaq = ref(-1)
let stageTimer: ReturnType<typeof setInterval>

const toggleFaq = (i: number) => {
  openFaq.value = openFaq.value === i ? -1 : i
}

const steps = computed(() => tm('approvalPage.howItWorks.steps') as Array<{ n: string; t: string; d: string }>)
const benefits = computed(() => tm('approvalPage.why.benefits') as Array<{ t: string; d: string }>)
const faqs = computed(() => tm('approvalPage.faq.items') as Array<{ q: string; a: string }>)
const dashboardPoints = computed(() => tm('approvalPage.features.dashboardPoints') as string[])

onMounted(() => {
  stageTimer = setInterval(() => {
    stage.value = (stage.value + 1) % 4
  }, 1600)
})

onUnmounted(() => {
  clearInterval(stageTimer)
})
</script>

<style scoped>
/* Float animations for hero mockup */
@keyframes approvalFloat {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}
@keyframes approvalFloatBadge {
  0%, 100% { transform: translateY(0px) rotate(-1.5deg); }
  50%       { transform: translateY(-7px) rotate(-1.5deg); }
}
.approval-float-main {
  animation: approvalFloat 6s ease-in-out infinite;
}
.approval-float-badge {
  animation: approvalFloatBadge 5s ease-in-out infinite;
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

/* Step numbers — vibrant glow */
.step-number {
  color: #2f57c9;
  text-shadow:
    0 0 18px rgba(47, 87, 201, 0.55),
    0 0 36px rgba(47, 87, 201, 0.25);
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
</style>

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

    <!-- ── SHOWCASE (FITUR UNGGULAN) ── -->
    <section class="bg-[#0c1730] text-white py-24 px-8 relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(820px 480px at 78% 18%, rgba(58,99,224,.22), transparent 70%)"></div>
      <div class="relative max-w-[1180px] mx-auto">
        <div class="text-center">
          <div class="inline-flex items-center gap-2 bg-[rgba(93,127,196,.16)] border border-[rgba(125,151,207,.32)] text-[#aebfe4] text-xs font-bold tracking-[.07em] uppercase px-4 py-1.5 rounded-full">
            {{ $t('approvalPage.showcase.badge') }}
          </div>
          <h2 class="text-[clamp(30px,4vw,46px)] font-black tracking-[-0.025em] mt-5 leading-[1.1] text-white whitespace-pre-line">
            {{ $t('approvalPage.showcase.title') }}
          </h2>
          <p class="text-[17px] text-[#aab6cf] mt-4 max-w-[600px] mx-auto">
            {{ $t('approvalPage.showcase.desc') }}
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

<script setup lang="ts">
import useScrollToSection from './useScrollToSection'

const { scrollToSection } = useScrollToSection()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#f7f9fb] text-[#434655] pt-[80px] pb-8 border-t border-[#e0e3e5]" data-purpose="site-footer">
    <div class="container max-w-[1280px] mx-auto px-6 lg:px-12">
      <!-- Top Section: Logo, Links, Contact -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[48px] mb-[64px]">
        <!-- Logo Column -->
        <div class="lg:col-span-1" data-purpose="footer-logo">
          <div class="flex items-center gap-4 mb-[24px]">
            <!-- Shifd Logo -->
            <img src="/src/assets/app-logo.svg" alt="Shifd Logo" class="h-16 w-auto">
            <span class="text-[42px] font-['DM_Serif_Text'] leading-none text-[#2f80ed]">Shifd</span>
          </div>
          <p class="text-base text-[#565e74] leading-relaxed">
            Empowering your digital transformation with innovative solutions.
          </p>
        </div>
        
        <!-- Links Columns -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:col-span-3 gap-8 pt-4" data-purpose="footer-links">
          <!-- Product Column -->
          <div>
            <h4 class="text-[#191c1e] font-semibold mb-[16px] tracking-wide uppercase text-[16px]" style="font-family: 'Inter', sans-serif; line-height: 1; letter-spacing: 0.05em;">{{ $t('footer.product') }}</h4>
            <ul class="space-y-[8px] text-[16px]" style="font-family: 'Inter', sans-serif; line-height: 2;">
              <li class="">
                <button @click="scrollToSection('products-services')" class="footer-link text-[#434655]">Shifd Approval</button>
              </li>
            </ul>
          </div>
          
          <!-- Services Column -->
          <div>
            <h4 class="text-[#191c1e] font-semibold mb-[16px] tracking-wide uppercase text-[16px]" style="font-family: 'Inter', sans-serif; line-height: 1; letter-spacing: 0.05em;">{{ $t('footer.service') }}</h4>
            <ul class="space-y-[8px] text-[16px]" style="font-family: 'Inter', sans-serif; line-height: 2;">
              <li class="">
                <button @click="scrollToSection('shifd-services-section')" class="footer-link text-[#434655]">Mobile Development</button>
              </li>
              <li class="">
                <button @click="scrollToSection('shifd-services-section')" class="footer-link text-[#434655]">Web Development</button>
              </li>
              <li class="">
                <button @click="scrollToSection('shifd-services-section')" class="footer-link text-[#434655]">Solution Consultation</button>
              </li>
            </ul>
          </div>
          
          <!-- Company Column -->
          <div>
            <h4 class="text-[#191c1e] font-semibold mb-[16px] tracking-wide uppercase text-[16px]" style="font-family: 'Inter', sans-serif; line-height: 1; letter-spacing: 0.05em;">{{ $t('footer.company') }}</h4>
            <ul class="space-y-[8px] text-[16px]" style="font-family: 'Inter', sans-serif; line-height: 2;">
              <li class="">
                <a class="footer-link text-[#434655]" href="/about-us">About us</a>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Reach Out Column -->
        <div class="lg:col-span-1 pt-4" data-purpose="footer-contact">
          <h4 class="text-[#191c1e] font-semibold mb-[16px] tracking-wide uppercase text-[16px]" style="font-family: 'Inter', sans-serif; line-height: 1; letter-spacing: 0.05em;">Reach Out</h4>
          <div class="space-y-[32px] text-[16px]" style="font-family: 'Inter', sans-serif; line-height: 2;">
            <div>
              <p class="text-[#191c1e] font-semibold tracking-wide uppercase text-[16px] mb-1" style="font-family: 'Inter', sans-serif; line-height: 1; letter-spacing: 0.05em;">{{ $t('footer.ourLocation') }}</p>
              <address class="not-italic leading-relaxed text-[#434655]">
                Jakarta, Jakarta 14430,<br>
                Indonesia
              </address>
            </div>
            <div>
              <p class="text-[#191c1e] font-semibold tracking-wide uppercase text-[16px] mb-1" style="font-family: 'Inter', sans-serif; line-height: 1; letter-spacing: 0.05em;">{{ $t('footer.contactUs') }}</p>
              <p class=""><a class="footer-link text-[#434655]" href="tel:+6285111210462">+62 851 1121 0462</a></p>
              <p class=""><a class="footer-link text-[#434655]" href="mailto:sales@shifdlabs.com">sales@shifdlabs.com</a></p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Middle Section: Social Row with Divider -->
      <div class="flex items-center justify-center mb-8" data-purpose="footer-social">
        <div class="h-px bg-[#e0e3e5] flex-grow rounded-full"></div>
        <div class="flex space-x-6 px-6">
          <a aria-label="LinkedIn" class="text-[#565e74] hover:text-[#004ac6] social-icon" href="https://www.linkedin.com/in/shifd-labs/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a aria-label="X (Twitter)" class="text-[#565e74] hover:text-[#004ac6] social-icon" href="https://x.com/shifdlabs" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a aria-label="Instagram" class="text-[#565e74] hover:text-[#004ac6] social-icon" href="https://www.instagram.com/shifdlabs/" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>
          <a aria-label="TikTok" class="text-[#565e74] hover:text-[#004ac6] social-icon" href="https://www.tiktok.com/@shifdlabs" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.52a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.14z"/></svg>
          </a>
        </div>
        <div class="h-px bg-[#e0e3e5] flex-grow rounded-full"></div>
      </div>
      
      <!-- Bottom Section: Copyright -->
      <div class="text-center text-[16px] text-[#565e74]" data-purpose="footer-copyright" style="font-family: 'Inter', sans-serif; line-height: 1.5;">
        <p class="">© <span>{{ currentYear }}</span> Shifd Labs. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@600&family=Inter:wght@400;600&display=swap');

.footer-link {
  transition: color 0.2s ease-in-out;
}

.footer-link:hover {
  color: #004ac6; /* primary */
}

.social-icon {
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}

.social-icon:hover {
  transform: translateY(-2px);
  opacity: 0.8;
}
</style>
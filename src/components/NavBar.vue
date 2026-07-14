<template>
  <header :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'bg-[#00142b]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30' : 'bg-transparent']">
    <div class="h2-container">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3 group">
          <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-h2-400 to-h2-600 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-h2-500/30 group-hover:shadow-h2-400/40 transition-shadow">
            H₂
          </div>
          <div class="hidden sm:block">
            <div class="text-sm font-bold text-white leading-tight">成都数智氢芯</div>
            <div class="text-[10px] text-h2-400 leading-tight tracking-wider">DIGITAL H₂ TECH</div>
          </div>
        </router-link>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-1">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path"
            :class="['px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200', $route.path === item.path ? 'text-h2-300 bg-h2-500/15' : 'text-white/70 hover:text-white hover:bg-white/5']">
            {{ item.name }}
          </router-link>
        </nav>

        <!-- CTA + Mobile Toggle -->
        <div class="flex items-center gap-3">
          <router-link to="/contact" class="hidden sm:inline-flex h2-btn-primary text-sm py-2 px-4">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
            商务咨询
          </router-link>
          <button @click="mobileOpen = !mobileOpen" class="lg:hidden p-2 text-white/70 hover:text-white">
            <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="mobileOpen" class="lg:hidden bg-[#00142b]/98 border-t border-white/10">
        <div class="h2-container py-4 space-y-1">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path" @click="mobileOpen = false"
            :class="['block px-4 py-3 rounded-xl text-sm font-medium transition-all', $route.path === item.path ? 'text-h2-300 bg-h2-500/15' : 'text-white/70 hover:text-white hover:bg-white/5']">
            {{ item.name }}
          </router-link>
          <div class="pt-3">
            <router-link to="/contact" @click="mobileOpen = false" class="h2-btn-primary w-full justify-center text-sm">
              商务咨询
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </header>
  <!-- Spacer -->
  <div class="h-16 md:h-20"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navItems = [
  { name: '首页', path: '/' },
  { name: '关于我们', path: '/about' },
  { name: '产品中心', path: '/products' },
  { name: '技术实力', path: '/technology' },
  { name: '测试数据', path: '/data' },
  { name: '应用案例', path: '/cases' },
  { name: '氢健康', path: '/health' },
  { name: '联系我们', path: '/contact' },
]

const scrolled = ref(false)
const mobileOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  max-height: 0;
}
.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>

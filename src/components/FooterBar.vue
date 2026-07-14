<template>
  <footer class="bg-[#000d1a] border-t border-white/8 pt-14 pb-8">
    <div class="h2-container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-h2-400 to-h2-600 flex items-center justify-center font-black text-white text-lg">H₂</div>
            <div>
              <div class="text-sm font-bold text-white">成都数智氢芯科技</div>
              <div class="text-[10px] text-h2-400 tracking-wider">DIGITAL H₂ TECHNOLOGY</div>
            </div>
          </div>
          <p class="text-white/40 text-sm leading-relaxed">
            绿氢电极材料专业代理商，莒纳科技氢健康产业唯一排他合作伙伴。<br/>
            依托自主工艺，服务绿氢工业与氢健康民用市场。
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white/80 font-semibold text-sm mb-4">快速导航</h4>
          <ul class="space-y-2.5">
            <li v-for="item in links" :key="item.path">
              <router-link :to="item.path" class="text-white/40 hover:text-h2-300 text-sm transition-colors">{{ item.name }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Products -->
        <div>
          <h4 class="text-white/80 font-semibold text-sm mb-4">核心产品</h4>
          <ul class="space-y-2.5">
            <li v-for="p in products" :key="p.name">
              <router-link to="/products" class="text-white/40 hover:text-h2-300 text-sm transition-colors">{{ p.name }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white/80 font-semibold text-sm mb-4">联系我们</h4>
          <ul class="space-y-2.5 text-sm text-white/40">
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 mt-0.5 shrink-0 text-h2-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              成都市高新区天祥广场B座2613
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 mt-0.5 shrink-0 text-h2-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              莒纳科技战略合作 · 代理合作
            </li>
            <li class="flex items-start gap-2">
              <svg class="w-4 h-4 mt-0.5 shrink-0 text-h2-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              商务合作请访问<a href="/contact" class="text-h2-400 hover:underline ml-1">联系页面</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-white/30 text-xs">© {{ new Date().getFullYear() }} 成都数智氢芯科技有限公司 保留所有权利</p>
        <p class="text-white/25 text-xs">绿氢电极材料 · 氢健康解决方案服务商</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = [
  { name: '关于我们', path: '/about' },
  { name: '产品中心', path: '/products' },
  { name: '技术实力', path: '/technology' },
  { name: '测试数据', path: '/data' },
  { name: '应用案例', path: '/cases' },
  { name: '氢健康', path: '/health' },
  { name: '联系我们', path: '/contact' },
]
const products = [
  { name: 'JA系列 — 碱液电极（ALK）', path: '/products' },
  { name: 'JP系列 — PEM膜电极', path: '/products' },
  { name: 'JE系列 — AEM膜电极', path: '/products' },
  { name: '氢健康产品（富氢水杯）', path: '/health' },
]
</script>

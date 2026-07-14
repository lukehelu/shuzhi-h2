<template>
  <!-- Hero Section -->
  <section class="relative min-h-[92vh] flex items-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-hero-gradient">
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle at 20% 50%, #0096d6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1ab7ff 0%, transparent 40%);"></div>
      <!-- Grid overlay -->
      <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(rgba(0,150,214,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,150,214,0.3) 1px, transparent 1px); background-size: 60px 60px;"></div>
      <!-- Floating orbs -->
      <div class="absolute top-1/4 left-[10%] w-72 h-72 rounded-full bg-h2-500/10 blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-[15%] w-96 h-96 rounded-full bg-h2-400/8 blur-3xl animate-pulse" style="animation-delay: 1.5s;"></div>
    </div>

    <div class="h2-container relative z-10">
      <div class="max-w-4xl">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 bg-h2-500/15 border border-h2-500/30 rounded-full px-4 py-1.5 mb-8">
          <span class="w-1.5 h-1.5 rounded-full bg-h2-400 animate-pulse"></span>
          <span class="text-h2-300 text-xs font-medium tracking-wider">莒纳科技 · 氢健康产业唯一排他代理商</span>
        </div>

        <!-- Headline -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
          绿氢电极材料<br/>
          <span class="bg-gradient-to-r from-h2-300 to-h2-500 bg-clip-text text-transparent">专业服务商</span>
        </h1>

        <p class="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
          覆盖 ALK · PEM · AEM 三大技术路线，以<strong class="text-white/80">原位生长+电沉积</strong>自主工艺，
          为绿氢行业提供高性能电极材料，并向下延伸至氢健康民用市场。
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4 mb-16">
          <router-link to="/products" class="h2-btn-primary text-base px-8 py-3.5">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
            浏览产品
          </router-link>
          <router-link to="/technology" class="h2-btn-outline text-base px-8 py-3.5">
            了解技术实力
          </router-link>
        </div>

        <!-- Stats Row -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div v-for="stat in stats" :key="stat.label" class="text-center p-3 rounded-xl bg-white/[0.04] border border-white/8 hover:border-h2-500/30 transition-all cursor-default group">
            <div class="text-2xl md:text-3xl font-black text-h2-300 group-hover:text-h2-200 transition-colors">{{ stat.value }}</div>
            <div class="text-[10px] md:text-xs text-white/40 mt-1 leading-tight">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30">
      <div class="w-px h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse"></div>
    </div>
  </section>

  <!-- Product Lines -->
  <section class="h2-section relative">
    <div class="h2-container">
      <div class="text-center mb-14">
        <div class="h2-title-bar justify-center">
          <span class="h2-dot"></span>
          <span class="h2-section-label">核心业务</span>
          <span class="h2-dot"></span>
        </div>
        <h2 class="h2-section-title mt-3">三大产品系列</h2>
        <p class="h2-section-subtitle mx-auto text-center">覆盖绿氢全场景应用，技术路线全面布局</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <router-link to="/products#ja" class="h2-card group block">
          <div class="flex items-start justify-between mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/20 flex items-center justify-center text-2xl">⚡</div>
            <span class="h2-tag">ALK 碱液电解</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-h2-300 transition-colors">JA 系列 — 碱液电极</h3>
          <p class="text-sm text-white/40 mb-4 leading-relaxed">工业碱性电解槽高性能阳极电极，原位生长工艺，电流密度可达 12000 A/m²，12000h+ 超长寿命验证。</p>
          <ul class="space-y-1.5 mb-5">
            <li class="text-xs text-white/50 flex items-center gap-1.5"><span class="w-1 h-1 rounded-full bg-yellow-400 shrink-0"></span>10000 A/m² @ 1.87V 实测</li>
            <li class="text-xs text-white/50 flex items-center gap-1.5"><span class="w-1 h-1 rounded-full bg-yellow-400 shrink-0"></span>衰减率 &lt; 3 μV/h</li>
            <li class="text-xs text-white/50 flex items-center gap-1.5"><span class="w-1 h-1 rounded-full bg-yellow-400 shrink-0"></span>耐启停 ~3000 次</li>
          </ul>
          <div class="flex items-center gap-1 text-h2-400 text-sm font-medium group-hover:gap-2 transition-all">
            了解详情
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </div>
        </router-link>

        <router-link to="/products#jp" class="h2-card group block">
          <div class="flex items-start justify-between mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 flex items-center justify-center text-2xl">💧</div>
            <span class="h2-tag bg-blue-500/20 text-blue-300 border-blue-500/30">PEM 膜电极</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-h2-300 transition-colors">JP 系列 — PEM膜电极</h3>
          <p class="text-sm text-white/40 mb-4 leading-relaxed">PEM电解水膜电极，兼容工业与氢健康应用。低成本、高一致性，寿命超 3000 小时验证。</p>
          <ul class="space-y-1.5 mb-5">
            <li class="text-xs text-white/50 flex items-center gap-1.5"><span class="w-1 h-1 rounded-full bg-blue-400 shrink-0"></span>500~20000 A/m² 宽域</li>
            <li class="text-xs text-white/50 flex items-center gap-1.5"><span class="w-1 h-1 rounded-full bg-blue-400 shrink-0"></span>氢健康专用排他代理</li>
            <li class="text-xs text-white/50 flex items-center gap-1.5"><span class="w-1 h-1 rounded-full bg-blue-400 shrink-0"></span>4500h+ 稳定性验证</li>
          </ul>
          <div class="flex items-center gap-1 text-h2-400 text-sm font-medium group-hover:gap-2 transition-all">
            了解详情
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </div>
        </router-link>

        <router-link to="/products#je" class="h2-card group block">
          <div class="flex items-start justify-between mb-4">
            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-2xl">🌱</div>
            <span class="h2-tag bg-emerald-500/20 text-emerald-300 border-emerald-500/30">AEM 膜电极</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-h2-300 transition-colors">JE 系列 — AEM膜电极</h3>
          <p class="text-sm text-white/40 mb-4 leading-relaxed">下一代 AEM 电解水膜电极，高活性与低成本兼顾，10000~30000 A/m² 超高电流密度，3200h+ 验证。</p>
          <ul class="space-y-1.5 mb-5">
            <li class="text-xs text-white/50 flex items-center gap-1.5"><span class="w-1 h-1 rounded-full bg-emerald-400 shrink-0"></span>30000 A/m² @ 2.0V</li>
            <li class="text-xs text-white/50 flex items-center gap-1.5"><span class="w-1 h-1 rounded-full bg-emerald-400 shrink-0"></span>衰减率 9.3 μV/h</li>
            <li class="text-xs text-white/50 flex items-center gap-1.5"><span class="w-1 h-1 rounded-full bg-emerald-400 shrink-0"></span>面向国内 AEM 头部企业</li>
          </ul>
          <div class="flex items-center gap-1 text-h2-400 text-sm font-medium group-hover:gap-2 transition-all">
            了解详情
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </div>
        </router-link>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="h2-section bg-[#000d1a]/60">
    <div class="h2-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div class="h2-title-bar">
            <span class="h2-dot"></span>
            <span class="h2-section-label">为什么选择我们</span>
          </div>
          <h2 class="h2-section-title mt-3">技术立身，数据说话</h2>
          <p class="h2-section-subtitle">
            携手莒纳科技，以全自主知识产权工艺，为绿氢行业树立性能标杆。
          </p>

          <div class="mt-8 space-y-4">
            <div v-for="adv in advantages" :key="adv.title" class="flex gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:border-h2-500/20 transition-all">
              <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-xl" :style="{ background: adv.bg, border: adv.border }">
                {{ adv.icon }}
              </div>
              <div>
                <h4 class="text-white font-semibold text-sm mb-1">{{ adv.title }}</h4>
                <p class="text-xs text-white/40 leading-relaxed">{{ adv.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Test Data Card -->
        <div class="h2-card p-8 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-40 h-40 rounded-full bg-h2-500/5 blur-2xl"></div>
          <div class="relative">
            <div class="text-h2-400 text-xs font-medium tracking-widest mb-6">关键性能数据</div>
            <div class="space-y-5">
              <div v-for="item in keyData" :key="item.label" class="relative">
                <div class="flex justify-between mb-1.5">
                  <span class="text-xs text-white/50">{{ item.label }}</span>
                  <span class="text-sm font-bold text-white">{{ item.value }}</span>
                </div>
                <div class="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div class="h-full rounded-full bg-gradient-to-r from-h2-500 to-h2-300 transition-all duration-1000" :style="{ width: item.pct + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Partner / Customer -->
  <section class="h2-section">
    <div class="h2-container">
      <div class="text-center mb-12">
        <div class="h2-title-bar justify-center">
          <span class="h2-dot"></span>
          <span class="h2-section-label">合作伙伴</span>
          <span class="h2-dot"></span>
        </div>
        <h2 class="h2-section-title mt-3">服务全球头部客户</h2>
        <p class="h2-section-subtitle mx-auto text-center">涵盖国内外知名绿氢装备制造商与能源央企</p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        <div v-for="partner in partners" :key="partner.name" class="h2-card p-4 text-center cursor-default">
          <div class="text-xs font-bold text-white/60 mb-1">{{ partner.name }}</div>
          <div class="text-[10px] text-white/30">{{ partner.country }}</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Hydrogen Health -->
  <section class="h2-section bg-gradient-to-b from-h2-900/50 to-transparent relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-h2-500/30 to-transparent"></div>
    <div class="h2-container relative">
      <div class="max-w-3xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 bg-h2-500/15 border border-h2-500/30 rounded-full px-4 py-1.5 mb-6">
          <span class="text-h2-300 text-xs font-medium tracking-wider">⭐ 新业务 · 即将上线</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-black text-white mb-6">氢健康产业运营</h2>
        <p class="text-white/50 text-base md:text-lg leading-relaxed mb-3">
          基于莒纳 PEM 膜电极技术，向下延伸至氢健康民用市场。<br/>
          <strong class="text-white/70">莒纳氢健康产业唯一排他代理商</strong>，授权期至 2029 年。
        </p>
        <p class="text-h2-400 font-bold mb-8">富氢水杯 · 本月底（2026年7月）重磅上市</p>
        <router-link to="/health" class="h2-btn-primary text-base px-8 py-3.5">
          抢先了解 →
        </router-link>
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="py-20">
    <div class="h2-container">
      <div class="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center" style="background: linear-gradient(135deg, #005580 0%, #003455 50%, #00142b 100%);">
        <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle, rgba(0,150,214,0.5) 1px, transparent 1px); background-size: 30px 30px;"></div>
        <div class="relative z-10">
          <h2 class="text-3xl md:text-4xl font-black text-white mb-4">开启您的绿氢合作之旅</h2>
          <p class="text-white/50 mb-8 max-w-lg mx-auto">无论是绿氢电极材料采购、定制化合作，还是氢健康产品代理，欢迎与我们联系。</p>
          <div class="flex flex-wrap gap-4 justify-center">
            <router-link to="/contact" class="h2-btn-primary text-base px-8 py-3.5">商务咨询</router-link>
            <router-link to="/products" class="h2-btn-outline text-base px-8 py-3.5 border-white/30 text-white/80 hover:text-white">查看产品参数</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: '300 MW', label: '年产能' },
  { value: '2.4 亿', label: '年产值（元）' },
  { value: '12000 h+', label: '最长测试时长' },
  { value: '3000 次', label: '启停耐受' },
  { value: '<3 μV/h', label: '衰减率' },
  { value: '25 人', label: '核心团队' },
]

const advantages = [
  { icon: '🔬', title: '自研催化剂 · 全自主知识产权', desc: '突破卡脖子技术，纳米颗粒均匀分散，规模化量产已实现。', bg: 'rgba(0,150,214,0.15)', border: '1px solid rgba(0,150,214,0.2)' },
  { icon: '🏭', title: '数字化工厂 · 年产 300 MW', desc: '4000㎡厂房，制浆/转印/涂布全流程自主设备。', bg: 'rgba(0,150,214,0.1)', border: '1px solid rgba(0,150,214,0.15)' },
  { icon: '🤝', title: '莒纳科技战略合作', desc: '累计融资1.5亿元，宁德时代战投，氢健康唯一排他代理。', bg: 'rgba(0,150,214,0.12)', border: '1px solid rgba(0,150,214,0.18)' },
  { icon: '📊', title: '工业槽 2500h+ 实测验证', desc: '1.76V @ 85±5℃通过国家能源局首台（套）认定标准。', bg: 'rgba(0,150,214,0.1)', border: '1px solid rgba(0,150,214,0.15)' },
]

const keyData = [
  { label: '电流密度（工业槽）', value: '10000 A/m²', pct: 83 },
  { label: '小室电压（实测）', value: '1.87V', pct: 70 },
  { label: '衰减率（行业领先）', value: '<3 μV/h', pct: 95 },
  { label: '启停耐受', value: '~3000 次', pct: 90 },
  { label: '结合力（超声失重）', value: '0.32%', pct: 85 },
]

const partners = [
  { name: '派瑞氢能', country: '河北' },
  { name: '天津大陆', country: '江苏' },
  { name: '上海电气', country: '上海' },
  { name: '东方电气', country: '四川' },
  { name: '中电丰业', country: '北京' },
  { name: 'Nel ASA', country: '挪威' },
  { name: '西门子能源', country: '德国' },
  { name: '蒂森克虏伯', country: '德国' },
  { name: 'ITM Power', country: '英国' },
  { name: '普拉格 Plug', country: '美国' },
  { name: '舜华新能源', country: '上海' },
  { name: '康明斯/H₂', country: '美国' },
]
</script>

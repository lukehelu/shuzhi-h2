<template>
  <!-- Hero -->
  <section class="relative py-20 overflow-hidden">
    <div class="absolute inset-0 bg-hero-gradient opacity-80"></div>
    <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(rgba(0,150,214,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,150,214,0.3) 1px, transparent 1px); background-size: 60px 60px;"></div>
    <div class="h2-container relative z-10 text-center">
      <div class="inline-flex items-center gap-2 bg-h2-500/15 border border-h2-500/30 rounded-full px-4 py-1.5 mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-h2-400"></span>
        <span class="text-h2-300 text-xs font-medium tracking-wider">COMPANY PROFILE</span>
      </div>
      <h1 class="text-4xl md:text-6xl font-black text-white mb-4">关于我们</h1>
      <p class="text-white/50 text-lg max-w-2xl mx-auto">成都数智氢芯 — 绿氢电极材料专业服务商，莒纳科技氢健康产业唯一排他合作伙伴</p>
    </div>
  </section>

  <!-- Company Info -->
  <section class="h2-section pt-0">
    <div class="h2-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <div class="h2-title-bar mb-4">
            <span class="h2-dot"></span>
            <span class="h2-section-label">公司简介</span>
          </div>
          <h2 class="text-3xl font-bold text-white mb-6">科技赋能绿氢<br/>服务氢健康民生</h2>
          <div class="space-y-4 text-white/60 leading-relaxed text-sm">
            <p>
              <strong class="text-white/80">成都数智氢芯科技有限公司</strong>成立于约2024年，坐落于成都市高新区天祥广场B座2613，是一家专注于绿氢电极材料代理与氢健康产业运营的创新型科技企业。
            </p>
            <p>
              公司依托莒纳科技的技术背景与管理经验，聚焦<strong class="text-white/80">绿氢电极材料</strong>（ALK/PEM/AEM三大技术路线），为国内外绿氢装备制造商提供高性能电极材料代理服务；同时，基于莒纳 PEM 膜电极技术，向下延伸至<strong class="text-white/80">氢健康民用市场</strong>，打造从工业到民生的完整氢能产业链闭环。
            </p>
            <p>
              莒纳科技累计融资<strong class="text-h2-300">1.5亿元</strong>，获宁德时代战略投资，核心团队具备中科院技术班底与世界500强管理经验，为数智氢芯提供了坚实的技术与资源支撑。
            </p>
          </div>
        </div>

        <!-- Info Cards -->
        <div class="space-y-4">
          <div class="h2-card">
            <div class="text-h2-400 text-xs font-medium tracking-widest mb-3">基本信息</div>
            <table class="w-full text-sm">
              <tbody class="text-white/60">
                <tr v-for="(row, i) in companyInfo" :key="i" :class="['border-b border-white/5', i === companyInfo.length - 1 ? 'border-0' : '']">
                  <td class="py-2.5 pr-4 text-white/40 w-1/3">{{ row.label }}</td>
                  <td class="py-2.5 text-white/80 font-medium">{{ row.value }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-3">
            <div class="h2-card text-center p-4">
              <div class="text-2xl font-black text-h2-300">300 MW</div>
              <div class="text-[10px] text-white/40 mt-1">年产能</div>
            </div>
            <div class="h2-card text-center p-4">
              <div class="text-2xl font-black text-h2-300">2.4 亿</div>
              <div class="text-[10px] text-white/40 mt-1">年产值</div>
            </div>
            <div class="h2-card text-center p-4">
              <div class="text-2xl font-black text-h2-300">25 人</div>
              <div class="text-[10px] text-white/40 mt-1">核心团队</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Honors -->
  <section class="h2-section bg-[#000d1a]/60">
    <div class="h2-container">
      <div class="text-center mb-12">
        <div class="h2-title-bar justify-center">
          <span class="h2-dot"></span>
          <span class="h2-section-label">资质荣誉</span>
          <span class="h2-dot"></span>
        </div>
        <h2 class="h2-section-title mt-3">荣誉与资质</h2>
        <p class="h2-section-subtitle mx-auto text-center">来自政府、行业协会与专业机构的权威认可</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="honor in honors" :key="honor.title" class="h2-card text-center p-6">
          <div class="text-4xl mb-4">{{ honor.icon }}</div>
          <h4 class="text-sm font-bold text-white mb-2 leading-snug">{{ honor.title }}</h4>
          <p class="text-xs text-white/40">{{ honor.issuer }}</p>
          <div v-if="honor.highlight" class="mt-3">
            <span class="h2-tag text-[10px]">{{ honor.highlight }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Timeline -->
  <section class="h2-section">
    <div class="h2-container">
      <div class="text-center mb-12">
        <div class="h2-title-bar justify-center">
          <span class="h2-dot"></span>
          <span class="h2-section-label">发展历程</span>
          <span class="h2-dot"></span>
        </div>
        <h2 class="h2-section-title mt-3">我们的里程碑</h2>
      </div>

      <div class="max-w-2xl mx-auto relative">
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-h2-500/60 via-h2-400/30 to-transparent"></div>
        <div class="space-y-8">
          <div v-for="(event, i) in timeline" :key="i" :class="['flex gap-6', i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse']">
            <div :class="['md:w-1/2', i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10']">
              <div class="h2-card p-5 inline-block w-full md:w-auto">
                <div class="text-h2-400 font-bold text-lg mb-1">{{ event.year }}</div>
                <h4 class="text-sm font-semibold text-white mb-1">{{ event.title }}</h4>
                <p class="text-xs text-white/40">{{ event.desc }}</p>
              </div>
            </div>
            <div class="relative z-10 w-8 h-8 rounded-full bg-h2-600 border-2 border-h2-400 flex items-center justify-center shrink-0 mt-2">
              <div class="w-2 h-2 rounded-full bg-h2-300"></div>
            </div>
            <div class="md:w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const companyInfo = [
  { label: '公司全称', value: '成都数智氢芯科技有限公司' },
  { label: '成立时间', value: '约2024年' },
  { label: '注册地址', value: '成都市高新区天祥广场B座2613' },
  { label: '核心代理', value: '莒纳科技 · 氢健康唯一排他代理' },
  { label: '母公司背景', value: '莒纳科技 · 宁德时代战投 · 融资1.5亿' },
  { label: '年产能', value: '300 MW（碱液200MW + PEM 100MW）' },
  { label: '年产值', value: '2.4 亿元' },
  { label: '厂房面积', value: '4000 平方米' },
  { label: '团队规模', value: '25 人' },
]

const honors = [
  { icon: '🏆', title: '国家能源局第四批首台（套）重大技术装备入围', issuer: '国家能源局', highlight: '国家级' },
  { icon: '⭐', title: '上海市专精特新中小企业', issuer: '上海市经济和信息化委员会', highlight: '省级' },
  { icon: '🚀', title: '四川省重大技术装备首台套认定', issuer: '四川省经济和信息化厅', highlight: '省级' },
  { icon: '🌟', title: '安永-复旦最具潜力企业', issuer: '安永 × 复旦大学', highlight: '行业荣誉' },
]

const timeline = [
  { year: '约2024年', title: '公司成立', desc: '成都数智氢芯科技正式成立，与莒纳科技建立战略合作关系' },
  { year: '2024年', title: '氢健康独家代理权', desc: '获得莒纳品牌PEM膜电极在氢健康领域的唯一排他代理权（授权至2029年）' },
  { year: '2025年', title: '工业客户拓展', desc: '与派瑞氢能、东方电气、天津大陆等头部企业建立合作' },
  { year: '2026年5月', title: '正式授权生效', desc: '莒纳PEM膜电极氢健康唯一排他代理授权正式生效（2026.5.1~2029.4.30）' },
  { year: '2026年7月', title: '氢健康产品上线', desc: '富氢水杯重磅上市，基于莒纳SPE电解技术，氢氧完全分离' },
]
</script>

<template>
  <!-- Hero -->
  <section class="relative py-20 overflow-hidden">
    <div class="absolute inset-0 bg-hero-gradient opacity-80"></div>
    <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(rgba(0,150,214,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,150,214,0.3) 1px, transparent 1px); background-size: 60px 60px;"></div>
    <div class="h2-container relative z-10 text-center">
      <div class="inline-flex items-center gap-2 bg-h2-500/15 border border-h2-500/30 rounded-full px-4 py-1.5 mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-h2-400"></span>
        <span class="text-h2-300 text-xs font-medium tracking-wider">APPLICATION CASES</span>
      </div>
      <h1 class="text-4xl md:text-6xl font-black text-white mb-4">应用案例</h1>
      <p class="text-white/50 text-lg max-w-2xl mx-auto">从工业绿氢到氢健康，多场景应用验证</p>
    </div>
  </section>

  <!-- Featured Case -->
  <section class="h2-section pt-0">
    <div class="h2-container">
      <div class="text-center mb-10">
        <div class="h2-title-bar justify-center">
          <span class="h2-dot"></span>
          <span class="h2-section-label">标杆案例</span>
          <span class="h2-dot"></span>
        </div>
        <h2 class="h2-section-title mt-3">某央企离网制氢项目</h2>
      </div>

      <div class="h2-card p-8 md:p-12 mb-12">
        <div class="flex flex-col md:flex-row gap-8 mb-8">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-4 flex-wrap">
              <span class="h2-tag">⭐ 标杆案例</span>
              <span class="h2-tag">JA 系列</span>
              <span class="h2-tag">碱性电解槽</span>
              <span class="h2-tag">离网制氢</span>
            </div>
            <h3 class="text-2xl font-black text-white mb-4">12 MW 光伏+风电离网制氢项目</h3>
            <p class="text-white/50 text-sm leading-relaxed mb-6">
              为某大型央企提供绿氢电极材料，配套国内知名国企电解槽供应商，用于光伏+风电离网制氢场景，
              所产氢气供给交通领域（氢能源重卡/物流），实现绿色能源闭环。
            </p>
          </div>
          <div class="md:w-64 flex-shrink-0">
            <div class="bg-white/[0.04] border border-white/10 rounded-2xl p-6 text-center">
              <div class="text-h2-300 font-black text-5xl mb-2">12 MW</div>
              <div class="text-xs text-white/40">项目规模</div>
              <div class="mt-4 space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-white/40">电解槽</span>
                  <span class="text-white/70">3×4 MW</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-white/40">电流密度</span>
                  <span class="text-white/70">~4000 A/m²</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-white/40">直流能耗</span>
                  <span class="text-h2-300 font-bold">≤4.1 kWh/Nm³</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Project info table -->
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <tbody>
              <tr v-for="(row, i) in caseInfo" :key="i" :class="['border-b border-white/5', i === caseInfo.length - 1 ? 'border-0' : '']">
                <td class="py-3 pr-6 text-white/40 w-32">{{ row.label }}</td>
                <td class="py-3 text-white/80 font-medium">{{ row.value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- Customer List -->
  <section class="h2-section bg-[#000d1a]/60">
    <div class="h2-container">
      <div class="text-center mb-12">
        <div class="h2-title-bar justify-center">
          <span class="h2-dot"></span>
          <span class="h2-section-label">合作伙伴</span>
          <span class="h2-dot"></span>
        </div>
        <h2 class="h2-section-title mt-3">服务全球绿氢头部客户</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <!-- Domestic -->
        <div class="h2-card p-8">
          <div class="flex items-center gap-2 mb-6">
            <span class="text-2xl">🇨🇳</span>
            <h3 class="text-lg font-bold text-white">国内市场</h3>
            <span class="h2-tag ml-auto">6 家头部客户</span>
          </div>
          <div class="space-y-3">
            <div v-for="c in domestic" :key="c.name" class="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/8 hover:border-h2-500/20 transition-all">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-h2-500/20 flex items-center justify-center text-sm">🏭</div>
                <div>
                  <div class="text-sm font-medium text-white">{{ c.name }}</div>
                  <div class="text-[10px] text-white/40">{{ c.area }}</div>
                </div>
              </div>
              <div class="flex gap-1.5">
                <span v-for="t in c.tech" :key="t" class="text-[9px] bg-white/[0.04] text-white/40 px-2 py-0.5 rounded">{{ t }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- International -->
        <div class="h2-card p-8">
          <div class="flex items-center gap-2 mb-6">
            <span class="text-2xl">🌏</span>
            <h3 class="text-lg font-bold text-white">国际市场</h3>
            <span class="h2-tag ml-auto">6 家国际巨头</span>
          </div>
          <div class="space-y-3">
            <div v-for="c in international" :key="c.name" class="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/8 hover:border-h2-500/20 transition-all">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-h2-500/20 flex items-center justify-center text-sm">🌍</div>
                <div>
                  <div class="text-sm font-medium text-white">{{ c.name }}</div>
                  <div class="text-[10px] text-white/40">{{ c.country }}</div>
                </div>
              </div>
              <div class="flex gap-1.5">
                <span v-for="t in c.tech" :key="t" class="text-[9px] bg-white/[0.04] text-white/40 px-2 py-0.5 rounded">{{ t }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const caseInfo = [
  { label: '项目业主', value: '某大型央企' },
  { label: '电解槽供应商', value: '国内知名国企电解槽供应商' },
  { label: '项目规模', value: '3 × 4 MW（合计 12 MW）' },
  { label: '应用场景', value: '光伏+风电离网制氢 → 交通领域（氢能源重卡/物流）' },
  { label: '使用产品', value: '莒纳阳极电极（直纹镍网基材）' },
  { label: '额定电流密度', value: '~4000 A/m²' },
  { label: '直流能耗', value: '≤ 4.1 kWh/Nm³（优于行业平均）' },
]

const domestic = [
  { name: '派瑞氢能', area: '河北', tech: ['ALK', 'PEM'] },
  { name: '天津大陆', area: '江苏', tech: ['ALK'] },
  { name: '上海电气', area: '上海', tech: ['ALK', 'PEM'] },
  { name: '东方电气', area: '四川', tech: ['ALK', 'PEM'] },
  { name: '中电丰业', area: '北京', tech: ['ALK', 'PEM'] },
  { name: '舜华新能源', area: '上海', tech: ['ALK', 'AEM'] },
]

const international = [
  { name: 'Nel ASA', country: '挪威', tech: ['ALK', 'PEM'] },
  { name: '西门子能源', country: '德国', tech: ['PEM'] },
  { name: 'ITM Power', country: '英国', tech: ['PEM'] },
  { name: '康明斯/Hydrogenics', country: '美国', tech: ['ALK', 'PEM'] },
  { name: '普拉格 Plug Power', country: '美国', tech: ['PEM'] },
  { name: '蒂森克虏伯新纪元', country: '德国', tech: ['ALK'] },
]
</script>

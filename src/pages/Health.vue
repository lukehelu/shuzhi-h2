<template>
  <!-- Hero -->
  <section class="relative py-20 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-h2-900 via-[#00142b] to-[#00142b]"></div>
    <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 30% 50%, #0096d6 0%, transparent 50%), radial-gradient(circle at 70% 30%, #1ab7ff 0%, transparent 40%);"></div>
    <div class="h2-container relative z-10 text-center">
      <div class="inline-flex items-center gap-2 bg-h2-500/15 border border-h2-500/30 rounded-full px-4 py-1.5 mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-h2-400 animate-pulse"></span>
        <span class="text-h2-300 text-xs font-medium tracking-wider">⭐ 即将上线 · 2026年7月</span>
      </div>
      <h1 class="text-4xl md:text-6xl font-black text-white mb-4">氢健康产业</h1>
      <p class="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
        基于莒纳 PEM 膜电极技术，<br/>
        向氢健康民用市场延伸，守护亿万家庭健康
      </p>
      <div class="mt-8">
        <span class="inline-flex items-center gap-2 bg-h2-500/20 border border-h2-500/30 text-h2-300 text-sm px-6 py-2.5 rounded-full font-medium">
          🎖️ 莒纳氢健康产业 <strong>唯一排他代理商</strong>
        </span>
      </div>
    </div>
  </section>

  <!-- Authorization -->
  <section class="h2-section pt-0">
    <div class="h2-container">
      <!-- Authorization Banner -->
      <div class="h2-card p-8 mb-10 bg-gradient-to-r from-h2-600/20 to-h2-500/10 border-h2-500/30">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <div class="text-center md:text-left flex-1">
            <div class="text-h2-400 text-xs font-medium tracking-widest mb-3">官方授权证明</div>
            <h2 class="text-2xl font-black text-white mb-3">莒纳氢健康产业唯一排他代理商</h2>
            <p class="text-white/50 text-sm leading-relaxed">
              授权方：成都莒纳新材料科技有限公司<br/>
              被授权方：成都数智氢芯科技有限公司<br/>
              授权范围：莒纳品牌PEM膜电极在氢健康领域的唯一排他代理
            </p>
          </div>
          <div class="text-center bg-white/[0.05] border border-white/10 rounded-2xl p-6 min-w-[200px]">
            <div class="text-[10px] text-white/40 mb-2">授权有效期</div>
            <div class="text-h2-300 font-black text-xl mb-1">2026.5.1</div>
            <div class="text-white/30 text-xs mb-2">至</div>
            <div class="text-h2-300 font-black text-xl mb-3">2029.4.30</div>
            <span class="h2-tag">3年授权期</span>
          </div>
        </div>
      </div>

      <!-- Strategic Background -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div>
          <div class="h2-title-bar mb-4">
            <span class="h2-dot"></span>
            <span class="h2-section-label">战略背景</span>
          </div>
          <h2 class="text-2xl font-bold text-white mb-4">技术下沉民用市场</h2>
          <div class="space-y-3">
            <p class="text-white/50 text-sm leading-relaxed">
              氢气具有优异的<strong class="text-white/70">抗氧化、抗炎症</strong>生物学效应，在日本、韩国、欧美等地区已被广泛应用于健康管理、康复辅助等领域。
            </p>
            <p class="text-white/50 text-sm leading-relaxed">
              数智氢芯依托莒纳科技的<strong class="text-white/70">PEM膜电极</strong>技术（阴极低铂、阳极低铱，低成本、高一致性、强结合力），
              向下延伸至氢健康民用市场，将工业级技术转化为家庭级健康产品。
            </p>
            <p class="text-white/50 text-sm leading-relaxed">
              技术支撑：4500h+工业验证，氢健康电解槽内<strong class="text-h2-300">3000小时以上</strong>运行验证，
              衰减率 &lt;10μV/h，远超民用标准要求。
            </p>
          </div>
        </div>

        <!-- Target Scenarios -->
        <div>
          <div class="h2-title-bar mb-4">
            <span class="h2-dot"></span>
            <span class="h2-section-label">目标场景</span>
          </div>
          <h2 class="text-2xl font-bold text-white mb-4">三大战略方向</h2>
          <div class="space-y-4">
            <div v-for="s in scenarios" :key="s.title" class="h2-card p-5 flex gap-4">
              <div class="text-3xl shrink-0">{{ s.icon }}</div>
              <div>
                <h4 class="text-white font-semibold text-sm mb-1">{{ s.title }}</h4>
                <p class="text-xs text-white/40 leading-relaxed">{{ s.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PEM Cup Preview -->
  <section class="h2-section bg-[#000d1a]/60">
    <div class="h2-container">
      <div class="text-center mb-10">
        <div class="h2-title-bar justify-center">
          <span class="h2-dot"></span>
          <span class="h2-section-label">首款产品预告</span>
          <span class="h2-dot"></span>
        </div>
        <h2 class="h2-section-title mt-3">富氢水杯 · 本月底重磅上市</h2>
        <p class="h2-section-subtitle mx-auto text-center">基于莒纳 SPE 电解技术，氢氧完全分离</p>
      </div>

      <div class="max-w-3xl mx-auto">
        <div class="h2-card p-8 md:p-12 text-center relative overflow-hidden">
          <!-- Decorative background -->
          <div class="absolute inset-0 opacity-10" style="background: radial-gradient(circle at 50% 50%, rgba(0,150,214,0.5), transparent 70%);"></div>
          <div class="relative">
            <!-- Product visual placeholder -->
            <div class="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500/20 to-h2-600/10 border border-h2-500/20 flex items-center justify-center">
              <span class="text-6xl">💧</span>
            </div>

            <div class="inline-flex items-center gap-2 bg-h2-500/15 border border-h2-500/30 rounded-full px-4 py-1.5 mb-6">
              <span class="w-1.5 h-1.5 rounded-full bg-h2-400 animate-pulse"></span>
              <span class="text-h2-300 text-xs font-medium">2026年7月底上市 · 产品图即将发布</span>
            </div>

            <h3 class="text-2xl font-black text-white mb-4">PEM 富氢水杯</h3>
            <p class="text-white/50 text-sm max-w-md mx-auto mb-8">
              采用莒纳 PEM 膜电极技术，SPE 电解，氢氧完全分离，
              生成高浓度富氢水，适用于家庭、办公、旅行等多场景。
            </p>

            <!-- Features preview -->
            <div class="grid grid-cols-3 gap-4 mb-8">
              <div class="bg-white/[0.04] border border-white/8 rounded-xl p-4 text-center">
                <div class="text-2xl mb-2">⚡</div>
                <div class="text-xs text-white/50">SPE 电解</div>
                <div class="text-xs text-white/40 mt-0.5">氢氧完全分离</div>
              </div>
              <div class="bg-white/[0.04] border border-white/8 rounded-xl p-4 text-center">
                <div class="text-2xl mb-2">🏭</div>
                <div class="text-xs text-white/50">工业级电极</div>
                <div class="text-xs text-white/40 mt-0.5">3000h+ 验证</div>
              </div>
              <div class="bg-white/[0.04] border border-white/8 rounded-xl p-4 text-center">
                <div class="text-2xl mb-2">🎖️</div>
                <div class="text-xs text-white/50">唯一排他</div>
                <div class="text-xs text-white/40 mt-0.5">莒纳授权</div>
              </div>
            </div>

            <div class="text-xs text-white/30 mb-4">规格参数与价格将于上市时公布</div>
            <router-link to="/contact" class="h2-btn-primary px-8 py-3">
              咨询代理合作
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PEM Tech Advantages for Health -->
  <section class="h2-section">
    <div class="h2-container">
      <div class="text-center mb-10">
        <div class="h2-title-bar justify-center">
          <span class="h2-dot"></span>
          <span class="h2-section-label">技术优势</span>
          <span class="h2-dot"></span>
        </div>
        <h2 class="h2-section-title mt-3">为什么 PEM 膜电极适合氢健康？</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="adv in pemAdvantages" :key="adv.title" class="h2-card p-6 flex gap-4">
          <div class="w-12 h-12 rounded-xl bg-h2-500/20 border border-h2-500/30 flex items-center justify-center text-2xl shrink-0">{{ adv.icon }}</div>
          <div>
            <h4 class="text-white font-bold text-sm mb-2">{{ adv.title }}</h4>
            <p class="text-xs text-white/40 leading-relaxed">{{ adv.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const scenarios = [
  { icon: '🏨', title: '酒店康养', desc: '与假日酒店等战略伙伴合作，为酒店客房引入富氢水服务，打造差异化健康体验场景。' },
  { icon: '🏥', title: '医疗辅助', desc: '基于氢气的抗氧化、抗炎症生物学效应，面向健康管理机构提供设备与技术支撑。' },
  { icon: '🏠', title: '家庭健康管理', desc: '家用富氢水杯等终端产品即将上市，将工业级 PEM 技术带入千家万户。' },
]

const pemAdvantages = [
  { icon: '🔬', title: '氢氧完全分离', desc: 'PEM技术实现电解过程中氢气与氧气的完全物理隔离，产氢纯度更高，避免混入氧气，适合直接饮用。' },
  { icon: '💪', title: '3000h+ 真实验证', desc: '在真实氢健康电解槽内验证超过3000小时，远超民用产品寿命要求，可靠性有据可查。' },
  { icon: '📉', title: '低成本量产', desc: '阴极低铂、阳极低铱，贵金属载量大幅降低，使民用产品定价更具竞争力。' },
  { icon: '✅', title: '强结合力·低衰减', desc: '膜电极催化剂不易脱落，长期运行衰减率<10μV/h，确保每次饮用的富氢水浓度稳定。' },
  { icon: '🌡️', title: '宽温域运行', desc: '工作温度范围RT~65°C，适配家用环境（5°C~40°C），四季可用。' },
  { icon: '🔒', title: '唯一排他代理权', desc: '莒纳氢健康产业唯一排他代理（授权至2029年），区域独家，市场保护明确。' },
]
</script>

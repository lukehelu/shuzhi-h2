<template>
  <!-- Hero -->
  <section class="relative py-20 overflow-hidden">
    <div class="absolute inset-0 bg-hero-gradient opacity-80"></div>
    <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(rgba(0,150,214,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,150,214,0.3) 1px, transparent 1px); background-size: 60px 60px;"></div>
    <div class="h2-container relative z-10 text-center">
      <div class="inline-flex items-center gap-2 bg-h2-500/15 border border-h2-500/30 rounded-full px-4 py-1.5 mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-h2-400"></span>
        <span class="text-h2-300 text-xs font-medium tracking-wider">TECHNOLOGY</span>
      </div>
      <h1 class="text-4xl md:text-6xl font-black text-white mb-4">技术实力</h1>
      <p class="text-white/50 text-lg max-w-2xl mx-auto">全自主知识产权 · 突破卡脖子技术 · 三大核心工艺</p>
    </div>
  </section>

  <!-- Catalyst -->
  <section class="h2-section pt-0">
    <div class="h2-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div class="h2-title-bar mb-4">
            <span class="h2-dot"></span>
            <span class="h2-section-label">核心材料</span>
          </div>
          <h2 class="text-3xl font-bold text-white mb-4">自研催化剂</h2>
          <p class="text-white/50 text-sm leading-relaxed mb-6">
            突破卡脖子技术，实现核心材料自主可控。催化剂纳米颗粒均匀分散，规模化量产已实现，性能优于商用催化剂。
          </p>

          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="h2-card p-4 text-center">
              <div class="text-2xl font-black text-h2-300">0.227 μm</div>
              <div class="text-[10px] text-white/40 mt-1">D50 粒径中值</div>
            </div>
            <div class="h2-card p-4 text-center">
              <div class="text-2xl font-black text-h2-300">&lt;0.9 μm</div>
              <div class="text-[10px] text-white/40 mt-1">D90 粒径</div>
            </div>
          </div>

          <!-- Catalyst comparison -->
          <div class="bg-white/[0.03] border border-white/8 rounded-xl p-5">
            <div class="text-h2-400 text-xs font-medium tracking-widest mb-4">自研 vs 商用催化剂（@ 2.0A/cm²）</div>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs text-white/50">自研催化剂</span>
                <div class="flex items-center gap-3">
                  <span class="text-h2-300 font-bold">1.74V</span>
                  <span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">✅ 更优</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-xs text-white/50">商用催化剂</span>
                <span class="text-white/60 font-medium">1.77V</span>
              </div>
            </div>
            <div class="mt-3 pt-3 border-t border-white/8 text-center">
              <span class="text-xs text-white/40">槽压降低 <strong class="text-h2-300">0.03V</strong>，按1000Nm³/h电解槽10年运行可节省可观能耗</span>
            </div>
          </div>
        </div>

        <!-- Process -->
        <div>
          <div class="h2-title-bar mb-4">
            <span class="h2-dot"></span>
            <span class="h2-section-label">核心工艺</span>
          </div>
          <h2 class="text-3xl font-bold text-white mb-4">三大工艺体系</h2>
          <p class="text-white/50 text-sm leading-relaxed mb-6">
            数字孪生验证，P1-P3全流程数字化验证完成，覆盖从催化剂到电极的全链条工艺控制。
          </p>

          <div class="space-y-4">
            <div v-for="(proc, i) in processes" :key="proc.name" class="h2-card p-5">
              <div class="flex items-center gap-4 mb-3">
                <div class="w-10 h-10 rounded-xl bg-h2-500/20 border border-h2-500/30 flex items-center justify-center text-h2-300 font-black text-sm shrink-0">{{ i + 1 }}</div>
                <div>
                  <h4 class="text-white font-bold text-sm">{{ proc.name }}</h4>
                  <span class="text-h2-400 text-xs">{{ proc.en }}</span>
                </div>
              </div>
              <p class="text-xs text-white/50 leading-relaxed">{{ proc.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Comparison -->
  <section class="h2-section bg-[#000d1a]/60">
    <div class="h2-container">
      <div class="text-center mb-10">
        <div class="h2-title-bar justify-center">
          <span class="h2-dot"></span>
          <span class="h2-section-label">工艺对比</span>
          <span class="h2-dot"></span>
        </div>
        <h2 class="h2-section-title mt-3">为什么选择原位生长+电沉积？</h2>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-white/10">
              <th class="text-left py-3 px-4 text-white/40 font-medium text-xs">对比维度</th>
              <th class="text-center py-3 px-4 text-h2-300 font-bold text-xs">莒纳方案<br/><span class="font-normal text-white/40">原位生长+电沉积</span></th>
              <th class="text-center py-3 px-4 text-white/40 font-medium text-xs">传统热喷涂</th>
            </tr>
          </thead>
          <tbody class="text-white/60">
            <tr v-for="row in compareTable" :key="row.dim" class="border-b border-white/5 hover:bg-white/[0.01]">
              <td class="py-3 px-4 font-medium text-white/70">{{ row.dim }}</td>
              <td class="py-3 px-4 text-center text-h2-300 font-medium">{{ row.good }}</td>
              <td class="py-3 px-4 text-center text-white/40">{{ row.old }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Digital Factory -->
  <section class="h2-section">
    <div class="h2-container">
      <div class="text-center mb-10">
        <div class="h2-title-bar justify-center">
          <span class="h2-dot"></span>
          <span class="h2-section-label">数字化工厂</span>
          <span class="h2-dot"></span>
        </div>
        <h2 class="h2-section-title mt-3">年产 300 MW · 数字化标杆</h2>
        <p class="h2-section-subtitle mx-auto text-center">4000㎡厂房，全流程自主设备，批量化稳定生产</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div v-for="f in factory" :key="f.label" class="h2-card p-4 text-center">
          <div class="text-xl font-black text-h2-300 mb-1">{{ f.value }}</div>
          <div class="text-[10px] text-white/40 leading-tight">{{ f.label }}</div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="eq in equipment" :key="eq.name" class="bg-white/[0.03] border border-white/8 rounded-xl p-5">
          <div class="text-h2-400 font-bold text-sm mb-2">{{ eq.name }}</div>
          <p class="text-xs text-white/40 leading-relaxed">{{ eq.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const processes = [
  {
    name: '原位生长',
    en: 'In-situ Growth',
    desc: '催化剂在基材上原位生长，一体化成型。行业里程碑式突破，结合力远超热喷涂工艺，催化活性优异，衰减极低。适用于泡沫镍、编织镍网、拉伸网等多种基材。'
  },
  {
    name: '电沉积',
    en: 'Electrodeposition',
    desc: '精确控制催化剂负载量和分布，实现纳米尺度均匀分散。可针对不同电流密度需求定制催化剂分布方案，适合批量稳定生产。'
  },
  {
    name: '涂布/转印',
    en: 'Coating / Transfer',
    desc: '工业级精密涂布，配合定制化质子交换膜，批量化稳定生产。转印工艺确保催化剂与膜的均匀复合，适合PEM/AEM膜电极规模化制造。'
  },
]

const compareTable = [
  { dim: '超声失重率', good: '0.32%', old: '0.82%~1.12%' },
  { dim: '催化剂结合力', good: '一体化成型，强', old: '热熔覆，易脱落' },
  { dim: '衰减率', good: '<3 μV/h（行业领先）', old: '较高' },
  { dim: '催化剂分散', good: '纳米级均匀分散', old: '分布不均' },
  { dim: '量产一致性', good: '高（数字工厂）', old: '波动较大' },
  { dim: '适用基材', good: '泡沫镍/镍网/拉伸网等', old: '受限' },
]

const factory = [
  { value: '300 MW', label: '年产能' },
  { value: '2.4 亿', label: '年产值（元）' },
  { value: '4000 M²', label: '厂房面积' },
  { value: '25 人', label: '团队规模' },
  { value: 'P1~P3', label: '全流程数字化' },
  { value: '全自主', label: '核心设备' },
]

const equipment = [
  { name: '制浆设备', desc: '自主设计，精确控制浆料粘度与催化剂分散度，确保批次一致性。' },
  { name: '转印设备', desc: '自主设计，应用于碱性电极原位生长工艺后的精密转印，夹具适配多种规格基材。' },
  { name: '涂布设备', desc: '工业级精密涂布，支持PEM/AEM膜电极批量化生产，厚度均匀性行业领先。' },
]
</script>

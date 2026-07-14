<template>
  <!-- Hero -->
  <section class="relative py-20 overflow-hidden">
    <div class="absolute inset-0 bg-hero-gradient opacity-80"></div>
    <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(rgba(0,150,214,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,150,214,0.3) 1px, transparent 1px); background-size: 60px 60px;"></div>
    <div class="h2-container relative z-10 text-center">
      <div class="inline-flex items-center gap-2 bg-h2-500/15 border border-h2-500/30 rounded-full px-4 py-1.5 mb-6">
        <span class="w-1.5 h-1.5 rounded-full bg-h2-400"></span>
        <span class="text-h2-300 text-xs font-medium tracking-wider">CONTACT US</span>
      </div>
      <h1 class="text-4xl md:text-6xl font-black text-white mb-4">联系我们</h1>
      <p class="text-white/50 text-lg max-w-2xl mx-auto">无论您是绿氢行业采购商、代理商还是氢健康产业合作伙伴，欢迎与我们取得联系。</p>
    </div>
  </section>

  <!-- Main Content -->
  <section class="h2-section pt-0">
    <div class="h2-container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div>
          <div class="h2-title-bar mb-6">
            <span class="h2-dot"></span>
            <span class="h2-section-label">联系方式</span>
          </div>
          <h2 class="text-2xl font-bold text-white mb-6">期待与您建立合作</h2>

          <div class="space-y-4 mb-8">
            <div class="h2-card p-5 flex gap-4 items-start">
              <div class="w-10 h-10 rounded-xl bg-h2-500/20 border border-h2-500/30 flex items-center justify-center text-h2-300 shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
              </div>
              <div>
                <div class="text-white font-semibold text-sm mb-1">公司地址</div>
                <div class="text-white/50 text-sm">成都市高新区天祥广场B座2613</div>
              </div>
            </div>

            <div class="h2-card p-5 flex gap-4 items-start">
              <div class="w-10 h-10 rounded-xl bg-h2-500/20 border border-h2-500/30 flex items-center justify-center text-h2-300 shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <div class="text-white font-semibold text-sm mb-1">商务合作</div>
                <div class="text-white/50 text-sm">绿氢电极材料采购 · 定制化合作 · 代理咨询</div>
              </div>
            </div>

            <div class="h2-card p-5 flex gap-4 items-start">
              <div class="w-10 h-10 rounded-xl bg-h2-500/20 border border-h2-500/30 flex items-center justify-center text-h2-300 shrink-0">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <div class="text-white font-semibold text-sm mb-1">联系说明</div>
                <div class="text-white/50 text-sm">商务合作请详细说明公司名称、合作意向及联系方式，我们将在2个工作日内回复。</div>
              </div>
            </div>
          </div>

          <!-- Map placeholder -->
          <div class="h2-card overflow-hidden p-0 h-[240px] bg-gradient-to-br from-[#003455] to-[#00142b] relative">
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <div class="text-4xl mb-3">📍</div>
              <div class="text-white font-bold text-sm mb-1">成都市高新区</div>
              <div class="text-white/40 text-xs">天祥广场B座2613</div>
              <div class="mt-4 text-[10px] text-white/25 max-w-[200px] leading-relaxed">
                （地图功能待集成，可通过上方地址导航前往）
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <div class="h2-title-bar mb-6">
            <span class="h2-dot"></span>
            <span class="h2-section-label">在线留言</span>
          </div>
          <h2 class="text-2xl font-bold text-white mb-6">发送咨询</h2>

          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label class="block text-xs text-white/50 mb-2">您的姓名 <span class="text-h2-400">*</span></label>
              <input v-model="form.name" type="text" required placeholder="请输入姓名" class="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-h2-500 transition-colors" />
            </div>

            <div>
              <label class="block text-xs text-white/50 mb-2">公司名称</label>
              <input v-model="form.company" type="text" placeholder="请输入公司名称（选填）" class="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-h2-500 transition-colors" />
            </div>

            <div>
              <label class="block text-xs text-white/50 mb-2">联系电话</label>
              <input v-model="form.phone" type="tel" placeholder="请输入联系电话（选填）" class="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-h2-500 transition-colors" />
            </div>

            <div>
              <label class="block text-xs text-white/50 mb-2">咨询类型 <span class="text-h2-400">*</span></label>
              <div class="grid grid-cols-2 gap-2">
                <button v-for="t in types" :key="t" type="button" @click="form.type = t"
                  :class="['px-4 py-2.5 rounded-xl text-xs font-medium transition-all border', form.type === t ? 'bg-h2-500/20 border-h2-500/50 text-h2-300' : 'bg-white/[0.03] border-white/10 text-white/50 hover:border-white/20']">
                  {{ t }}
                </button>
              </div>
            </div>

            <div>
              <label class="block text-xs text-white/50 mb-2">留言内容 <span class="text-h2-400">*</span></label>
              <textarea v-model="form.message" required rows="5" placeholder="请详细描述您的需求或问题，我们会尽快回复您……" class="w-full bg-white/[0.05] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-h2-500 transition-colors resize-none"></textarea>
            </div>

            <button type="submit" :disabled="submitted" class="w-full h2-btn-primary justify-center text-base py-3.5 disabled:opacity-60 disabled:cursor-not-allowed">
              <template v-if="submitted">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                已提交！感谢您的留言
              </template>
              <template v-else>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                提交咨询
              </template>
            </button>

            <p class="text-xs text-white/25 text-center">我们将在2个工作日内通过邮件/电话回复您的咨询</p>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Cooperation Types -->
  <section class="h2-section bg-[#000d1a]/60">
    <div class="h2-container">
      <div class="text-center mb-10">
        <div class="h2-title-bar justify-center">
          <span class="h2-dot"></span>
          <span class="h2-section-label">合作模式</span>
          <span class="h2-dot"></span>
        </div>
        <h2 class="h2-section-title mt-3">多种合作方式，灵活适配</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="c in cooperation" :key="c.title" class="h2-card p-5 text-center">
          <div class="text-3xl mb-3">{{ c.icon }}</div>
          <h4 class="text-white font-bold text-sm mb-2">{{ c.title }}</h4>
          <p class="text-xs text-white/40 leading-relaxed">{{ c.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const types = ['电极材料采购', '定制化合作', '氢健康代理', '技术咨询', '其他']

const form = reactive({
  name: '',
  company: '',
  phone: '',
  type: '电极材料采购',
  message: '',
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  // In production, this would send to a backend API
  setTimeout(() => {
    submitted.value = false
    form.name = ''
    form.company = ''
    form.phone = ''
    form.type = '电极材料采购'
    form.message = ''
  }, 5000)
}

const cooperation = [
  { icon: '📦', title: '电极材料采购', desc: '采购莒纳JA/JP/JE系列电极材料，标准型号或定制规格，支持批量订单。' },
  { icon: '🔧', title: '定制化合作', desc: '根据电解槽规格定制电极尺寸、基材、催化剂配方，全流程技术支持。' },
  { icon: '🤝', title: '氢健康代理', desc: '富氢水杯等氢健康产品区域独家代理，莒纳官方授权，市场保护完善。' },
  { icon: '💬', title: '技术咨询', desc: '电解槽选型建议、参数对比、技术评估，免费提供专业建议。' },
]
</script>

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/Home.vue'), meta: { title: '首页' } },
  { path: '/about', component: () => import('@/pages/About.vue'), meta: { title: '关于我们' } },
  { path: '/products', component: () => import('@/pages/Products.vue'), meta: { title: '产品中心' } },
  { path: '/technology', component: () => import('@/pages/Technology.vue'), meta: { title: '技术实力' } },
  { path: '/data', component: () => import('@/pages/Data.vue'), meta: { title: '测试数据' } },
  { path: '/cases', component: () => import('@/pages/Cases.vue'), meta: { title: '应用案例' } },
  { path: '/health', component: () => import('@/pages/Health.vue'), meta: { title: '氢健康' } },
  { path: '/contact', component: () => import('@/pages/Contact.vue'), meta: { title: '联系我们' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title + ' — 成都数智氢芯科技'
})

export default router

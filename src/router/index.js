import { createRouter, createWebHistory } from 'vue-router'
import { usePreloaderStore } from '../stores/preloader'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/showcase',
    name: 'showcase',
    component: () => import('../views/ShowcaseView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const preloaderStore = usePreloaderStore()

  if (!preloaderStore.hasLoadedOnce) {
    preloaderStore.setLoading(true)
  } else {
    preloaderStore.setLoading(false)
  }

  next()
})

router.afterEach(() => {
  const preloaderStore = usePreloaderStore()
  preloaderStore.setLoading(false)
  preloaderStore.setLoadedOnce(true)
})

export default router

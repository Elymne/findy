import HomeView from '@/ui/pages/home/HomePage.vue'
import TestPage from '@/ui/pages/test/TestPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test',
      name: 'test',
      component: TestPage,
    },
  ],
})

export default router

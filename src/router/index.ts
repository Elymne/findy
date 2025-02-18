import HomePage from '@/ui/pages/home/HomePage.vue'
import OffersPage from '@/ui/pages/offers/OffersPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/offers',
      name: 'offers',
      component: OffersPage,
    },
  ],
})

export default router

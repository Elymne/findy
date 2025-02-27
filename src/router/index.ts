import HomePage from '@/ui/pages/home/HomePage.vue'
import OfferPage from '@/ui/pages/offer/OfferPage.vue'
import OffersPage from '@/ui/pages/offers/OffersPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/offers',
      component: OffersPage,
    },
    {
      path: '/offers/:id',
      component: OfferPage,
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/regPage',
      name: 'regPage',
      component: () => import('../views/RegPage.vue')
    }
    ,
    {
      path: '/mainPage',
      name: 'mainPage',
      component: () => import('../views/MainPage.vue')
    }
  ]
})

export default router

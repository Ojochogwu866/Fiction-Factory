import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
    path: '/work',
    name: 'Work',
    component: () => import('../views/Work.vue'),
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: () => import('../views/Blog.vue')
    },
    {
      path: '/get-matched',
      name: 'getMatched',
      component: () => import('../views/Profile.vue')
    }
  ]
})

export default router

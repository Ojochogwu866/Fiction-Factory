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
      component: () => import('../views/Profile.vue'),

    },
                {
      path: '/view-profile',
      name: 'ViewProfile',
      component: () => import('../views/ViewProfile.vue'),
      redirect:'/work-history',
      children: [
      {
        path: '/work-history',
        name: 'WorkHistory',
        component: () => import('../views/WorkSamples.vue') 
    },
      {
        path: '/previous-experience',
        name: 'previousExperience',
        component: () => import('../views/previousExperience.vue') 
    }
      ]
    },
    {
      path: '/Contact',
      name: 'Contact Us',
      component: () => import('../views/Contact.vue')
    },
    {
            path: '/purchase-manuscript',
      name: 'purchase-manuscript',
      component: () => import('../views/Cart-manuscript.vue'),
    },
        {
            path: '/purchase-published',
      name: 'purchase-published',
      component: () => import('../views/Cart-published.vue'),
    },
     {
          path: '/buy',
        name: 'Buy',
        component: () => import('../views/Buy.vue')
        },
    {
      path: '/testimonials',
      name: 'Testimonials',
      component: () => import('../views/Testimonials.vue')
    },
    {
    path: '/auth',
    component: () => import('../components/Auth.vue'),
    redirect: {
      name: 'Login',
    },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('../views/Register.vue'),
      },
    ],
  },
  ]
})

export default router

// import router functions
import { createRouter, createWebHistory } from 'vue-router'

// setup routes
export const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/components/views/HomeView.vue')
      },
      {
        path: '/user',
        name: 'Users',
        component: () => import('@/components/login/Login.vue')
      },

    ]
  })
  
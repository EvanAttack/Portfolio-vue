import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/myavatar',
      name: 'myavatar',
      component: () => import('../views/MyAvatarView.vue')
    },
    {
      path: '/animeCritik',
      name: 'animeCritik',
      component: () => import('../views/AnimeCritikView.vue')
    },
    {
      path: '/NDI',
      name: 'ndi',
      component: () => import('../views/NdiView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router

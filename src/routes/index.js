import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/',component: () => import('../views/Home.vue') },
  { path: '/privacy-policy', component: () => import('../views/PrivacyPolicy.vue') },
  { path: '/user-agreement', component: () => import('../views/UserAgreement.vue') },
  { path : '/login', component : () => import('../views/Login.vue') },
  { path : '/profile/:id', name : "Profile",component : () => import('../views/Profile.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
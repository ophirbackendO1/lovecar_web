import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/',component: () => import('../views/Home.vue') },
  { path: '/blog',component: () => import('../views/Blog.vue') },
  { path: '/about-us',component: () => import('../views/AboutUs.vue') },
  { path: '/privacy-policy', component: () => import('../views/PrivacyPolicy.vue') },
  { path: '/user-agreement', component: () => import('../views/UserAgreement.vue') },
  { path : '/account_delete', component: () => import('../views/AccountDelete.vue') },
  { path : '/account_confirm/:id/:email/:phone/:image', name : 'AccountConfirm' , component: () => import('../views/AccountConfirm.vue'), props : true },
  { path : '/account_delete_success', component: () => import('../views/AccountDeleteSuccess.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
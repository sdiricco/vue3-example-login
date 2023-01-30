/*****************************************************************************/
/* Imports */
/*****************************************************************************/
import { createRouter, createWebHashHistory } from 'vue-router'

//page import
import LoginPage from '@/views/LoginPage.vue'
import HomePage from '@/views/HomePage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import DashboardPage from '@/views/DashboardPage.vue'
import {useAuthenticationStore} from "@/store/authentication"

/*****************************************************************************/
/* Router */
/*****************************************************************************/
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
      meta: { requiresAuth: true },
      redirect: '/home/dashboard',
      children: [
        {
          path: "dashboard",
          component: DashboardPage
        },
        {
          path: "profile",
          component: ProfilePage
        }
      ]
    },
  ]
})

router.beforeEach((to, from) => {
  const auth = useAuthenticationStore();
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log('[Not logged, redirect to Login page]')
    return {
      path: '/login',
      // save the location we were at to come back later
      query: { redirect: to.fullPath },
    }
  }
})

export default router
import HelloWorld from '@/components/HelloWorld.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Define routes
const routes: Array<RouteRecordRaw> = [{ path: '/', component: HelloWorld }]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

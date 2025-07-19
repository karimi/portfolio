import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/HelloWorld.vue'),
  },
    {
    path: '/about',
    name: 'About',
    component: () => import('../components/HelloWorld.vue'),
  },
  // Add more routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
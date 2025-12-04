import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'About',
    component: () => import('../views/about.vue'),
  },
  {
    path: '/art/paintings',
    name: 'Paintings',
    component: () => import('../views/paintings/index.vue'),
  },
  {
    path: '/art/commissions',
    name: 'Commissions',
    component: () => import('../views/commissions.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/contact.vue'),
  },
    {
    path: '/recipes',
    name: 'Recipes',
    component: () => import('../views/recipes/index.vue'),
  },
  // Add more routes here
];

const router = createRouter({
  // history: createWebHistory('/portfolio/'), //For directly serving from github pages
  history: createWebHistory(),
  routes,
});

export default router;
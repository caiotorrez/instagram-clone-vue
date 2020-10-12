import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import Eror404 from '@/views/Error404.vue';

Vue.use(VueRouter);

const routes = [
  { path: '*', name: 'Not Found', component: Eror404 },
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

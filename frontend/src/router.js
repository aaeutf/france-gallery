import { createRouter, createWebHistory } from 'vue-router';
import France from './components/France.vue';
import Department from './components/Department.vue';

const routes = [
  {
    path: '/',
    component: France,
  },
  {
    path: '/departement/:code/:name',
    name: 'Department',
    component: Department,
    props: route => ({ code: route.params.code, name: route.params.name }),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

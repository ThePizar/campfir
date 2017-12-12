import VueRouter from 'vue-router';
import Main from './components/main.vue';

const routes = [
  {path: '/', component: Main}
];

const router = new VueRouter({
  routes
});

export default router;
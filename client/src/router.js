import VueRouter from 'vue-router';
import Poetry from './components/poetry.vue';
import Main from './components/main.vue';

const routes = [
  {path: '/', component: Main},
  {path: '/poems', component: Poetry},
];

const router = new VueRouter({
  routes
});

export default router;
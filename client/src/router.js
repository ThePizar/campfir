import VueRouter from 'vue-router';
import Poetry from './components/poetry.vue';
import Main from './components/main.vue';
import MatchMaker from './components/matchmaker.vue';

const routes = [
  {path: '/', component: Main},
  {path: '/poems', component: Poetry},
  {path: '/wot', component: MatchMaker},
];

const router = new VueRouter({
  routes
});

export default router;
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

const routes = [
  {path: '/'},
  {path: '/poems'},
];

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});

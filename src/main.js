import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import { routes } from './routes';

const router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active',
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

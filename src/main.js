import Vue from 'vue';
import Vuetify from '@/plugins/vuetify';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  router,
  Vuetify,
  render: h => h(App),
}).$mount('#app');

import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import store from '@/store/index';
import { formateDate } from '@/utils/filters';

Vue.filter('formateDate', formateDate);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// import Datepicker from 'vuejs-datepicker';
import '@/styles/global.scss';
import VueSwal from 'vue-swal'

Vue.config.productionTip = false

Vue.use(require('vue-moment'));
Vue.use(VueSwal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

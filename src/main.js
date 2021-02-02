import Vue from 'vue'
import App from './App.vue'
import 'mdb-ui-kit/css/mdb.min.css'
import '@/assets/css/app.css'
import router from '@/config/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

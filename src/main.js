import Vue from 'vue'
import App from './App.vue'

/* css */
import 'mdb-ui-kit/css/mdb.min.css' /* material design for bootstrap */
import '@/assets/css/app.css'

/* configs */
import router from '@/config/router' /* vue-router */
import '@/config/http' /* axios */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

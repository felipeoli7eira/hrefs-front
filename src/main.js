import Vue from 'vue'
import App from './App.vue'
import 'mdb-ui-kit/css/mdb.min.css'
import '@/assets/css/app.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

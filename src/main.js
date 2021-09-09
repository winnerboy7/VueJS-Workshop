import Vue from 'vue'
import App from './App.vue'
import Global from './components/Global'
import router from './router'

Vue.config.productionTip = false

Vue.component('global', Global)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')

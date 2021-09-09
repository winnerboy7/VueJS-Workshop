import Vue from 'vue'
import App from './App.vue'
import Global from './components/Global'

Vue.config.productionTip = false

Vue.component('global', Global)

new Vue({
  render: h => h(App),
}).$mount('#app')

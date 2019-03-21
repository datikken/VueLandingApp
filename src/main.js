import Vue from 'vue'
import App from './App.vue'
import Cta from './components/_partials/Button.vue'

Vue.config.productionTip = false

Vue.component('Cta', Cta)

new Vue({
  render: h => h(App),
}).$mount('#app')

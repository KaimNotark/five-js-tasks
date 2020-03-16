import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import './stylesheets/all-imports.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BluiDropdown from '@/components/dropdown'
import BluiIcon from '@/components/icon'
import BluiInput from '@/components/input'
import BluiOptions from '@/components/options'
import BluiSelect from '@/components/select'

import { packageIcon, spinnerIcon } from '@/components/icon'

Vue.config.productionTip = false;

import '@/assets/scss/index.scss'

Vue.use(BluiDropdown)
Vue.use(BluiIcon)
Vue.use(BluiInput)

// Add in some components
Vue.component('blOptions', BluiOptions)
Vue.component('blSelect', BluiSelect)
Vue.component('packageIcon', packageIcon)
Vue.component('spinnerIcon', spinnerIcon)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

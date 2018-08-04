import Vue from 'vue'
import Router from 'vue-router'
import Dropdown from './views/dropdown'
import Icon from './views/icon'
import Input from './views/input'
import Select from './views/select'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dropdown',
      name: 'dropdown',
      component: Dropdown
    },
    {
      path: '/icon',
      name: 'icon',
      component: Icon
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/select',
      name: 'select',
      component: Select
    }
  ]
})

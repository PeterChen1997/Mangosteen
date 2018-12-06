import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/services',
      name: 'services',
      component: () => import(/* webpackChunkName: "services" */ './views/Services.vue')
    },
    {
      path: '/services/addService',
      name: 'addServices',
      component: () => import(/* webpackChunkName: "addService" */ './views/AddService.vue')
    },
    {
      path: '/options',
      name: 'options',
      component: () => import(/* webpackChunkName: "options" */ './views/Options.vue')
    }
  ]
})

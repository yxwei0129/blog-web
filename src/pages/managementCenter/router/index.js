/**
 * created by Yuxin Wei on 2019/7/20
 */
import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/index.vue'
import Home from '../pages/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
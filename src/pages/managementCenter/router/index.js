/**
 * created by Yuxin Wei on 2019/7/20
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: resolve => require(['../pages/login'], resolve)
    }, {
      path: '/homePage',
      component: resolve => require(['../pages/homePage'], resolve)
    }, {
      path: '/article',
      component: resolve => require(['../pages/article'], resolve),
      children: [
        {
          path: '/article/list',
          component: resolve => require(['../pages/article/add/index'], resolve)
        }, {
          path: '/article/add',
          component: resolve => require(['../pages/article/list/index'], resolve)
        }
      ]
    }, {
      path: '/category',
      component: resolve => require(['../pages/category'], resolve),
      children: [
        {
          path: '/category/list',
          component: resolve => require(['../pages/category/list'], resolve)
        }, {
          path: '/category/add',
          component: resolve => require(['../pages/category/add'], resolve)
        }
      ]
    }, {
      path: '/tag',
      component: resolve => require(['../pages/tag'], resolve)
    },
    {
      path: '/music',
      component: resolve => require(['../pages/music'], resolve)
    },
    {
      path: '/daliyTemper',
      component: resolve => require(['../pages/daliyTemper'], resolve),
      children: [
        {
          path: '/daliyTemper/list',
          component: resolve => require(['../pages/daliyTemper/list'], resolve)
        }, {
          path: '/daliyTemper/add',
          component: resolve => require(['../pages/daliyTemper/add'], resolve)
        }
      ]
    }
  ]
})

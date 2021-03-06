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
      component: resolve => require(['../pages/category'], resolve)
    }, {
      path: '/tag',
      component: resolve => require(['../pages/tag'], resolve)
    },
    {
      path: '/music',
      component: resolve => require(['../pages/music'], resolve)
    },
    {
      path: '/daliy',
      component: resolve => require(['../pages/daliy'], resolve),
      children: [
        {
          path: '/daliy/list',
          component: resolve => require(['../pages/daliy/list'], resolve)
        }, {
          path: '/daliy/add',
          component: resolve => require(['../pages/daliy/add'], resolve)
        },
        {
          path: '/daliy/detail',
          component: resolve => require(['../pages/daliy/detail'], resolve)
        }
      ]
    }
  ]
})

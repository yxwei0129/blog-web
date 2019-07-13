import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import category from '../pages/category'
import tag from '../pages/tag'
import impression from '../pages/impression'
import about from '../pages/about'
import friend from '../pages/friend'
import detail from '../pages/detail'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path:'/tag',
      name:'/tag',
      component:tag
    },
    {
      path:'/impression',
      name:'/impression',
      component:impression
    },
    {
      path:'/about',
      name:'/about',
      component:about
    },
    {
      path:'/friend',
      name:'/friend',
      component:friend
    },
    {
      path:'/detail',
      name:'/detail',
      component:detail
    }
  ]
})

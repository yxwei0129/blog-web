/**
 * created by Yuxin Wei on 2019/7/19
 */
import Vue from 'vue'
import Element from 'element-ui'
import router from './router/index'
Vue.use(Element)

router.beforeEach((to, from, next) => {
  // 会在任意路由跳转前执行，next一定要记着执行，不然路由不能跳转了
  // eslint-disable-next-line
  if(to.path==='/'){
    return next({path: '/login'})
  }
  next()
})

Vue.config.productionTip = false
export default new Vue({
  el: '#app',
  created () {

  }
})

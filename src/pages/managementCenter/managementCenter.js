/**
 * created by Yuxin Wei on 2019/7/19
 */
import Vue from 'vue'
import router from './router/index'
import store from './store/index'
import Header from './components/Header'

router.beforeEach((to, from, next) => {
  // 会在任意路由跳转前执行，next一定要记着执行，不然路由不能跳转了
  console.log(to, from)
  //
  next()
})

Vue.config.productionTip = false
export default new Vue({
  el: '#app',
  router,
  store,
  components: {
    'top-header': Header
  }
})

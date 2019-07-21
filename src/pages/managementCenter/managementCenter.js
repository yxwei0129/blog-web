/**
 * created by Yuxin Wei on 2019/7/19
 */
import Vue from 'vue'
import router from './router/index'
import store from './store/index'
import Header from './components/Header'
import axios from './axios/index'
import { Message } from 'element-ui'

// Vue.use(Message)
Vue.component(Message)
Vue.prototype.$message = Message

Vue.prototype.HOST = '/api'
Vue.prototype.$store = store
window.$axios = axios
router.beforeEach((to, from, next) => {
  // 会在任意路由跳转前执行，next一定要记着执行，不然路由不能跳转了
  // eslint-disable-next-line
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

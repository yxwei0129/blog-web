/**
 * created by Yuxin Wei on 2019/7/19
 */
import Vue from 'vue'
import router from './router/index'
import store from './store/index'
import Header from './components/Header'
import Sliderbar from './components/Sliderbar'
import axios from './axios/index'
import constants from '../../constants'
import Element from 'element-ui'
import Nav from './components/Nav'
import 'element-ui/lib/theme-chalk/index.css'
import custom from './filter'
Vue.use(Element)
Vue.prototype.HOST = '/api'
Vue.prototype.$store = store
Vue.prototype.constants = constants
window.constants = constants
window.$axios = axios
window.globalStore = store
window.globalRouter = router
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})

router.beforeEach((to, from, next) => {
  // 会在任意路由跳转前执行，next一定要记着执行，不然路由不能跳转了
  // eslint-disable-next-line
  if (to.path === '/') {
    window.globalRouter.push({path: '/login'})
  } else {
    next()
  }
})

Vue.config.productionTip = false
export default new Vue({
  el: '#app',
  router,
  store,
  components: {
    'top-header': Header,
    'slider-bar': Sliderbar,
    'top-nav': Nav
  },
  computed: {
    isLogin () {
      return this.$store.state.login.isLogin
    }
  },
  created () {
    // 在页面加载时读取localStorage里的状态信息
    sessionStorage.getItem('userMsg') && this.$store.replaceState(Object.assign(this.$store.state, JSON.parse(sessionStorage.getItem('userMsg'))))
    // 在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('userMsg', JSON.stringify(this.$store.state))
    })
  }
})

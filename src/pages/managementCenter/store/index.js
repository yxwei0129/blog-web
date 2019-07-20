/**
 * created by Yuxin Wei on 2019/7/20
 */
import Vuex from 'vuex'
import Vue from 'vue'
import login from './modules/login'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login
  }
})

export default store

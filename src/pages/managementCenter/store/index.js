/**
 * created by Yuxin Wei on 2019/7/20
 */
import Vuex from 'vuex'
import Vue from 'vue'
import login from './modules/login'
import common from './modules/common'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login, common
  }
})

export default store

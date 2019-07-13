import Vue from 'vue'
import Vuex from 'vuex'

//使用vuex
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    nav: 0
  },
  mutations: {
    updateNav(state, nav) {
      state.nav = nav;
    }
  },
  actions: {
    setNav(context, nav) {
      context.commit('updateNav', nav);
    }
  }
})
export default store;

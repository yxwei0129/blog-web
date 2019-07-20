/**
 * created by Yuxin Wei on 2019/7/20
 */
const state = {
  loginInfo: 'weiyuxin'
}

const mutations = {
  // 此处的事件为上方 actions 中的 commit(types.DECREMENT)
  updateLogin (state, result) {
    state.loginInfo = result
  }
}

const actions = {
  Login ({commit}, result) {
    commit('updateLogin', result)
  }
}

// 最后统一导出
export default {
  state,
  actions,
  mutations
}

/**
 * created by Yuxin Wei on 2019/7/24
 */
const state = {
  navIndex: 0
}

const mutations = {
  // 此处的事件为上方 actions 中的 commit(types.DECREMENT)
  updateNavIndex (state, value) {
    debugger
    state.navIndex = value
  }
}

const actions = {
  setNavIndex ({commit}, value) {
    commit('updateNavIndex', value)
  }
}

// 最后统一导出
export default {
  state,
  actions,
  mutations
}

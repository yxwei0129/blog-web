/**
 * created by Yuxin Wei on 2019/7/20
 */
import loginApi from '../../api/login'

const state = {
  test: 'weiyuxin',
  token: ''
}

const mutations = {
  // 此处的事件为上方 actions 中的 commit(types.DECREMENT)
  updateLogin (state, value) {
    state.token = value.data.token
  },

  updateTest (state, value) {
    state.test = value
  }
}

const actions = {
  setLogin ({commit}, value) {
    return new Promise(function (resolve, reject) {
      loginApi.login(value.loginName, value.password).then(function (result) {
        commit('updateLogin', result.data)
        resolve(result.data)
      })
    })
  },

  setTest ({commit}, value) {
    commit('updateTest', value)
  }
}

// 最后统一导出
export default {
  state,
  actions,
  mutations
}

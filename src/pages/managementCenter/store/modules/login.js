/**
 * created by Yuxin Wei on 2019/7/20
 */
import loginApi from '../../api/login'
import constants from '../../../../constants'

const state = {
  test: 'weiyuxin',
  token: ''
}

const mutations = {
  // 此处的事件为上方 actions 中的 commit(types.DECREMENT)
  updateLogin (state, value) {
    state.token = value
  },

  updateTest (state, value) {
    state.test = value
  }
}

const actions = {
  Login ({commit}, value) {
    return new Promise(function (resolve, reject) {
      loginApi.login(value.loginName, value.password).then(function (result) {
        if (result.status === constants.responseCode.login.success) { // 登录成功
          commit('updateLogin', result.data.token)
          resolve(result)
        } else {
          reject(result)
        }
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

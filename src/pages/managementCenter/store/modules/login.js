/**
 * created by Yuxin Wei on 2019/7/20
 */
import loginApi from '../../api/login'
import constants from '../../../../constants'

const state = {
  userInfo: {
    id: '',
    username: '',
    phone: '',
    city: '',
    email: ''
  },
  isLogin: false
}

const mutations = {
  // 此处的事件为上方 actions 中的 commit(types.DECREMENT)
  updateLoginInfo (state, value) {
    state.token = value
  },

  updateLoginStatus (state, value) {
    state.isLogin = value
  }
}

const actions = {
  Login ({commit}, value) {
    return new Promise(function (resolve, reject) {
      loginApi.login(value.loginName, value.password).then(function (result) {
        if (result.status === constants.responseCode.login.success) { // 登录成功
          if (result.data.token) {
            sessionStorage.setItem('token', result.data.token)
          }
          commit('updateLoginInfo', result.data)
          resolve(result)
        } else {
          reject(result)
        }
      })
    })
  },

  setLoginStatus ({commit}, value) {
    commit('updateLoginStatus', value)
  }
}

// 最后统一导出
export default {
  state,
  actions,
  mutations
}

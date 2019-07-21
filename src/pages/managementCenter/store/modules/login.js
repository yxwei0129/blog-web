/**
 * created by Yuxin Wei on 2019/7/20
 */
import loginApi from '../../api/login'

const state = {
  loginInfo: 'weiyuxin',
  token: ''
}

const mutations = {
  // 此处的事件为上方 actions 中的 commit(types.DECREMENT)
  updateLogin (state, result) {
    state.token = result.data.token
  }
}

const actions = {
  setLogin ({commit}, result) {
    return new Promise(function (resolve, reject) {
      loginApi.login(result.loginName, result.password).then(function (value) {
        commit('updateLogin', value.data)
        resolve(value.data)
      })
    })
  }
}

// 最后统一导出
export default {
  state,
  actions,
  mutations
}

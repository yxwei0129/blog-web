/**
 * created by Yuxin Wei on 2019/7/21
 * 登录api
 */

/**
 * 登录 api
 * @param loginName
 * @param password
 */
const login = function (loginName, password) {
  let p = new Promise(function (resolve, reject) {
    window.$axios.get('/api/management/login', {params: { loginName: loginName, password: password }})
      .then(function (value) {
        if (value) {
          resolve(value)
        }
      })
  })
  return p
}

/**
 * 退出
 */
const logout = function () {
  let p = new Promise(function (resolve, reject) {
    window.$axios.get('/api/management/logout')
      .then(function (value) {
        if (value) {
          resolve(value)
        }
      })
  })
  return p
}

export default {login, logout}

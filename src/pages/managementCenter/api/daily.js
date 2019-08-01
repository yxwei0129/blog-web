/**
 * created by Yuxin Wei on 2019/7/31
 */

const saveDailyDetail = function (description) {
  let p = new Promise(function (resolve, reject) {
    window.$axios.post('/management/saveDailyDetail', {description: description})
      .then(function (value) {
        if (value) {
          resolve(value)
        }
      })
  })
  return p
}

/**
 * 查询daily
 * @param pageStart
 * @param pageNumber
 * @returns {Promise<any>}
 */
const getDailyList = function (pageStart, pageNumber) {
  let p = new Promise(function (resolve, reject) {
    window.$axios.post('/management/getDailyList', {pageStart: pageStart, pageNumber: pageNumber})
      .then(function (value) {
        if (value) {
          resolve(value)
        }
      })
  })
  return p
}

export default {saveDailyDetail, getDailyList}

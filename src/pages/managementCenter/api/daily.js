/**
 * created by Yuxin Wei on 2019/7/31
 */

/**
 * 保存每日动态
 * @param description
 * @returns {Promise<any>}
 */
const saveDaily = function (description) {
  let p = new Promise(function (resolve, reject) {
    window.$axios.post('/management/saveDaily', {description: description})
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

/**
 * 根据dailyId获取详情及评论
 * @param id
 * @returns {Promise<any>}
 */
const getDailyDetail = function (dailyId) {
  let p = new Promise(function (resolve, reject) {
    window.$axios.post('/management/getDailyDetail', {dailyId: dailyId})
      .then(function (value) {
        if (value) {
          resolve(value)
        }
      })
  })
  return p
}

export default {saveDaily, getDailyList, getDailyDetail}

/**
 * created by Yuxin Wei on 2019/7/30
 */

/**
 * 保存类别
 * @param name
 * @param description
 * @returns {Promise<any>}
 */
const saveCategory = function (id, name, description) {
  let p = new Promise(function (resolve, reject) {
    window.$axios.post('/management/saveCategory', {id, name: name, description: description})
      .then(function (value) {
        if (value) {
          resolve(value)
        }
      })
  })
  return p
}

/**
 * 获取类别
 * @returns {Promise<any>}
 */
const getCategoryList = function () {
  let p = new Promise(function (resolve, reject) {
    window.$axios.get('/management/getCategoryList')
      .then(function (value) {
        if (value) {
          resolve(value)
        }
      })
  })
  return p
}

/**
 * 根据id删除category
 * @param id
 */
const deleteCategory = function (id) {
  let p = new Promise(function (resolve, reject) {
    window.$axios.post('/management/deleteCategory', {id: id})
      .then(function (value) {
        if (value) {
          resolve(value)
        }
      })
  })
  return p
}

export default {saveCategory, getCategoryList, deleteCategory}

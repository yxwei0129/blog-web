/**
 * created by Yuxin Wei on 2019/7/28
 * 标签 api
 */

/**
 * 保存标签、更新标签
 * @param id
 * @param name
 */
const saveTag = function (id, name) {
  let p = new Promise(function (resolve, reject) {
    window.$axios.post('/management/saveTag', {id: id, name: name})
      .then(function (value) {
        if (value) {
          resolve(value)
        }
      })
  })
  return p
}

/**
 * 根据id删除tag
 * @param id
 */
const deleteTag = function (id) {
  let p = new Promise(function (resolve, reject) {
    window.$axios.post('/management/deleteTag', {id: id})
      .then(function (value) {
        if (value) {
          resolve(value)
        }
      })
  })
  return p
}

/**
 * 查询所有tag
 */
const getTagList = function () {
  let p = new Promise(function (resolve, reject) {
    window.$axios.get('/management/getTagList')
      .then(function (value) {
        if (value) {
          resolve(value)
        }
      })
  })
  return p
}

export default {saveTag, deleteTag, getTagList}

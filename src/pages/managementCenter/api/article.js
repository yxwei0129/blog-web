/**
 * created by Yuxin Wei on 2019/8/4
 */
import CategoryService from './category'
import TagService from './tag'

var async = require('async')

const initTagAndCategoryData = function () {
  let p = new Promise(function (resolve, reject) {
    async.parallel({
      category: function (done) {
        CategoryService.getCategoryList().then((category) => {
          done(null, category.data)
        })
      },
      tag: function (done) {
        TagService.getTagList().then((tag) => {
          done(null, tag.data)
        })
      }
    }, function (err, result) {
      if (err) throw new Error('初始化错误!')
      resolve({'status': 'SH-2001', 'data': result, 'message': '操作成功!'})
    })
  })
  return p
}

/**
 * 上传文章
 * @param userId
 * @param title
 * @param category
 * @param body
 * @returns {Promise<any>}
 */
const uploadArticle = function (userId, category, title, tag, body) {
  let p = new Promise(function (resolve, reject) {
    window.$axios.post('/management/uploadArticle', {
      userId: userId,
      category: category,
      title: title,
      tag: tag,
      detail: body
    })
      .then(function (value) {
        if (value) {
          resolve(value)
        }
      })
  })
  return p
}

const getArticleList = function () {
  let p = new Promise(function (resolve, reject) {
    window.$axios.get('/management/getArticleList')
      .then(function (value) {
        if (value) {
          resolve(value)
        }
      })
  })
  return p
}

export default {initTagAndCategoryData, uploadArticle, getArticleList}

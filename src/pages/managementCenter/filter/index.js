/**
 * created by Yuxin Wei on 2019/8/2
 */

var moment = require('moment')

export default {

  /**
   * 根据qq邮箱获取qq头像
   * @param email
   */
  getImagePhoto (email) {
    let qq = email.split('@')[0]
    return 'http://q1.qlogo.cn/g?b=qq&nk=' + qq + '&s=100'
  },

  timeHandle (dateTimeStamp) {
    dateTimeStamp = Date.parse(dateTimeStamp)
    var result = ''
    var minute = 1000 * 60
    var hour = minute * 60
    var day = hour * 24
    var month = day * 30
    var now = new Date().getTime()
    var diffValue = now - dateTimeStamp
    if (diffValue < 0) {
      return
    }
    var monthC = diffValue / month
    var weekC = diffValue / (7 * day)
    var dayC = diffValue / day
    var hourC = diffValue / hour
    var minC = diffValue / minute
    if (monthC >= 1) {
      result = '' + parseInt(monthC) + '月前'
    } else if (weekC >= 1) {
      result = '' + parseInt(weekC) + '周前'
    } else if (dayC >= 1) {
      result = '' + parseInt(dayC) + '天前'
    } else if (hourC >= 1) {
      result = '' + parseInt(hourC) + '小时前'
    } else if (minC >= 1) {
      result = '' + parseInt(minC) + '分钟前'
    } else {
      result = '刚刚'
    }
    return result
  }

}

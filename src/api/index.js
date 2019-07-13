/**
 * created by Yuxin Wei on 2019/7/13
 * 封装api
 */
import {fetchGet} from "../request/http";

export default {
  // 获取分类
  get_articleList: function (param='',callback) {
    return fetchGet('/getArticleList','').then((res)=>{
      callback&& callback(res)
    });
  }
}

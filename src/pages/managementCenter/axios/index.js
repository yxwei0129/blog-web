/**
 * created by Yuxin Wei on 2019/7/21
 * axios 全局配置
 */

import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.baseURL = 'http://localhost:3000'

// http请求拦截器 请求之前的一些操作
axios.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)// 防止post请求参数无法传到后台
  }
  return config
}, error => {
  return Promise.reject(error)
})
// http响应拦截器  请求之后的操作
axios.interceptors.response.use(data => {
  return data
}, error => {
  return Promise.reject(error)
})

export default axios

/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-04 10:03:25
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 10:20:51
 */ 
// 1.引入文件
import axios from 'axios'

// 2.全局默认配置
let baseURL
// 判断开发环境（一般用于本地代理）
if (process.env.NODE_ENV === 'development') {
  // 开发环境
  baseURL = '/'
} else {
  // 编译环境
  if (process.env.type === 'test') {
    // 测试环境
    baseURL = '/api'
  } else {
    // 正式环境
    baseURL = '/api'
  }
}

const Axios = axios.create({
  baseURL: baseURL, // 你的接口地址
  timeout: 60000, // 请求超时时间1分钟
  // responseType: 'json',
  withCredentials: false // 是否允许带cookie这些
})

// 3.设置拦截器
Axios.interceptors.request.use(
  config => {
    // 发送请求前进行拦截;
    // 可在此处配置请求头信息
    // config.headers['appkey'] = '...'
    // config.headers['token'] = '...'
    // if (config.method === 'post') {
    //   // 数据转换: axios post方式默认是json格式提交数据，如果使用application/x-www-form-urlencoded数据格式提交，
    //   // 要用qs.stringify()进行转换,个人建议不在拦截器中全局配置，因为不够灵活，还有一点是，如果
    //   // 设置了重新请求的配置，那么重新请求时，请求体中的config里面的传参就会被再次进行qs.stringify()转
    //   // 换，会使得参数丢失，造成请求失败。*/
    //   config.data = qs.stringify(config.data)
    // }
    if (localStorage.getItem('token')) {
      config.headers.token = localStorage.getItem('token')
    }
    return config
  },
  error => {
    console.log(error)
  }
)
// 相应拦截用来检测服务器返回401，token过期
Axios.interceptors.response.use(
  res => {
    // 请求响应后拦截;
    // if (res.status == 200) {
    //   // 对响应数据做些事
    //   //alert('提交成功')
    //   return Promise.resolve(res);
    // }
    return res
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
        // 服务器检测到token和数据库存的token的过期时间已经过期了的话返回401。跳转登录
          localStorage.removeItem('token')
          localStorage.removeItem('username')
      }
    }
  }
)
export default Axios
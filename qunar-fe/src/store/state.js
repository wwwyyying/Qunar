/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-06-17 17:35:24
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 08:35:48
 */ 
let defaultCity = '北京'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e){}

export default {
  city: defaultCity,
  Authorization: {
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    username: localStorage.getItem('username') ? localStorage.getItem('username') : ''
  }
}

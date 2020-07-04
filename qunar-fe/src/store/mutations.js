/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-06-17 17:35:24
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 08:37:09
 */ 
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  changeLogin (state, Authorization) {
    state.Authorization = Authorization
    localStorage.setItem('token', Authorization.token)
    localStorage.setItem('username', Authorization.username)
  }
}

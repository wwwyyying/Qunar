<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-04 08:04:00
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 13:38:57
--> 
<template>
  <div class="wrapper">
    <div class="input">
      <div class="input-phone">
        <span>账号</span>
        <input type="text" class="phone" placeholder="请输入账号" v-model="loginForm.username">
      </div>
      <div class="input-password">
        <span class="pwd-left">密码</span>
        <input type="password" class="password" placeholder="请输入密码" v-model="loginForm.password">
      </div>
    </div>
    <div class="login" @click="login">登录</div>
    <p>登录即同意去哪儿 <a href="https://touch.qunar.com/h5/about?action=rules">用户服务协议</a> 和 <a href="https://m.qunar.com/zhuanti/20170210_privacy.html?source=touch">用户服务协议</a></p>
  </div>
</template>

<script>
import axios from '../../../api/axios'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'LoginInput',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapState(['Authorization', 'city'])
  },
  methods: {
    ...mapMutations(['changeLogin']),
    login () {
      let _this = this
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号密码不能为空')
      } else {
        axios({
          method: 'post',
          url: '/api/user/login',
          data: _this.loginForm
        }).then(res => {
          _this.userToken = res.data.token
          _this.username = res.data.username
          _this.changeLogin({token: _this.userToken, username:_this.username})
          _this.$router.push('/me')
          alert('登录成功')
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .wrapper
    height: 94.2vh - $headerHeight
    background-color: #f3f9fc
    .input
      margin-top: .2rem
      font-size: .3rem
      background-color: white
      .input-phone
        padding: 0 0 0 .3rem
        line-height: $headerHeight
        color: $bgColor
        border-top: solid 1px #CCCCCC
        span
          padding: 0 .9rem 0 0
      .input-password
        padding: 0 0 0 .3rem
        line-height: $headerHeight
        color: $bgColor
        border-bottom: solid 1px #CCCCCC
        border-top: solid 1px #DDDDDD
        .pwd-left
          padding: 0 .9rem 0 0
        .getcheck
          border: solid 1px #CCCCCC
          color: #DADFE8
          border-radius: .03rem
          display: inline-block
          line-height: .5rem
          padding 0 .1rem
    .login
      line-height: $headerHeight
      width: 2rem
      text-align: center
      border-radius: .03rem
      background-color: $bgColor
      color: white
      font-size: .3rem
      margin: .3rem auto
    p
      color: #9e9e9e
      text-align: center
      a
        color: #9e9e9e
        text-decoration: underline
</style>
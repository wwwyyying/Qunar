<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-04 08:40:32
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 13:21:13
--> 
<template>
  <div class="my-wrapper">
    <me-header />
    <span class="logout" @click="logout">退出登录</span>
    <span class="username" v-if="this.Authorization">{{this.Authorization.username}}</span>   
    <router-link v-else to='/login' class="my-unlogin-btn">登录/注册</router-link>       
    <me-content />
    <home-footer />
  </div>
</template>

<script>
import MeHeader from './components/Header'
import MeContent from './components/Content'
import HomeFooter from '../home/components/Footer'
import { mapState } from 'vuex'
export default {
  name: 'Me',
  components: {
    MeHeader,
    MeContent,
    HomeFooter
  },
  computed: {
    ...mapState(['Authorization', 'city'])
  },
  data () {
    return {
      username: ''
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .my-wrapper
    position: relative
    .my-unlogin-btn, .username 
      display: inline-block;
      width: 5rem;
      position: absolute;
      left: 50%;
      top: 15%
      z-index: 10;
      color: #fff;
      margin-left: -2.5rem;
      text-align: center
    .logout
      position: absolute
      top:.2rem;
      right:.2rem;
      z-index: 10;
      color: #fff;
</style>
<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-04 08:03:39
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 13:14:28
--> 
<template>
  <div>
    <login-header />
    <login-input />
    <home-footer />
  </div>
</template>

<script>
import LoginHeader from './components/Header'
import LoginInput from './components/Input'
import HomeFooter from '../home/components/Footer'
import axios from '../../api/axios'
export default {
  name: 'Login',
  components: {
    LoginHeader,
    LoginInput,
    HomeFooter
  },
  data () {
    return {
      title: ''
    }
  },
  mounted () {
    this.getLoginInfo()
  },
  methods: {
    getLoginInfo () {
      axios.get('/api/json').then(this.getLoginInfoRes)
    },
    getLoginInfoRes (res) {
      res = res.data 
      if (res) {
        const data = res
        this.title = data
      }
    }
  }
}
</script>

<style>

</style>
<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-04 08:03:55
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 08:16:15
--> 
<template>
  <div class="header">
    登录
    <router-link to="/" tag="div" class="iconfont header-left">&#xe624;</router-link>
    <span>注册</span>
  </div>
</template>

<script>
export default {
  name: "LoginHeader"
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    width: 100%
    line-height: $headerHeight
    height: $headerHeight
    background: $bgColor
    color: #fff
    text-align: center
    font-size: .32rem
    position: relative
    .header-left
      padding: 0 .2rem
      font-size: .35rem
      position: absolute
      top: 0
      left: 0
    span
      position: absolute
      top: 0
      right: 0
      color: #75ffff
      margin-right: .2rem

</style>
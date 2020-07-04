<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-04 09:26:16
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 09:31:57
--> 
<template>
  <div class="footer">
    <div class="icon-wrapper" @click="toHome">
      <div class="iconfont">&#xe607;</div>
      <p>首页</p>
    </div>
    <div class="icon-wrapper">
        <div class="iconfont">&#xe604;</div>
        <p>购物车</p>
    </div>
    <div class="icon-wrapper">
        <div class="iconfont">&#xe64d;</div>
        <p>发现</p>
    </div>
    <div class="icon-wrapper" @click="toMe">
        <div class="iconfont">&#xe699;</div>
        <p>我的</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter',
  methods: {
    toHome () {
      this.$router.push('/')
    },
    toMe () {
      this.$router.push('/me')
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .footer
    width: 100%
    height: 1rem
    position: fixed
    bottom: 0
    z-index: 9
    text-align: center
    background: #fff
    .icon-wrapper
      width: 25%
      float: left
      color: #828282
      .iconfont
        margin-top: .08rem
        line-height: .6rem
        font-size: .5rem
      p
        font-size: .2rem

</style>
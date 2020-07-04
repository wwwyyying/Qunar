<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-04 08:42:52
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 15:06:18
--> 
<template>
  <div class="my-info-container">
    <router-link to="/" tag="div" class="iconfont header-left">&#xe624;</router-link>
    <div class="backgroundurl"></div>
    <div class="my-avatar">
      <router-link to="/login" class="my-avatar-link">
        <img alt="" class="my-avatar-img" src="https://source.qunarzz.com/usercenter/touch/avatar.png">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeHeader'
}
</script>

<style lang="stylus" scoped>
  .my-info-container 
    position: relative
    z-index: 2
    height: 3.2rem
    overflow: hidden
    border-bottom: .266667rem solid #eee
    .header-left
      padding: 0 .2rem
      font-size: .35rem
      position: absolute
      top: .2rem
      left: 0
      color: #fff
      font-weight: 700
    .backgroundurl 
      width: 100%;
      height: 6.4rem;
      margin-top: -3.2rem;
      background:#25a4bb;
    .my-avatar 
      height: 1rem;
      text-align: center;
      margin: 0 auto;
      width: 100%;
      .my-avatar-link 
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 40%;
        margin-top: -.7rem;
        height: 1.4rem;
        width: 1.4rem;
        border-radius: 100%;
        padding: .03rem;
        background: rgba(255,255,255,0.5);
        .my-avatar-img 
          display: inline-block
          width: 1.4rem;
          height: 1.4rem;
          border-radius: 100%;
          -webkit-box-shadow: 0 0.03rem 0.03rem rgba(0,0,0,0.05);
          box-shadow: 0 0.03rem 0.03rem rgba(0,0,0,0.05);
          cursor: pointer;
        
</style>
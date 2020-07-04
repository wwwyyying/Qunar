<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-06-17 17:37:22
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 13:57:30
--> 
<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li" :to="'/detail/' + item.id" class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" :alt="item.title">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <div class="content-desc-price">
            <span class="content-desc-price-span">￥</span>
            <span class="content-desc-price-num">{{item.price}}</span>
            <span>起</span>
          </div>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
    margin-top: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
        margin-bottom:.05rem
      .content-desc-desc
        font-size: .1rem
        color: rgb(255, 85, 85)
        ellipsis()
      .content-desc-price
        .content-desc-price-span
          color: rgb(255, 131 0)
          margin-right: -.06rem
        .content-desc-price-num
          color: rgb(255, 131 0)
          font-size: .3rem
      .item-button
        line-height: .44rem
        margin-top: .05rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>

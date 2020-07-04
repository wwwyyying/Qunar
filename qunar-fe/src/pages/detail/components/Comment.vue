<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-07-04 09:37:40
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 14:03:37
--> 
<template>
  <div class="wrapper">
    <div class="title border-bottom">用户评论</div>
    <div
      class="border-bottom"
      v-for="item of commentList"
      :key="item.id"
    >
      <div class="comment-total">
        <div class="comment-total-star">
          <span class="iconfont light">&#xe61a;&#xe61a;&#xe61a;&#xe61a;</span>
          <span class="iconfont dark">&#xe61a;</span>
        </div>
        <p>{{item.name}}</p>
      </div>
      <div class="comment-dsc">
        {{item.comment}}
      </div>
      <div class="open" @click="item.showAll">
        <span class="iconfont" v-if="item.showAll">&#xe62e;</span>
        <span class="iconfont" v-else>&#xe62d;</span>
      </div>
      <div class="pic">
        <img
        class="pic-content"
        v-for="inneritem of item.imgUrl"
        :key="inneritem.index"
        :src="inneritem">
      </div>
    </div>
    <div class="iconfont allcomment">查看全部评论&#xe62f;</div>
  </div>
</template>

<script>
export default {
  name: 'DetailComment',
  props: {
    commentList: Array
  },
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .wrapper
    border-bottom: .2rem solid rgb(245, 245, 245)
  .title
    color: #333
    height: .88rem
    line-height: .88rem
    font-size: .3rem
    text-indent: .4rem
  .title::after
    content: " ";
    position: absolute;
    top: .30rem;
    left: .2rem;
    width: .06rem;
    height: .25rem;
    background: #1ba9ba;
    -webkit-border-radius: .04rem;
    -moz-border-radius: .04rem;
    border-radius: .04rem;
  .comment-total
    padding: .3rem .2rem .1rem .2rem
    text-align: right
    padding-right: .2rem
    overflow: hidden
    line-height: .32rem
    font-size: .24rem
    .comment-total-star
      float: left
      font-size: .24rem
      .light
        color: #ff9800
        font-size: .24rem
      .dark
        font-size: .24rem
        position: relative
        color: #ccc
        left: -.07rem
  .comment-dsc
    height: 2.1rem
    overflow: hidden
    padding: 0 .2rem 0 .2rem
    font-size: .26rem
    line-height: .42rem
    color: #616161
  .open
    text-align: center
    line-height: .4rem
    color: #9e9e9e
  .pic
    display: flex
    flex-direction: row
    flex-wrap: wrap
    padding: .2rem
    width: 100%
    .pic-content
      width: 30%
      padding: 0 .1rem .1rem 0
  .allcomment
    color: #616161
    text-align: center
    line-height: .8rem
    font-size: .3rem
    border-top: .02rem dashed #bebebe
</style>
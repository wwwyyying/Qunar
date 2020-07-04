<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-06-17 17:47:38
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 14:14:37
--> 
<template>
  <div class="recommend">
    <div class="title border-bottom">
      去哪儿推荐
    </div>
    <div class="content border-bottom" v-for="item of recommendList" :key="item.id">
      <div class="content-dsc">
        {{item.title}}
        <div class="content-dsc-tomorrow">
          <img class="content-dsc-img" src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png">可订明日
        </div>
      </div>
      <div class="content-buy">
        ￥{{item.price}}
        <div class="content-buy-button">预订</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .recommend
    position: relative
    top: -.1rem
    border-radius: .1rem .1rem 0 0
    z-index: 2
    background-color: #fff
    border-bottom: .2rem solid rgb(245, 245, 245)
    .title
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAflBMVEUAAAD/bm7/b2//b2//eXn/b2//b2//bm7/b2//b2//bm7/b2//b2//b2//bm7/b2//b2//cXH/eHj/qqr/bm7/////cXH/iIj/oqL//f3/mJj/fHz/9/f/8PD/4eH/ycn/6+v/1dX/0ND/t7f/ra3/kpL/jo7/c3P/5ub/vr7o37bEAAAAFHRSTlMA9uZeCfny7NvLt6+PfGZONxsRA/pz1k8AAAFrSURBVEjHpZbZdoMwDERtMEvYE8YJZN/b/v8PNvicJsiYqJzcB548WGNZksUAVWZJHAVBFCdZqQTDwk8lesjUX4hxVB5iQJiPbVMXHpx4RS0czGcYZTYXAyoPb/AqYeFLvEX61nqwEEUlwSKrnl9X/JtmZfl4Oq9d53Pfan2yzurvdAs42OsHaxAKYVDOA207wcEKShlBDhfaIUBu7lsIl2UjuIASLkZTsDaCxpWMFC7ORrCBRfqw7MxZY9Z/w0YqUWLI8tLqJ+25n8BSZP3Am+aG2/Vw1IQ9XmQiwZNV9z+0mkKtJCKmAg094IgXsYg4Ab0gkQh4wRUvgv8I1kTAh7QHCYk3fQIxnbCCHXokImMFPyCJKznB9gvkaijJ7XCnl0+kU3ZISQFttp3DnWW5oQVES3S57D4Eq0RJE+DJSZvh8RRpZDwFaZU8s5o0YxZvPrXdTx0on40sfih+Nnb5wT7x6fDR42Ty8+cXnHyOvDgQEbUAAAAASUVORK5CYII=')
      background-repeat: no-repeat
      background-size: .36rem .36rem
      background-position: .2rem center
      text-indent: .7rem
      line-height: .88rem
      height: .88rem
      font-size: .32rem
      color: #333
    .content
      overflow: hidden
      width: 100%
      display: flex
      padding: .2rem 0
      min-height:0
      .content-dsc
        padding: 0 .2rem
        width: 66%
        font-size: .3rem
        line-height: .52rem
        .content-dsc-tomorrow
          font-size: .24rem
          line-height: .32rem
          color: #616161
          img
            width: .23rem
            padding-right: .05rem
      .content-buy
        text-align: center
        flex: 1
        padding: 0 .2rem
        color: #ff9800
        font-size: .4rem
        line-height: .4rem
        .content-buy-button
          text-align: center
          color: #ffffff
          background-image: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%)
          height: .6rem
          line-height: .6rem
          font-size: .28rem
          border-radius: .07rem
</style>

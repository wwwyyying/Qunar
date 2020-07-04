<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-06-17 17:47:38
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 15:19:08
--> 
<template>
  <div>
    <router-link tag='div' to='/' class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to='/'>
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>     
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 1
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-fixed
    position: fixed
    top: 0
    left: 0
    z-index: 99
    width: 100%
    line-height: $headerHeight
    height: $headerHeight
    background: $bgColor
    color: #fff
    text-align: center
    font-size: .32rem
    .header-fixed-back
      padding: 0 .2rem
      font-size: .35rem
      position: absolute
      top: 0
      left: 0
  .header-abs-back
    position: absolute
    top: .1rem
    left: .1rem
    z-index: 2
    color: #fff
    font-size: .4rem
    text-align: center
    width: .72rem
    line-height: .72rem
    background: rgba(0, 0, 0, .5)
    border-radius: .72rem
</style>

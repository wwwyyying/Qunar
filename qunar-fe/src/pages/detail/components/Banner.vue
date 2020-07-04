<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-06-17 17:47:38
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 15:22:11
--> 
<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerList.bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{bannerList.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe663;&nbsp;</span>
          {{this.getGalleryLength}}
        </div>
      </div>
      <div class="banner-fade"></div>
    </div>
    <fade-animation>
      <common-gallery :galleryImgs='galleryImgs' v-show="showGallery" @close='handleGalleryClose'></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    'bannerList': Object,
    'galleryImgs': Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  computed: {
    getGalleryLength () {
      return this.galleryImgs.length
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    .banner-img
      width: 100%
    .banner-info
      z-index: 2
      position: absolute
      bottom: .3rem
      left: .2rem
      color: #fff
      .banner-icon
        display: inline-block
        background: rgba(0, 0, 0, .5)
        border-radius: .2rem
        font-size: .24rem
        line-height: .4rem
        text-align: center
        padding: 0 .4rem 0 .4rem
      .banner-title
        margin-top: .1rem
        font-size: .36rem
        line-height: .5rem
    .banner-fade
      z-index: 1.5
      position: absolute
      bottom: 0rem
      width: 100%
      height: 11%
      background: linear-gradient(rgba(0,0,0,0),#363636)
</style>




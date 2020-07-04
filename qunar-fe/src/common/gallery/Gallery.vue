<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-06-17 17:25:34
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 14:28:05
--> 
<template>
  <div class="container" @click='handleGalleryClick'>
    <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOptions" v-if="showGallery">
        <swiper-slide v-for="(item,index) in galleryImgs" :key="index">
          <img class="gallery-img" alt="" :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    galleryImgs: Array
    //   type: Array,
    //   default () {
    //     return ['//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg']
    //   }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true,
        loop: true
      }
    }
  },
  computed: {
    showGallery () {
      return this.galleryImgs.length
    }
  },
  methods: {
    handleGalleryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      background: #fff
      width: 100%
      height: 0
      padding-bottom: 65%
      .gallery-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>

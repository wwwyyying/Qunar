<!--
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-06-17 17:47:38
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 14:54:36
--> 
<template>
  <div>  
    <detail-header></detail-header>     
    <detail-banner :bannerList='bannerList' :galleryImgs="galleryImgs"></detail-banner>        
    <detail-list :recommendList="recommendList"></detail-list>
    <detail-comment :commentList="commentList"></detail-comment>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailComment from './components/Comment'
import DetailList from './components/List'
import axios from '../../api/axios'
export default {
  name: 'Detail',
  data () {
    return {
      bannerList: {},
      galleryImgs: [],
      recommendList: [],
      commentList: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailComment
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/getDetial').then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        res = res.data.detail
        res.forEach(item => {
          if (item.id === this.$route.params.id) {          
            this.bannerList = item.bannerList
            this.galleryImgs = item.gallaryImgs
            this.recommendList = item.recommendList
            this.commentList = item.commentList
          }
        });

        console.log(this.recommendList)
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>


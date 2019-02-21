<template>
  <div>
      <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :bannerImgs="gallaryImgs"
      >
      </detail-banner>
      <detail-header></detail-header>
      <div class="content">
        <detail-list :categoryList="categoryList"></detail-list>
        <detail-comment :userComment="userComment"></detail-comment>
      </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailComment from './components/Comment'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailComment
  },
  data () {
    return {
      categoryList: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      userComment: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailSucc)
    },
    getDetailSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
        const userComment = this.toSecret(data.userComment)
        this.userComment = userComment
      }
    },
    toSecret (data) {
      data.forEach((item) => {
        item.name = item.name[0] + '*' + item.name[item.name.length - 1]
      })
      return data
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .content
    height 50rem
</style>

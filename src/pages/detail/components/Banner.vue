<template>
  <div>
    <div class="banner" @click="handleClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-num"><span class="iconfont banner-icon">&#xe611;</span>{{imgLength}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallery
        :imgs="imgs"
        v-if="wrapperShow"
        @close="closeGallery"
      >
      </common-gallery>
    </fade-animation>
    <common-gallery :imgs="gallaryImgs" v-if="wrapperShow" @close="closeGallery"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  data () {
    return {
      wrapperShow: false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  computed: {
    imgLength () {
      return this.gallaryImgs.length
    }
  },
  methods: {
    handleClick () {
      this.wrapperShow = true
    },
    closeGallery () {
      this.wrapperShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    // !!!!!
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      display: flex
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6))
      .banner-title
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-num
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        background: rgba(0, 0, 0, .4)
        border-radius: .2rem
        padding: 0 .4rem
        font-size: .24rem
        .banner-icon
          font-size: .24rem
          margin-right: .08rem
</style>
<template>
  <div>
    <div class="banner" @click="handleClickBanner">
        <img class="banner-img" :src="bannerImg">
        <div class="banner-info">
            <div class="banner-title">{{this.sightName}}</div>
            <div class="banner-number">
              <span class="iconfont banner-icon">&#xe611;</span>
              {{this.bannerImgs.length}}
            </div>
        </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="bannerImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallery/Gallery'
import FadeAnimation from 'common/fadeAnimation/FadeAnimation'

export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleClickBanner () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    oveflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        line-height .32rem
        padding 0 .4rem
        margin-top .14rem
        border-radius .2rem
        background rgba(0, 0, 0, 0.8)
        font-size .24rem
        .banner-icon
          font-size  .24rem
</style>

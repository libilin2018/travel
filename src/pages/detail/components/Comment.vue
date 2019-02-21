<template>
  <div>
    <div class="margin"></div>
    <div class="title border-bottom">
      <span class="l"></span>
      用户评论
    </div>
    <div
      class="comment border-bottom"
      v-for="(item, index) of userComment"
      :key="index"
    >
      <div class="comment-item">
        <span class="iconfont">&#xe665;&#xe665;&#xe665;&#xe665;&#xe665;</span>
        <div class="comment-info">{{item.name}}&nbsp;&nbsp;{{item.date}}</div>
        <div class="comment-desc">
          {{item.desc}}
        </div>
        <div class="comment-img" @click="handleClick(item.galleryImgs)">
          <img
            class="comment-img-item"
            v-for="(img, index) of item.commentImgs"
            :key="index"
            :src="img"
        />
        </div>
      </div>
      <div class="comment-num">
        <div class="comment-num-bg"></div>
        <div class="comment-num-content">共{{item.galleryImgs.length}}张</div>
      </div>
    </div>
    <common-gallery v-show="ifShowGallery" :imgs="galleryImgs" @close="closeGallery"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailComment',
  data () {
    return {
      ifShowGallery: false,
      galleryImgs: []
    }
  },
  components: {
    CommonGallery
  },
  props: {
    userComment: Array
  },
  methods: {
    closeGallery () {
      this.ifShowGallery = false
    },
    handleClick (imgs) {
      this.galleryImgs = imgs
      this.ifShowGallery = true
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-pagination-fraction
    bottom: 0rem
  .margin
    height: .2rem
    background: #f5f5f5
  .title
    line-height: .8rem
    padding: 0 .2rem
    font-size: .34rem
    .l
      height: .4rem
      border-left: 2px solid #1ba9ba
      padding: 0 .1rem
  .comment
    padding: .1rem .2rem
    .comment-item
      line-height: .6rem
      .iconfont
        color: #ffb436
      .comment-info
        float: right
        position: relative
        top: .04rem
        font-size: .25rem
      .comment-desc
        word-break: break-all;
        word-wrap: break-word;
        line-height: .42rem;
        font-size: .26rem;
        color: #616161;
      .comment-img
        margin: .2rem 0
        height: 0
        over-flow: hidden
        padding-bottom: 50%
        .comment-img-item
          box-sizing: border-box
          width: 33.33333%
          padding-bottom: 24.56%
          padding: 0 .05rem .1rem .05rem
    .comment-num-bg
      height: .4rem
      width: 1.2rem
      position: absolute
      right: .25rem
      bottom: .5rem
      background: rgba(0, 0, 0, .5)
      border-top-left-radius: .2rem;
      border-bottom-left-radius: .2rem;
    .comment-num-content
      position: absolute
      right: .25rem
      bottom: .5rem
      height: .4rem
      width: .94rem
      line-height: .4rem
      text-align: center
      color: #fff
      font-size: .24rem
</style>

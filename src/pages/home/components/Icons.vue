<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(page, index) of pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="item of page"
          :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.iconSrc" />
          </div>
          <p class="icon-txt">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false,
        pagination: '.swiper-pagination'
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-slide
    height: 0
    padding-bottom: 55%
  .icons >>> .swiper-pagination-bullets
    bottom: 0
  .icon
    position: relative
    float: left
    width: 25%
    padding-bottom: 25%
    height: 0
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .30rem
      .icon-img-content
        box-sizing: border-box
        padding: .3rem
        width: 100%
        display: block
        margin: 0 auto
    .icon-txt
      position: absolute
      left: 0
      right: 0
      bottom: 0;
      line-height: .30rem
      color: $darkTxtColor
      text-align: center
      ellipsis()
</style>

<template>
  <div class="swiper">
    <swiper :options="swiperOption" v-if="swiperShow">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.src" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    swiperShow () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper >>> .swiper-pagination-bullet-active
    background: #fff
  .swiper
    width: 100%
    overflow: hidden
    // 这里不能height=31.25%，因为height继承的是父元素的百分比
    height: 0
    padding-bottom: 27%
  .swiper-img
    width: 100%
</style>

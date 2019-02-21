<template>
  <div class="container" @click="handleClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="swiper-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    handleClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-pagination-fraction
    bottom: -1rem
  .container
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    z-index: 999
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .swiper-container
        overflow: inherit
        .swiper-img
          width: 100%
        .swiper-pagination
          color: #fff
</style>

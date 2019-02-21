<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hotCities"
            :key="item.id"
            @click="handleChangeCity(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(items, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div
          class="item-list"
          v-for="item of items"
          :key="item.id"
          @click="handleChangeCity(item.name)"
        >
          <div class="item border-bottom">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div :class="{tap: ifTapShow}">{{letter}}</div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String,
    ifTapShow: Boolean
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleChangeCity (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    // 将方法changeCity映射到Mutations
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #aaa
  .tap
    position: absolute
    top: 50%
    left: 50%
    margin-top: -1rem
    margin-left: -1rem
    width: 2rem
    height: 2rem
    line-height: 2rem
    background: #808080
    text-align: center
    font-size: 1rem
    color: #fff
    border-radius: .08rem
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #f5f5f5
      font-size: .26rem
      padding-left: .2rem
      color: #666
    .button-list
      padding: .1rem .6rem .1rem .1rem
      overflow: hidden
      .button-wrapper
        float: left
        width: 33.33%
        .button
          border: .02rem solid #ccc
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border-radius: .08rem
    .item-list
      .item
        padding-left: .3rem
        line-height: .76rem
</style>

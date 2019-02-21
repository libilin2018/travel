<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      请输入城市/景点/游玩主题
    </div>
    <router-link to="/city" class="header-right">
      <div>
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe61f;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    display: flex
    .header-left
      width: .64rem
      float: left
      .back-icon
        font-size: .4rem
        text-align: center
    .header-input
      flex: 1
      background: #fff
      margin-top: .12rem
      margin-left: .2rem
      height: .62rem
      line-height: 0.62rem
      border-radius: .1rem
      color: #ccc
      padding-left: .4rem
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .2rem
</style>

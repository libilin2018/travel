<template>
  <div>
    <div class="header">
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
      城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: relative
    height: $headerHeight
    line-height: $headerHeight
    color: #fff
    background: $bgColor
    text-align: center
    font-size: .32rem
    .back-icon
      position: absolute
      top: 0
      width: .64rem
      font-size: .4rem
      text-align: center
      color: #fff
</style>

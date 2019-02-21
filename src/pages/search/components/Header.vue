<template>
  <div class="header border-bottom">
    <router-link
      tag="div"
      to="/"
      class="header-left"
    >
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <input
      class="header-input"
      type="text"
      placeholder="输入城市或景点"
    />
    <div class="header-right">搜索</div>
  </div>
</template>

<script>
export default {
  name: 'SearchHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    line-height: $headerHeight
    background: #fff
    display: flex
    .header-left
      width: .64rem
      float: left
      padding: 0 .05rem
      .back-icon
        font-size: .4rem
        text-align: center
    .header-input
      flex: 1
      height: .6rem
      background: #f2f2f2
      margin-top: .11rem
      border-radius: .4rem
      color: #757575
      text-align: center
      padding: 0 .1rem
    .header-right
      width: .64rem
      padding: 0 .1rem
      float: right
</style>

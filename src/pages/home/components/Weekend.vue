<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item"
        v-for="item of list"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgSrc" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeWeekend',
  data () {
    return {
    }
  },
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .44rem
    padding: 0.2rem 0
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    height: 0
    overflow: hidden
    padding-bottom: 37%
    .item-img
      width: 100%
  .item-info
    padding: .2rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #617ab3
      ellipsis()
</style>

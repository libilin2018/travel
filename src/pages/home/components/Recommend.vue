<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        tag="li"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgSrc" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeRecommend',
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
    margin-top: .2rem
    line-height: .44rem
    padding: 0.2rem 0
    background: #eee
    text-indent: .2rem
  .item
    height: 1.9rem
    display: flex
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        padding: 0 .4rem
        border: 0
        background: #ff8c07
        border-radius: .08rem
        color: #fff
        margin-top: .2rem
</style>

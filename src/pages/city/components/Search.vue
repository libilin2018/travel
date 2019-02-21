<template>
  <div>
    <div class="search">
      <input
        class="search-class"
        type="text"
        placeholder="请输入城市名或拼音"
        v-model="inputDate"
      />
    </div>
    <div class="search-content" v-show="inputDate">
      <ul>
        <li
          class="search-content-list border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleChangeCity(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-content-list border-bottom" v-show="hasNoData">没有找到匹配的数据~</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  data () {
    return {
      timer: null,
      list: [],
      inputDate: ''
    }
  },
  props: {
    cities: Object
  },
  methods: {
    handleChangeCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    inputDate () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.inputDate) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.inputDate) > -1 || value.name.indexOf(this.inputDate) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    background: $bgColor
    padding: 0 .1rem
    .search-class
      box-sizing: border-box
      width: 100%
      height: .62rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      padding: 0 .1rem
  .search-content
    z-index: 1
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    background: #eee
    .search-content-list
      line-height: .62rem
      background: #fff
      padding-left: .2rem
      color: #666
</style>

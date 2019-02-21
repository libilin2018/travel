<template>
  <div
    :class="{'list': true, active: ifTouch}"
    v-show="ifShow"
  >
    <div
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      ifChange: false,
      ifTouch: false,
      startY: 0,
      timer: null,
      ifShow: true
    }
  },
  props: {
    cities: Object,
    clientHeight: Number
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart (e) {
      this.ifChange = true
      this.ifTouch = true
    },
    handleTouchMove (e) {
      if (this.ifChange) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index <= 21) {
            this.$emit('change', this.letters[index])
            this.$emit('open')
          }
        }, 16)
        // 通过定时器进行函数节流，提高性能
      }
    },
    handleTouchEnd () {
      this.ifChange = false
      this.ifTouch = false
      this.timer = setTimeout(() => {
        this.$emit('close')
      }, 16)
    },
    handleResize () {
      const height = document.documentElement.clientHeight
      if (height < 400) {
        this.ifShow = false
      } else {
        this.ifShow = true
      }
    }
  },
  activated () {
    this.ifSHow = true
    window.addEventListener('resize', this.handleResize)
  },
  deactivated () {
    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .active
    background: #eee
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    right: 0
    top: 1.58rem
    bottom: 0
    width: .4rem
    .item
      text-align: center
      color: $bgColor
      line-height: .4rem
</style>

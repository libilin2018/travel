  <template>
  <div id="app">
    <!-- 显示的是当前路由所对应的内容 -->
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route (to, from) {
      if (to.meta.index > from.meta.index) {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = 'slide-right'
      }
    }
  }
}
</script>

<style>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all .4s cubic-bezier(.55,0,.1,1);
  position: absolute;
  width: 100%;
}
.slide-right-enter {
  opacity: 0;
  transform: translate(-50px, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate(50px, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate(-50px, 0);
}
</style>

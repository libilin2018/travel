<template>
  <div>
    <city-header></city-header>
    <city-search :cities=cities></city-search>
    <city-list :hotCities=hotCities :cities=cities :letter=letter :ifTapShow=ifTapShow></city-list>
    <city-alphabet
      class="alphabet"
      :cities=cities
      :clientHeight=clientHeight
      @change="handleChange"
      @close="closeTap"
      @open="openTap"
    >
    </city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: '',
      ifTapShow: null,
      clientHeight: null
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCitysInfo () {
      axios.get('/api/city.json')
        .then(this.getCitysInfoSucc)
    },
    getCitysInfoSucc (res) {
      res = res.data
      if (res.ret) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleChange (res) {
      this.letter = res
    },
    closeTap () {
      this.ifTapShow = false
    },
    openTap () {
      this.ifTapShow = true
    }
  },
  mounted () {
    this.getCitysInfo()
    this.clientHeight = document.documentElement.clientHeight
  }
}
</script>

<style lang="stylus" scoped>
  .alphabet
    position: fixed
    right: 0
    top: 1.58rem
    bottom: 0
    width: .4rem
</style>

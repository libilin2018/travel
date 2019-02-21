import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    meta: { index: 0 },
    component: Home
  }, {
    path: '/city',
    name: 'City',
    meta: { index: 1 },
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    meta: { index: 1 },
    component: Detail
  }]
})

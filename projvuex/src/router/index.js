import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Mine from '@/pages/mine'
import Search from '@/pages/search'
import Shoppingcar from '@/pages/shoppingcar'
import Details from '@/pages/details'
import store from '../store'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter:(to,from,next)=>{
        store.commit('changeTitle','主页')
        store.commit('changeLeft','0')
        next()
      } 
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      beforeEnter:(to,from,next)=>{
        store.commit('changeTitle','个人中心')
        store.commit('changeLeft','75%')
        next()
      } 
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      beforeEnter:(to,from,next)=>{
        store.commit('changeTitle','搜索')
        store.commit('changeLeft','25%')
        next()
      } 
    },
    {
      path: '/shoppingcar',
      name: 'shoppingcar',
      component: Shoppingcar,
      beforeEnter:(to,from,next)=>{
        store.commit('changeTitle','购物车')
        store.commit('changeLeft','50%')
        next()
      } 
    },
     {
        path:'/details/:msg',
        name:"details",
        component:Details,
        beforeEnter:(to,from,next)=>{
          store.commit('changeTitle','详细')
          next()
        } 
      } 
  ]
})

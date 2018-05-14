import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Flea from '@/components/flea'
import Recruit from '@/components/recruit'
import DownLoad from '@/components/download'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/flea',
      name:'flea',
      component:Flea
    },
    {
      path:'/recruit',
      name:'recruit',
      component:Recruit
    },
    {
      path:'/down',
      name:'down',
      component:DownLoad
    }
  ]
})

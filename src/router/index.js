import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Map from '@/components/map/map'
import List from '@/components/list/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})

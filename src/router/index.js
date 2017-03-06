import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/views/homeView'
import Map from '@/views/mapView'
import List from '@/views/listView'

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

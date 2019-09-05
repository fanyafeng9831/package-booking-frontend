import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import StorageOfParcels from './components/StorageOfParcels.vue'
import StorageList from './components/StorageList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/storageofparcels',
      name: 'storageofparcels',
      component: StorageOfParcels
    },
    {
      path: '/storageList',
      name: 'storageList',
      component: StorageList
    }
  ]
})

import { RouteRecordRaw } from 'vue-router'
import HelloWorld from '../component/HelloWorld.vue'
import HomeView from '../view/HomeView.vue'

const DynamicAppRouter: Array<RouteRecordRaw> = [
  {
    path: 'hello',
    component: HelloWorld
  },
  {
    path: 'home',
    name: 'home',
    component: HomeView
  },
  {
    path: 'about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../view/AboutView.vue')
  }
]

export default DynamicAppRouter

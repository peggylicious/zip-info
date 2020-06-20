import Vue from 'vue'
// import VueRouter from 'vue-router'
import {IonicVueRouter} from '@ionic/vue'
import Home from '../views/Home.vue'



// Vue.use(VueRouter)
Vue.use(IonicVueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home/index.vue';
import Login from '../views/Login/index.vue';
import Register from '../views/Register';
import Search from '../views/Search';

Vue.use(VueRouter)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Login',
    path: '/login',
    component:Login
  },
  {
    name: 'Register',
    path: '/register',
    component:Register
  },
  {
    
    name: 'Search',
    //params参数，路径必须是：xxx写法才可以
    //xxx?可选的params参数，可以有可以没有
    //必须要填的params参数，没有就重定向到/
    path: '/search/:keyword?',
    component:Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

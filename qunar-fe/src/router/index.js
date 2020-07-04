/*
 * @Description: 
 * @version: 
 * @Author: YoungW
 * @Date: 2020-06-17 17:06:53
 * @LastEditors: YoungW
 * @LastEditTime: 2020-07-04 10:38:34
 */ 
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Login from '@/pages/login/Login'
import Me from '@/pages/me/Me'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ],
  scrollBehavior () {
    return {x: 0, y: 0}
  }
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    let token = localStorage.getItem('token')
    if (token === '' || token === null) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router

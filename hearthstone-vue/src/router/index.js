import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/component/Index'
import Login from '@/component/user/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/',
      name: 'Index',
      component: Index
    },
    {
      path:'/user',
      name: 'Login',
      component: Login
    },

  ]
})

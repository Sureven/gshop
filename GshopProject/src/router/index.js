/*路由器*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
Vue.use(VueRouter)

export default new VueRouter ({
  routes:[
    {
      path:'/msite',
      component: MSite,
      meta: {
        Ft:true
      }
    },
    {
      path:'/search',
      component: Search,
      meta: {
        Ft:true
      }
    },
    {
      path:'/order',
      component: Order,
      meta: {
        Ft:true
      }
    },
    {
      path:'/profile',
      component: Profile,
      meta: {
        Ft:true
      }
    },
    {
      path:'/',
      redirect: '/msite'
    },
    {
      path:'/login',
      component: Login
    },
  ]
})

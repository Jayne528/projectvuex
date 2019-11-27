import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//@在這裡代表src資料夾
import PageTest from '@/components/pages/PageTest'
import PageUser from '@/components/pages/PageUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/abc',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      // name: 'test',
      component: PageTest
    },
    {
      path: '/user/id/:num',
      // name: 'test',
      component: PageUser
    },
    {
      path: '/user/:name',
      // name: 'test',
      component: PageUser
    },
  ]
})

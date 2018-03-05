import Vue from 'vue'
import Router from 'vue-router'

const Hello = resolve => require(['@/components/Hello'], resolve)
const melon = resolve => require(['@/components/melon'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',//"hash" | "history" | "abstract"
  base: __dirname,
  linkActiveClass: 'mo-active',
  routes: [
      {
        path: '/',
        name: 'v-main',
        component: Hello
      },
      {
        path: '/Hello',
        name: 'v-Hello',
        component: Hello
      },
      {
        path: '/melon',
        name: 'v-melon',
        component: melon
      }
    //   {
    //     path: '/v-login/redirect/:redirect',
    //    component: login,
    //    name: 'v-login'
    //  }
  ]
})

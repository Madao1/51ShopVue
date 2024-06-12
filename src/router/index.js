import Vue from 'vue'
import VueRouter from 'vue-router'

import New from '@/views/New.vue'
import Hot from "@/views/Hot.vue";
import Recommend from "@/views/Recommend.vue";

// 解决跳转重复路由报错问题
var routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return routerPush.call(this, location).catch(err => {})
};

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'new',
    component: New
  },
  {
    path: '/hot',
    name: 'hot',
    component: Hot
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: Recommend
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

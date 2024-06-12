import Vue from 'vue'
import App from './App.vue' // 引入根组件
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App) // 渲染视图
}).$mount('#app')

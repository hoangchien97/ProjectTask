import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router/index'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if(to.hash){
      return {selector: to.hash}
    }
    return { x: 0, y: 0 }
  },
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

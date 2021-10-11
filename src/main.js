import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from "./store/store"
import VueAwesomeSwiper from "vue-awesome-swiper";
import 'swiper/swiper-bundle.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)  //全局使用ElementUI

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

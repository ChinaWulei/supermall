import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from "./store/store"
import VueAwesomeSwiper from "vue-awesome-swiper";
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

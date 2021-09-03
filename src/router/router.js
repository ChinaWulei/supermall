import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=>import("../views/content/Home/Home")
const Kind = ()=>import("../views/content/Kind/Kind")
const ShoppingCar = ()=>import("../views/content/ShoppingCar/ShoppingCar")
const My = ()=>import("../views/content/My/My")
import detail from "../views/content/Detail/detail";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "",
      redirect: "/Home"
    },
    {
      path: "/Home",
      component: Home
    },
    {
      path: "/Kind",
      component: Kind
    },
    {
      path: "/ShoppingCar",
      component: ShoppingCar
    },
    {
      path: "/My",
      component: My
    },
    {
      path: "/detail/:id",
      component: detail
    }
  ],
})

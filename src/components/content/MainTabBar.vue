<template>
  <div class="MainTabBar">
    <tab-bar>
      <template v-slot>
        <tab-bar-item path="/Home">
          <template v-slot:activeImg>
            <img src="@/assets/img/tabbar/home_active.svg" alt="">
          </template>
          <template v-slot:Img>
            <img src="@/assets/img/tabbar/home.svg" alt="">
          </template>
          <template v-slot:text>
            <p>首页</p>
          </template>
        </tab-bar-item>
        <tab-bar-item path="/Kind">
          <img src="@/assets/img/tabbar/category_active.svg" alt="" slot="activeImg">
          <img src="@/assets/img/tabbar/category.svg" alt="" slot="Img">
          <p slot="text">分类</p>
        </tab-bar-item>
        <tab-bar-item path="/ShoppingCar">
          <img src="@/assets/img/tabbar/shopcart_active.svg" alt="" slot="activeImg">
          <img src="@/assets/img/tabbar/shopcart.svg" alt="" slot="Img">
          <p slot="text">购物车</p>
        </tab-bar-item>
        <tab-bar-item path="/My">
          <img src="@/assets/img/tabbar/profile_active.svg" alt="" slot="activeImg">
          <img src="@/assets/img/tabbar/profile.svg" alt="" slot="Img">
          <p slot="text">我的</p>
        </tab-bar-item>

      </template>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../common/TabBar";
import TabBarItem from "../common/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
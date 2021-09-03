<template>
  <div class="GoodsList">
  <GoodsItems v-for="good in Goods" :good-item="good"></GoodsItems>
  </div>
</template>

<script>
import GoodsItems from "./GoodsItems";

export default {
  name: "GoodsList",
  props: {
    Goods: {
      type: Array,
      default(){
        return [];
      }
    }
  },
  components: {
    GoodsItems
  }
}
</script>

<style scoped>
  .GoodsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>
<template>
  <div class="GoodsItems" @click="toDetail">

      <img :src="GoodItem.imgUrl" alt="" @load="finishLoadImg">
      <div class="text1">{{GoodItem.text}}</div>
      <div class="text2">
        <span class="span1">{{GoodItem.buy | normlizePerson}}人已购</span>
        <span class="span2">{{GoodItem.price | normlizePrice}}</span>
      </div>

  </div>
</template>

<script>
export default {
  name: "GoodsItems",
  methods: {
    finishLoadImg(){
      this.$bus.$emit("finishUploadImg")
    },
    toDetail(){

      this.$store.commit("updateDetail" , {detailText: this.GoodItem.text , detailPrice: this.GoodItem.price , detailBuy: this.GoodItem.buy} )
      this.$router.push("/detail/" + this.GoodItem.id)
    }
  },
  props: {
    GoodItem: {
      type: Object
    }
  },
  filters: {
    normlizePrice(price){
      return "￥" + parseFloat(price).toFixed(2)
    },
    normlizePerson(person){
      if(person>=10000){
        let res = person/10000;
        return Math.floor(res) + "万+";
      }

    }
  }
}
</script>

<style scoped>
  .GoodsItems {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    text-align: center;
    font-size: 12px;
    padding: 5px;
  }

  .GoodsItems .text1 {
    width: 100%;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  .GoodsItems img {
    width: 100%;
    border-radius: 10px;
  }

  .GoodsItems .span1 {
    padding: 10px;
  }

  .GoodsItems .span2 {

  }

  @media screen and (min-width: 768px) {
    .GoodsItems {
      width: 23%;
    }
  }
</style>
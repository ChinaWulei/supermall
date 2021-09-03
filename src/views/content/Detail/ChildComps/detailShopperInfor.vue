<template>
  <div>
    <div class="shopperInfor">
      <img :src="infor.shopperPhoto" alt="" class="shopperPhoto">
      <div class="center">

        <span>{{infor.shopName}}</span>
        <img src="../../../../assets/img/detail/img_1.png" alt="">
      </div>

    </div>
    <div class="score">
      <div style="text-align: left">宝贝描述：{{infor.goodDescription}}</div>
      <div style="text-align: center;">卖家服务：{{infor.shopperService}}</div>
      <div style="text-align: right;">物流服务：{{infor.transService}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailShopperInfor",
  props: {
    infor: Object,
  }
}
</script>

<style scoped>
  .shopperInfor {
    display: flex;
    width: 90%;
    height: 40%;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .shopperPhoto{
    width: 15%;
  }

  .center {
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    color: #333333;
    font-size: 16px;
  }

  .score {
    font-size: 16px;
    width: 90%;
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

</style>
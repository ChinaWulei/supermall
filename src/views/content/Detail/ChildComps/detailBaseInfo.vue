<template>
  <div class="detail">
    <div class="detailBaseInfo">
      <div class="detailText">
        {{$store.state.detailText}}
      </div>
      <div class="detailPrice">
        <div class="price">
          {{$store.state.detailPrice | normlizePrize}}
          <span class="lastPrice">{{baseInfo.lastPrice | normlizePrize}}</span>
        </div>
        <span class="description">{{baseInfo.description}}</span>
      </div>
      <div class="lastBaseInfo">
        <div class="buy"> {{$store.state.detailBuy | normlizeBuy}}</div>
        <div class="address">{{baseInfo.address}}</div>
        <div class="sendGoodTime">{{baseInfo.sendGoodTime}}</div>
      </div>
      <hr>
      <div class="baseDescript">
        <div>退货补运费</div>
        <div>全国包邮</div>
        <div><img src="../../../../assets/img/detail/img.png" alt="">七天无理由退货</div>
      </div>
    </div>
    <div style="background-color: rgb(248, 248, 248); height: 8px;"></div>

  </div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  props: {
    baseInfo: Object
  },
  filters: {
    normlizePrize(price){
      return "￥" + price.toFixed(2)
    },
    normlizeBuy(buy){
      return "销量 " + buy;
    }
  }
}
</script>

<style scoped>
  .detailText {
    text-indent: 1em;
  }

  .detailBaseInfo {
    padding: 5px;
    width: 90%;
    margin: auto;
    margin-top: 19px;
  }

  .detailPrice {
    display: flex;
    align-items: center;
    margin-top: 5px;
    height: 30px;

  }

  .lastPrice {
    text-indent: 0;
    font-size: 12px;
    color: #666666;
    text-decoration: line-through;
  }

  .price {
    display: flex;
    height: 100%;
    align-items: flex-end;
    font-size: 20px;
    color: var(--color-high-text);
  }

  .description {
    font-size: 14px;
    width: 70px;
    text-align: center;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    background-color: var(--color-high-text);
    color: #ffffff;
  }

  .lastBaseInfo {
    display: flex;
    margin-top: 15px;
    justify-content: space-between;
    font-size: 14px;
  }

  hr {
    margin-top: 10px;
  }

  .baseDescript {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }
</style>
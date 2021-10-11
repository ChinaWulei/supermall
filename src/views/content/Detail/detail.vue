<template>
  <div class="detail">
    <detail-nav-bar class="nav"></detail-nav-bar>
    <BScroll class="BS">
      <Lunbo :imgs="LunboImgs" class="Lunbo" :flag="1" :hei="320"></Lunbo>
      <detail-base-info :base-info="baseInfo"></detail-base-info>
      <detail-shopper-infor :infor="baseInfo.shopperInfor"></detail-shopper-infor>
    </BScroll>

  </div>
</template>

<script>
import detailNavBar from "./ChildComps/detailNavBar";
import detailBaseInfo from "./ChildComps/detailBaseInfo";
import detailShopperInfor from "./ChildComps/detailShopperInfor";

import Lunbo from "../../../components/common/Lunbo";
import BScroll from "../../../components/common/BetterScroll"
import {requestDetailLunbo} from "../../../network/Detail/DetailNetWork";

export default {
  name: "detail",
  components: {
    detailNavBar,
    Lunbo,
    detailBaseInfo,
    BScroll,
    detailShopperInfor
  },
  data(){
    return {
      paramId: null,
      baseInfo: null,
      LunboImgs: [],
    }
  },
  created() {            //组件一创立 ，则向后台发送网络请求
    this.paramId = this.$route.params.id;
    requestDetailLunbo({
      url: "requestDetail",
      method: "get",
      params: {
        id: this.paramId
      }
    }).then(result => {
      console.log(result.data)
      this.baseInfo = result.data
      this.LunboImgs = this.baseInfo.lunboImg.split("|")

    })
  },
  methods: {

  }
}
</script>

<style scoped>


  .detail {
    position: relative;
    z-index: 100;
    background-color: #ffffff;
  }

  .Lunbo {
    margin-top: 49px;
    height: 320px;
  }

  .BS {
    position: absolute;
    overflow: hidden;
    top: 0px;
    bottom: 0px;
    left: 0;
    right: 0;
    height: 519px;
    background-color: #ffffff;
  }
</style>
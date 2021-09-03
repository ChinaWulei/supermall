<template>
  <div>
    <NavBar>
      <template v-slot:left>
        <div class="NavBack" @click="back"><img src="../../../../assets/img/detail/back.svg" alt=""></div>
      </template>
      <template v-slot:center>
        <div v-for="(text , index) in NavText"
             class="NavText"
             :class="{isActive: index===currentIndex}"
              @click="toActive(index)">{{text}}</div>
      </template>
    </NavBar>
  </div>
</template>

<script>

import {requestDetailLunbo} from "../../../../network/Detail/DetailNetWork";

import NavBar from "../../../../components/common/NavBar";

export default {
  name: "detailNavBar",
  components: {
    NavBar
  },
  data(){
    return {
      paramId: 0,
      currentIndex: 0,
      NavText: ["商品" , "参数" , "评论" , "推荐"],
    }
  },
  methods: {
    toActive(index){
      this.currentIndex = index;
    },
    back(){
      this.$router.back()
    }
  }

}
</script>

<style scoped>
  .NavText {
    flex: 1;
    font-size: 12px;
  }

  .isActive {
    color: var(--color-high-text);
  }
  
  .NavBack {
    text-align: center;
  }

  .NavBack img {
    margin-top: 13px;
    height: 20px;
  }
</style>
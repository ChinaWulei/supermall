<template>
  <div class="Home">
   <NavBar class="home-NavBar">
      <template v-slot:center>
        <div class="NavText">购物街</div>
      </template>
    </NavBar>
    <TabControl v-show="isTabFixed"
                    :items="['流行' , '新款' , '精选']"
                    class="tabControl2"
                    @changeCurrentIndex="changeCurrent"
                    ref="TControl1">

    </TabControl>

     <BScroll class="BScroll"
              ref="BS"
              :probe-type="3"
              :is-pull-upload="true"
              @changePosition="showToTop"
              @RequestMore="RequestMore">
       <template v-slot>
         <Lunbo :hei="120" :imgs="Lunbo" class="Lunbo" @finishLoadLunbo="finishLoadLunbo"></Lunbo>
         <HomeRecommend :recommends="recommends"></HomeRecommend>
         <HomeWeekRecommend :week-recommend="weekRecommend"></HomeWeekRecommend>
         <template>
           <div>
             <TabControl :items="['流行' , '新款' , '精选']"
                         class="tabControl"
                         @changeCurrentIndex="changeCurrent"
                         ref="tabC"></TabControl>
           </div>
         </template>
         <GoodsList v-if="isNull == false" :Goods="Goods.goodsOfPage.goods"></GoodsList>

       </template>
     </BScroll>

    <BackToTop @click.native="toTop" v-show="isShowToTop"></BackToTop>

  </div>
</template>

<script>
import {requestLunbo , requestHomeRecommend , requestHomeWeekRecommend , requestHomeGoods} from "../../../network/Home/HomeNetwork";

import HomeRecommend from "./ChildComps/HomeRecommend";
import HomeWeekRecommend from "./ChildComps/HomeWeekRecommend";

import GoodsList from "../../../components/content/Goods/GoodsList";
import NavBar from "../../../components/common/NavBar";
import Lunbo from "../../..//components/common/Lunbo";
import TabControl from "../../../components/content/TabControl";
import BScroll from "../../../components/common/BetterScroll"
import BackToTop from "../../../components/content/BackToTop";


export default {
  name: "Home",
  components: {
    NavBar,
    Lunbo,
    HomeRecommend,
    HomeWeekRecommend,
    TabControl,
    GoodsList,
    BScroll,
    BackToTop
  },
  created() {            //该组件一创立,就向服务器发送网络请求
    this.getLunbo();                  //请求首页的轮播图数据
    this.getHomeRecommend();
    this.getHomeWeekRecommend();
    this.changeCurrent(0)      //请求首页流行栏的众多商品数据 , 0代表请求流行栏的数据，1代表新款  2代表精选
  },
  mounted() {
    const refresh =  this.debounce(this.$refs.BS.refresh , 300)

    this.$bus.$on("finishUploadImg" , () => {
      refresh()
    })
  },
  data(){
    return {
      isNull: false,
      Lunbo: [],          //轮播图
      recommends: [],       //推荐
      weekRecommend: [],         //每周推荐
      Goods: {
        type: "流行",
        goodsOfPage: {
          page: 0,
          goods: []
        }
      },
      isShowToTop: false,
      isTabFixed: false,
      topDistance: 0,
      recentY: 0                             //保存该路由页面原先的位置
    }
  },
  activated() {
    this.$refs.BS.Bscroll.scrollTo(0 , this.recentY , 1000)
    this.$refs.BS.Bscroll.refresh()
  },
  deactivated() {
    this.recentY = this.$refs.BS.Bscroll.y
  },
  methods: {
    debounce(func , delay){         //防抖函数
      let timer = null;
      return function (...args) {
        if(timer)
          clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this , args)
        } , delay)
      }
    },
    getLunbo(){
      requestLunbo({
        url:  "LunboImgs",
        method: "get"}).then(result => {
        this.Lunbo = result.data
      })
    },
    getHomeRecommend(){
      requestHomeRecommend({
        url: "getHomeRecommend",
        method: "get"
      }).then(result => {
        this.recommends = result.data
      })
    },
    getHomeWeekRecommend(){
      requestHomeWeekRecommend({
        url: "getWeekRecommend",
        method: "get"
      }).then(result => {
        this.weekRecommend = result.data;
      })
    },
    changeCurrent(index){
      this.$nextTick(() => {
        this.$refs.tabC.currentIndex = index
        this.$refs.TControl1.currentIndex = index
      });
      if(index == 0){
        this.Goods.type = "流行";
        this.Goods.goodsOfPage.page = 0
      }
      else if(index == 1){
        this.Goods.type = "新款";
        this.Goods.goodsOfPage.page = 0
      }
      else{
        this.Goods.type = "精选";
        this.Goods.goodsOfPage.page = 0
      }

      requestHomeGoods({
        url: "requestHomeGoods",
        method: "get",
        params: {
          'page': this.Goods.goodsOfPage.page+1,
          'type': this.Goods.type
        }
      }).then(result => {
        if(result.data!=""){
          this.isNull = false;
          console.log(result.data)
          this.Goods = result.data;
        }
        else{
          this.isNull = true;    //当后台没有商品数据
        }
      })
    },
    toTop(){
      this.$refs.BS.toTop();
    },
    showToTop(position){
      if((-position.y)>500){
        this.isShowToTop = true
      }
      else{
        this.isShowToTop = false
      }

      if((-position.y)>this.topDistance){
        this.isTabFixed = true
      }
      else {
        this.isTabFixed = false
      }
    },
    RequestMore(){
      requestHomeGoods({
        url: "requestHomeGoods",
        method: "get",
        params: {
          'page': this.Goods.goodsOfPage.page+1,
          'type': this.Goods.type
        }
      }).then(result => {
        if(result.data!=""){
          this.Goods.goodsOfPage.goods.push(...result.data.goodsOfPage.goods)
          this.Goods.goodsOfPage.page+=1
        }
        this.$refs.BS.finishPullUp()
      })
    },
    finishLoadLunbo(){
      this.topDistance = this.$refs.tabC.$el.offsetTop;
    }

  },


}
</script>

<style scoped>
  .home-NavBar {
    background-color: var(--color-tint);
    color: #fff;
  }

  .Home {
    position: relative;
/*    height: calc(100% - 98px);*/
  }

  .tabControl {
    position: sticky;
    top: 49px;
    margin-top: 15px;
    z-index: 9;
  }

 .BScroll {
   height: 470px;
   min-height: 100%;
   position: absolute;
   top: 49px;
   bottom: 49px;
   left: 0;
   right: 0;
   overflow: hidden;
 }

  .tabControl2 {
    width: 100%;
   position: fixed;
    z-index: 100;
    top: 49px;
    margin-top: 0;

 }

  .NavText {
    flex: 1;
  }

</style>
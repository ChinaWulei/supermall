<template>
  <div class="Lunbo" :style="calcHeight">
    <swiper :options="swiperOptions">
        <swiper-slide v-for="img in imgs">
          <img :src="img" @load="finishLoadLunboImg" :style="calcHeight"  v-if="flag==1">
          <a :href="img.toUrl" v-else><img :src="img.imgUrl" @load="finishLoadLunboImg" :style="calcHeight"></a>
        </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

  </div>

</template>

<script>

export default {
  name: "Lunbo",
  props: {
    imgs: {
      type: Array,
    },
    flag: 0,
    hei: 0
  },
  data(){
    return {
      flag: 0,
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction : false,
        effect: "coverflow",
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      }
    }
  },
  computed: {
    calcuImgsLength(){
      return this.imgs.length;
    },

  },
  methods: {
    finishLoadLunboImg(){
      this.$emit("finishLoadLunbo")
    },
    calcHeight() {
      return {height: this.hei}
    }
  }
}

</script>

<style scoped>

  .Lunbo img {
    width: 100%;
  }
</style>
<template>
  <div class="HomeRecommend">

    <a v-for="recommend in recommends" :href="recommend.toUrl">
      <div class="Recommend">
        <div><img :src="recommend.imgUrl" alt=""></div>
        <div>{{recommend.text}}</div>
      </div>
    </a>





  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
  .HomeRecommend {
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .HomeRecommend a {

    height: 100%;
    width: 25%;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    align-items: center;

  }


  .Recommend :nth-child(1) {
    text-align: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-bottom: 10px;

  }

  .Recommend :nth-child(2) {
    flex: 1;
    text-align: center;
  }

  .Recommend img {
    width: 100%;
    height: 100%
  }
</style>
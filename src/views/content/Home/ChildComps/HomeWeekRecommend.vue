<template>
  <div class="WeekRecom">
    <div class="firstChild"><p>本周推荐</p></div>

    <div>
      <a v-for="recom in weekRecommend" :href="recom.toUrl" class="grandC">
          <img :src="recom.imgUrl" alt="">
          <div class="WeekRecomText">{{recom.text}}</div>
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: "HomeWeekRecommend",
  props: {
    weekRecommend: {
      type: Array,
      default: [],
      required: true
    }
  }
}
</script>

<style scoped>
  .WeekRecom {
    display: flex;
    flex-direction: column;

    text-align: center;
  }

  .WeekRecom .firstChild {
    display: table;
    height: 20%;
    vertical-align: middle;
  }

  .WeekRecom .firstChild p {
    display: table-cell;
    vertical-align: middle;
  }

  .WeekRecom :nth-child(2) {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-between;
  }



  .WeekRecom .grandC {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 25%;
    padding: 10px;
    height: 50%;
  }

  .WeekRecom .grandC img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .grandC .WeekRecomText {
    font-size: 12px;
    width: 80%;
    flex: 1;
    text-overflow:ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

</style>
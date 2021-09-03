<template>
  <div>
    <img src="../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackToTop"
}
</script>

<style scoped>
  div {
    position: fixed;
    bottom: 49px;
    right: 0;
  }

  div img {
    height: 60px;
    width: 60px;
  }
</style>
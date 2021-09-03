<template>
  <div class="NavBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .NavBar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 49px;
    line-height: 49px;
    width: 100%;
    z-index: 100;
  }

  .NavBar .left , .NavBar .right {
    width: 60px;
  }

  .NavBar .center {
    flex: 1;
    display: flex;
    text-align: center;
  }


</style>
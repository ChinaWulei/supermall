<template>
  <div class="TabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data(){
    return {

    }
  },


}
</script>

<style scoped>
  .TabBar {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 49px;
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    z-index: 9;

  }
</style>
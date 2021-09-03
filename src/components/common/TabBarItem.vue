<template>
  <div class="TabBarItem" @click="toActive()">
    <div class="TabBarItemActiveImg" v-if="isActive"><slot name="activeImg"></slot></div>
    <div class="TabBarItemImg" v-else><slot name="Img"></slot></div>
    <div class="TabBarItemText" :style="isActiveColor"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  methods: {
    toActive() {
      this.$router.replace(this.path)
    }
  },

  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1;
    },
    isActiveColor(){
      return this.isActive?{color: this.activeColor}:{}
    }
  },

  props: {
    activeColor: {
      type: String,
      default: "#ff5777"
    },
    path: String
  }
}
</script>

<style scoped>
 .TabBarItem {
   flex: 1;
   text-align: center;
 }

 .TabBarItem img {
   width: 24px;
   height: 24px;

 }
</style>
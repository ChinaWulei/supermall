<template>
  <div class="tabControl">
    <div v-for="(item , index) in items" class="tabCItem" :class="{isCurrent: index===currentIndex}" @click="chooseYou(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data(){
    return {
      currentIndex: 0
    }
  },
  props: {
    items: {
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    chooseYou(index) {
      if(index == this.currentIndex)
        return;
      this.currentIndex = index;
      this.$emit("changeCurrentIndex" , this.currentIndex );
    },
    changeCurrent(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>

  .tabControl {
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: flex;
    background-color: #fff;
  }

  .tabCItem {
    flex: 1;
  }

  .isCurrent {
    color: var(--color-high-text);
  }

  .isCurrent span {
    border-bottom: 3px solid var(--color-high-text);
    padding: 6px;
  }

</style>
<template>
  <div class="scroll" ref="scroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
/*import ObserveDOM from "@better-scroll/observe-dom"
BScroll.use(ObserveDOM)*/

export default {
  name: "BetterScroll",
  data(){
    return {
      Bscroll: null,
    }
  },
  props: {
    probeType: {
      default: 0
    },
    IsPullUpload: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.Bscroll = new BScroll(this.$refs.scroll , {
      probeType: this.probeType,
      pullUpLoad: this.IsPullUpload,
      click: true,
    })

    this.Bscroll.on("scroll" , (position) => {
      this.$emit("changePosition" , position)
    })

    this.Bscroll.on("pullingUp" , () => {         //上拉加载更多
      this.$emit("RequestMore")
    })
  },
  methods: {
    toTop(){
      this.Bscroll.scrollTo(0 , 0 , 500)
    },
    refresh(){
      this.Bscroll.refresh();
    },
    finishPullUp(){
      this.Bscroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>
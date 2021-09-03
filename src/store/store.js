import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    detailText: null,
    detailPrice: 0,
    detailBuy: 0,
  },
  mutations: {
    updateDetail(state , map){
      this.state.detailText = map.detailText;
      this.state.detailPrice = map.detailPrice;
      this.state.detailBuy = map.detailBuy;
    }
  },
  actions: {

  }
})

export default store

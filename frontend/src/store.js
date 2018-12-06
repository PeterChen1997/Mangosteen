import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAsideMenuOpen: true
  },
  mutations: {
    changeAsideOpenStatus (state, payload) {
      this.state.isAsideMenuOpen = payload
    }
  },
  actions: {

  }
})

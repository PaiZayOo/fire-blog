import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editPost : null,
  },
  getters: {
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})

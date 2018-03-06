import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: true
  },
  mutations: {
    checkLogin (state, code) {
        state.isLogin = code
    }
  }

});

export default store

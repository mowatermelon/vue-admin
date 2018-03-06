import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: true,
    themeType:'blue'
  },
  mutations: {
    checkLogin (state, code) {
        state.isLogin = code
    },
    setTheme (state, code) {
      state.themeType = code
    }
  }

});

export default store

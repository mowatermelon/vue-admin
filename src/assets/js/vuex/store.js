import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: true,
    themeType:'blue',
    userName:''
  },
  mutations: {
    checkLogin (state, code) {
        state.isLogin = code
    },
    setTheme (state, code) {
      state.themeType = code
    },
    setUName (state, code) {
      state.userName = code
    }
  }

});

export default store

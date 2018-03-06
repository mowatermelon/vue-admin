import Vue from 'vue'
import Vuex from 'vuex'
require('../../../service/loStorage')

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: JSON.parse(localStorage.getItem('isLogin')),
    themeType: localStorage.getItem('themeType'),
    userName: localStorage.getItem('userName')
  },
  mutations: {
    checkLogin (state, code) {
        localStorage.setItem('isLogin',code);
        state.isLogin = JSON.parse(localStorage.getItem('isLogin'));
    },
    setTheme (state, code) {
      localStorage.setItem('themeType',code);      
      state.themeType = localStorage.getItem('themeType');
    },
    setUName (state, code) {
      localStorage.setItem('userName',code);      
      state.userName = localStorage.getItem('userName');
    }
  }

});

export default store

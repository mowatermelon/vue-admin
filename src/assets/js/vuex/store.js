
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    update_car: '',
    isLogin: true
  },
  mutations: {
    getUpdate (state, code) {
        state.update_car = code
    },
    checkLogin (state, code) {
        state.isLogin = code
    }
  }

});

export default store

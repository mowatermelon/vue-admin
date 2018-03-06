import Vue from 'vue'
import Vuex from 'vuex'
import loS from '../../../service/loStorage'

//在使用vuex之前使用，先初始化相关数据
const init = [
  {name:'isLogin',value:'true'},
  {name:'themeType',value:'blue'},
  {name:'userName',value:''}
];

loS.initData(init);

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLogin: loS.getItem('isLogin',false),
    themeType: loS.getItem('themeType',true),
    userName: loS.getItem('userName',true)
  },
  mutations: {
    checkLogin (state, code) {
        localStorage.setItem('isLogin',code);
        state.isLogin = loS.getItem('isLogin',false);
    },
    setTheme (state, code) {
      loS.setItem('themeType',code);      
      state.themeType = loS.getItem('themeType',true);
    },
    setUName (state, code) {
      loS.setItem('userName',code);      
      state.userName = loS.getItem('userName',true);
    }
  }

});

export default store

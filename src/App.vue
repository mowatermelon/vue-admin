<template>
  <div id="app">
    <div v-if="isLogin">
      <login @increment="checkLogin"></login>
    </div>
    <div v-if="!isLogin">
      <layout></layout>
    </div>
  </div>
</template>
<script>
import Login from './pages/Login'
import Layout from './layouts/HeaderAsideFooterResponsiveLayout/Layout'

// Vue.use(Vuex)
export default {
  name: 'app',
  data () {
    let that = this;
    return {
      // isLogin: this.$store.state.isLogin
      isLogin: true
    }
  },
  mounted: function(){
      // let that = this;
  },
  components:{
      Login,
      Layout
  },
  methods:{
    checkLogin (state) {
      console.log('checkLogin');
      // console.log(state);

      let that = this;
      if(typeof(state)!="boolean"){
        state = false;
      }
      that.isLogin = state;
    }
  }
}

</script>

<style lang="scss">
   @import '../static/css/normal.css';
   @import '../static/css/bootstrap.min.css';
   @import './assets/css/appMap.scss';
</style>

<template>
  <div id="app">
    <div v-if="isLogin">
      <login></login>
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
    return {
    }
  },
  computed: {
    isLogin () {
      let res;      
      let _this = this;
      let _route = _this.$route;
      console.log(_route.query);
      if(_route.query.hasOwnProperty('tabIndex')&&_route.path !=='/'){
          //已经登录成功的用户，保证不必在页面刷新之后重复登录了
          res = false;
      }else{
          res = this.$store.state.isLogin;
      }
      return res;
    }
  },
  mounted() {
  },
  components:{
      Login,
      Layout
  },
  methods:{
  }
}

</script>

<style lang="scss">
   @import '../static/plugins/css/normal.css';
   @import '../static/plugins/css/bootstrap.min.css';
   @import './assets/css/app.scss';
</style>

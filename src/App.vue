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
      return this.$store.state.isLogin;
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

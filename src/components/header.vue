<template>
  <div class="mo-oa-header">
    <div class="navbar-header col-xs-2 col-sm-6">
      <i class="glyphicon glyphicon-globe"></i>
      <h1 class="mo-text">watermelon admin</h1>
    </div>
    <div class="col-xs-7 col-sm-4 col-md-4 col-lg-3 pull-right">
      <div class="theme col-xs-4 col-sm-5">
        <p class="navbar-text mo-text text-center">
          切换主题<br/>
          <span v-for='(type,index) in themeType' :key='index' @click="changeTheme(type)" class="badge" :class="'theme-'+type">{{index}}</span>&nbsp;&nbsp;
        </p>
      </div>

      <div class="login col-xs-7 col-sm-7">
        <p class="navbar-text mo-text">
          <span class="glyphicon glyphicon-user" alt="用户头像"></span>
          {{uName}}<br/>研发部
        </p>

        <button type="button" class="btn btn-link" @click="loginOut">
          <i class="glyphicon glyphicon-log-out"></i>退出
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vheader',
  data () {
    return {
      changeType:'',
      themeType:['blue','pure','dark']
    }
  },
  computed: {
    uName () {
      return this.$store.state.userName;
      
    }
  },
  methods: {
    changeTheme(type){
      console.log('checkTheme：'+type);
      let _this = this;
      _this.$store.commit('setTheme',type);
    },
    goDashboard(){
      console.log('goDashboard');
    },
    goSetting(){
      console.log('goSetting');
    },
    loginOut(){
      let _this = this;
      _this.$store.commit('checkLogin',true);
      // _this.$router.push({path: '/'});
      console.log('loginOut');
    }
  }
}
</script>
<style lang="scss" scoped>
$slogan_size:4rem;
$slogan_padding:1rem;

.navbar-header{
  .glyphicon.glyphicon-globe{
    font-size:$slogan_size;
  }
}
.mo-text{
  display: inline-block;
  margin: 0;
  vertical-align: top;
  cursor: pointer;
}

</style>

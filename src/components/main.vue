<template>
  <div id="main" class="mo-container" :class="'mo-theme-'+tcolor">
    <mo-header @increment="checkTheme"></mo-header>
    <main-view></main-view>
  </div>
</template>
<script>
import mainView from './mainbar'
import moHeader from './header'

export default {
  name: 'mainOa',
  data () {
    return {
      tcolor:'blue'
    }
  },
  methods:{
    checkTheme (state) {
       console.log('checkTheme');
      // console.log(state);

      let that = this;
      if(typeof(state)!="boolean"){
        state = false;
      }
      that.tcolor = 'dark';
    }
  },
  components:{
      moHeader,
      mainView
  }

}

</script>
<style lang="scss">
</style>

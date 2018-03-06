<template>
  <transition name="fade">
    <div id="main" class="mo-container" :class="'mo-theme-'+tcolor">
      <v-header @increment="checkTheme"></v-header>
      <main>
        <left-aside></left-aside>
        <aside class="mo-oa-main">
          <router-view></router-view>
        </aside>
    </main>
    </div>
  </transition>
</template>
<script>
import VHeader from '../../components/Header'
import LeftAside from '../../components/LeftAside'

export default {
  name: 'Layout',
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
      VHeader,
      LeftAside
  }

}

</script>
<style lang="scss">
</style>

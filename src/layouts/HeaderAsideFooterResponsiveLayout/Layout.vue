<template>
  <transition name="fade">
    <div id="main" class="mo-container" :class="'mo-theme-'+tcolor">
      <v-header></v-header>
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
    }
  },
  computed: {
    tcolor () {
      return this.$store.state.themeType;
    }
  },
  methods:{
  },
  components:{
      VHeader,
      LeftAside
  }

}

</script>
<style lang="scss">
</style>

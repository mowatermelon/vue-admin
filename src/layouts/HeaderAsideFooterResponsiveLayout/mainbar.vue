<template>
  <main>
      <leftbar></leftbar>
      <!-- <hello class="mo-oa-main"></hello> -->
      <!-- <Overall></Overall> -->
      <aside class="mo-oa-main">
        <router-view></router-view>
      </aside>
  </main>
</template>

<script>
import leftbar from './leftbar'

export default {
  name: 'mainView',
  data () {
    return {
    }
  },
  components:{
    leftbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


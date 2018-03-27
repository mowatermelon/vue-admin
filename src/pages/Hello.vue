<template>
  <div id="Hello">
    <p class="alert alert-success">
      由西瓜酱提供包含三种颜色主题的vue后台操作模板
    </p>
    <p class="alert alert-warning">当前激活面板信息：第{{$route.query.tabIndex}}个面板的第{{$route.query.listIndex}}个子面板</p>

    <p v-for="count in 3" class="alert alert-info" :key="count">{{msg}}</p>
    <p class="alert alert-danger">重要的话要说三遍</p>
    <m-form></m-form>
  </div>
</template>

<script>
import MForm from '../components/MForm'

export default {
  name: 'Hello',
  data () {
    return {
      msg:"欢迎来到西瓜的小屋123456"
    }
  },
  components:{
    MForm
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>

</style>

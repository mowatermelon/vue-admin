<template>
  <div id="melon">
    <p class="alert alert-success">
      由西瓜酱提供包含三种颜色主题的vue后台操作模板
    </p>
    <p class="alert alert-warning">当前激活面板信息：第{{$route.query.tabIndex}}个面板的第{{$route.query.listIndex}}个子面板</p>

    <p v-for="count in 3" class="alert alert-info">{{msg}}</p>
    <p class="alert alert-danger">重要的话要说三遍</p>
  </div>
</template>

<script>
export default {
  name: 'melon',
  data () {
    return {
      msg:"欢迎来到西瓜的小屋"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>

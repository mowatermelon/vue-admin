<template>
  <div class="hello" id="hello">
    <p class="alert alert-success">
      由西瓜酱提供包含三种颜色主题的vue后台操作模板
    </p>
    <p class="alert alert-warning">当前激活面板信息：第{{$route.query.tabIndex}}个面板的第{{$route.query.listIndex}}个子面板</p>

    <p class="alert alert-info">
      模板已完成功能：
      <span v-for="(list,index) in lists" :key='index' >{{list}}&nbsp;&nbsp;&nbsp;</span>
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Hello',
  data () {
    return {
      lists: ['']
    }
  },
  created:function(){
    let that = this;
    axios
      .get('../../static/mock/completeList.json')
      .then((response) => {
        console.log("请求到的已完成功能数据是");        
        console.log(response.data);
        that.lists = response.data || [];
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello{
  color:#333333;
}
</style>

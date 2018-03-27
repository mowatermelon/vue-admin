<template>
  <div id="Feature">
    <p class="alert alert-success">
      由西瓜酱提供包含三种颜色主题的vue后台操作模板
    </p>
    <p class="alert alert-warning">当前激活面板信息：第{{$route.query.tabIndex}}个面板的第{{$route.query.listIndex}}个子面板</p>

    <p class="alert alert-info">
      模板已完成功能：<br/>
      <span v-for="(list,index) in lists" :key='index' >{{index+'---'+list}}&nbsp;&nbsp;&nbsp;<br/></span>
    </p>
  </div>
</template>

<script>
import {getAjax} from '../service/moAjax'

export default {
  name: 'Feature',
  data () {
    return {
      lists: ['']
    }
  },
  created:function(){
    let that = this;
    getAjax('../../static/mock/completeList.json')
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

<style lang="scss" scoped>

</style>

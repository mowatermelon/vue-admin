<!--左侧面板信息-->
<template>
  <div class="mo-oa-leftbar">
    <div class="panel panel-oa" v-for="(tab, tindex) in Tabs" :key='tindex' >
      <div class="panel-heading" @click="collapseTab(tindex)">
        <h4 class="panel-title">
          <span data-toggle="collapse" :data-href="'#tab'+tindex">
            <i class="glyphicon" :class="'glyphicon-'+tab.icon"></i><span class="mo-text">&nbsp;&nbsp;&nbsp;&nbsp;{{tab.title}}</span>
            <i class="glyphicon glyphicon-menu-down pull-right"></i>
          </span>
        </h4>
      </div>
      <div :id="'tab'+tindex" class="panel-collapse collapse" :class="{'in': isActive == tindex}">
        <div class="panel-body">
          <ul class="list-group">
            <li class="list-group-item" v-for="(list,lindex) in tab.content" :key='lindex' :class="{'active': isActiveList == (tindex+'--'+lindex)}" @click="goRouter(tindex,lindex)" >
              <router-link :to="{path:list.link,query: {tabIndex: tindex+1,listIndex:lindex+1}}" class="mo-text">
                <i class="glyphicon" :class="'glyphicon-'+list.icon"></i>
                <span class="mo-text">&nbsp;&nbsp;&nbsp;&nbsp;{{tindex+1}}--{{list.text}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <vfooter></vfooter>
  </div>
</template>
<script>

import Hello from '../pages/Hello'
import Feature from '../pages/Feature'
import Vfooter from './Footer'
import {getAjax} from '../service/moAjax'

export default {
    name: 'LeftAside',
    data() {
      return {
        isActive: 0,// 默认的tab数
        isActiveList: '0--0',// 默认激活的子面板编号
        Tabs: []
        }
    },
    methods: {
      collapseTab: function(ind) {
        this.isActive = ind;
      },
      goRouter: function(tabIndex,listIndex) {
        this.isActiveList = tabIndex+'--'+listIndex;
      }
    },
    components:{
      Hello,
      Feature,
      Vfooter
    },
  created:function(){
    let that = this;
    getAjax('../../static/mock/leftAsideData.json')
      .then((response) => {
        console.log("请求到的面板数据是");
        console.log(response.data);
        that.Tabs = response.data || [];
      })
      .catch((error) => {
        console.error(error);
      });
  }
  }
</script>
<style>

</style>

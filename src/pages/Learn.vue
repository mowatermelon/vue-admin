<template>
  <div class="panel-group">
    <collection v-for="company in companys" :key="company.company" :repos="company.git" :cname="company.company"></collection>
  </div>
</template>

<script>
import Collection from '../components/Collection'

export default {
  name: 'Learn',
  data () {
    return {
      companys:[
        {
          "company": "阿里",
          "git": [
            {
              "name": "阿里巴巴",
              "value": "alibaba"
            },
            {
              "name": "支付宝",
              "value": "Alice"
            },
            {
              "name": "淘宝",
              "value": "kissy"
            },
            {
              "name": "蚂蚁设计",
              "value": "ant-design"
            },
            {
              "name": "蚂蚁运动",
              "value": "Ant-Motion"
            }
          ]
        },
        {
          "company": "腾讯",
          "git": [
            {
              "name": "腾讯开源",
              "value": "TencentOpen"
            },
            {
              "name": "腾讯前端",
              "value": "AlloyTeam"
            }
          ]
        },
        {
          "company": "百度",
          "git": [
            {
              "name": "百度开源",
              "value": "Baidu"
            },
            {
              "name": "百度前端",
              "value": "baidufe"
            },
            {
              "name": "Baidu EFE team",
              "value": "ecomfe"
            }
          ]
        },
        {
          "company": "饿了么",
          "git": [
            {
              "name": "饿了么前端",
              "value": "ElemeFE"
            }
          ]
        },
        {
          "company": "美团点评",
          "git": [
            {
              "name": "美团点评",
              "value": "Meituan-Dianping"
            },
            {
              "name": "美团",
              "value": "meituan"
            },
            {
              "name": "点评",
              "value": "dianping"
            }
          ]
        },
        {
          "company": "滴滴",
          "git": [
            {
              "name": "滴滴",
              "value": "didi"
            }
          ]
        },
        {
          "company": "京东",
          "git": [
            {
              "name": "京东",
              "value": "jcloudpub"
            }
          ]
        },
        {
          "company": "唯品会",
          "git": [
            {
              "name": "唯品会",
              "value": "vipshop"
            }
          ]
        },
        {
          "company": "蘑菇街",
          "git": [
            {
              "name": "蘑菇街",
              "value": "mogujie"
            }
          ]
        },
        {
          "company": "当当",
          "git": [
            {
              "name": "当当",
              "value": "dangdangdotcom"
            }
          ]
        },
        {
          "company": "网易",
          "git": [
            {
              "name": "网易",
              "value": "NetEase"
            }
          ]
        },
        {
          "company": "新浪",
          "git": [
            {
              "name": "新浪",
              "value": "CNSRE"
            },
            {
              "name": "新浪微博",
              "value": "weibocom"
            }
          ]
        },
        {
          "company": "豆瓣",
          "git": [
            {
              "name": "豆瓣",
              "value": "douban"
            }
          ]
        },
        {
          "company": "小米",
          "git": [
            {
              "name": "小米",
              "value": "xiaomi"
            }
          ]
        },
        {
          "company": "58同城",
          "git": [
            {
              "name": "58同城",
              "value": "58code"
            }
          ]
        },
        {
          "company": "华为",
          "git": [
            {
              "name": "华为Hadoop",
              "value": "Huawei-Hadoop"
            },
            {
              "name": "华为开源",
              "value": "huawei-openlab"
            }
          ]
        },
        {
          "company": "360",
          "git": [
            {
              "name": "360",
              "value": "Qihoo360"
            }
          ]
        },
        {
          "company": "搜狐",
          "git": [
            {
              "name": "搜狐",
              "value": "SOHUDBA"
            }
          ]
        },
        {
          "company": "豌豆荚",
          "git": [
            {
              "name": "豌豆荚",
              "value": "CodisLabs"
            }
          ]
        },
        {
          "company": "深度",
          "git": [
            {
              "name": "深度",
              "value": "linuxdeepin"
            }
          ]
        },
        {
          "company": "DNSPod",
          "git": [
            {
              "name": "DNSPod",
              "value": "DNSPod"
            }
          ]
        },
        {
          "company": "雅虎",
          "git": [
            {
              "name": "Yahoo Inc.",
              "value": "yahoo"
            }
          ]
        }
      ]
    }
  },
  components:{
    Collection
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>

</style>

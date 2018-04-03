<template>
  <div>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">{{cname}}</h3>
      </div>
      <div class="panel-body text-muted">
        <div class="panel panel-info" v-for="(repo,ridx) in repos" :key ="ridx">
          <div class="panel-heading">
            {{repo.name}}----{{repo.value}}
            <span class="badge pull-right">当前公开项目：{{lists[ridx].public_repos}}</span>
          </div>
          <div class="panel-body">
            <ul class="list-group">
              <li class="list-group-item text-left"  v-for="(companysShowList,companysShowIdx) in companysShowLists" :key="companysShowIdx">
                {{companysShowList+' : '+lists[ridx][companysShowList]}}
              </li>
            </ul>
            <div class="media well" v-for="(companyRepo,companyIdx) in lists[ridx].repos" :key="companyIdx">
              <div class="media-left media-middle">
                <a href="#">
                  <img class="media-object" :src="lists[ridx].avatar_url" :alt="repo.name">
                </a>
              </div>
              <div class="media-body">
                <h4 class="media-heading">{{companyRepo.name}}</h4>
                {{companyRepo.description}}
              </div>
              <ul class="list-group">
                <li class="text-left">
                  <div class="col-xs-6">
                    <i class="glyphicon glyphicon-time text-primary"></i>&nbsp;创造时间:{{companyRepo.created_at}}
                  </div>
                  <div class="col-xs-6">
                    <i class="glyphicon glyphicon-edit text-primary"></i>&nbsp;最新修改时间:{{companyRepo.updated_at}}
                  </div>
                </li>
                <li class="text-left">
                  <div class="col-xs-4">
                    <i class="glyphicon glyphicon-globe text-primary"></i>&nbsp;项目语言:{{companyRepo.language}}
                  </div>
                  <div class="col-xs-4">
                    <i class="glyphicon glyphicon-star text-primary"></i>&nbsp;项目stars:{{companyRepo.stargazers_count}}
                  </div>
                  <div class="col-xs-4">
                    <i class="glyphicon glyphicon-random text-primary"></i>&nbsp;项目forks:{{companyRepo.forks_count}}
                  </div>
                </li>
                <li class="text-left">
                  <div class="col-xs-4">
                    <i class="glyphicon glyphicon-file text-primary"></i>&nbsp;项目大小:{{companyRepo.size}}
                  </div>
                  <div class="col-xs-8">
                    <i class="glyphicon glyphicon-eye-open text-primary"></i>&nbsp;项目完整地址:{{companyRepo.git_url}}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="panel-footer text-center">我是有底线的</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getAjax} from '../service/util'

export default {
  name: 'Collection',
  data () {
    return {
      companyLists:["id","name","full_name","owner","private","html_url","description","fork","url","forks_url","keys_url","collaborators_url","teams_url","hooks_url","issue_events_url","events_url","assignees_url","branches_url","tags_url","blobs_url","git_tags_url","git_refs_url","trees_url","languages_url","stargazers_url","contributors_url","subscribers_url","subscription_url","commits_url","git_commits_url","comments_url","issue_comment_url","contents_url","compare_url","merges_url","archive_url","downloads_url","issues_url","pulls_url","milestones_url","notifications_url","labels_url","releases_url","deployments_url","created_at","updated_at","pushed_at","git_url","ssh_url","clone_url","svn_url","homepage","size","stargazers_count","watchers_count","language","has_issues","has_projects","has_downloads","has_pages","forks_count","mirror_url","archived","open_issues_count","license","forks","open_issues","watchers","default_branch"],
      companyShowLists:["name","full_name","description","created_at","updated_at","language","open_issues_count","forks","watchers","git_url","ssh_url","clone_url","size"],
      companysShowLists:["type","created_at","updated_at"],
      companysLists: ["login","id","avatar_url","gravatar_id","url","html_url","followers_url","following_url","gists_url","starred_url","subscriptions_url","organizations_url","repos_url","events_url","received_events_url","type","site_admin","name","company","blog","location","email","hireable","bio","public_repos","public_gists","followers","following","created_at","updated_at"],
      lists:[]
    }
  },
  created:function(){
    let _this = this;
    if(_this.lists.length === 0){
      let d_prefix = 'https://api.github.com/users/';
      for(let i = 0;i <_this.repos.length; i++){
        // debugger;
        _this.getCompanysData(d_prefix,_this.repos[i].value);
        console.log(_this.repos[i].value);
        _this.getCompanyData(d_prefix,_this.repos[i].value,i)
      }
    }

  },
  props: {
    cname: {// 总公司名称
      type: String,
      default: 'text'
    },
    repos: {//repo分支
      type: Array,
      default: []
    }
  },
  methods:{
    /**
    * 请求companys的数据
    * @param {prefix} prefix 固定的请求前缀
    * @param {String} name 公司的主名称
    */
    getCompanysData(prefix,name) {
      // debugger;
      let _this = this;
      getAjax(prefix + name+'?access_token=78109716f309909b57299030bd2acced4c1f1409&time='+new Date())
        .then((response) => {
          // debugger;
          console.log("请求companys的数据");
          console.log(response.data);
          let temp = response.data || {};
          _this.lists.push(temp);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    /**
    * 请求详细的repo数据 的数据
    * @param {prefix} prefix 固定的请求前缀
    * @param {String} name 公司的主名称
    * @param {Number} index 子账户序号
    */
    getCompanyData(prefix,name,index) {
      let _this = this;
      getAjax(prefix + name+'/repos'+'?access_token=78109716f309909b57299030bd2acced4c1f1409&time='+new Date())
        .then((response) => {
          console.log("请求repos的数据");
          console.log(response.data);
          _this.lists[index].repos = response.data || [];
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.media-object{
  width:60px;
  height:60px;
}
div[class^='col-xs-']{
  word-spacing: 1em;
  line-height: 2.5;
  border-bottom: 1px solid;
}
</style>

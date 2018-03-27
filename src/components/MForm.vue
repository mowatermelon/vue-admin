<template>
  <div>
    <m-input v-model="msg" placeholder="请输入内容" :text="msg"></m-input>
    <m-input v-model="msg1" placeholder="请输入内容1" :text="msg1" type="textarea" textareaStyle="resize:none;"></m-input>
    <m-input v-model="msg" placeholder="请输入内容2" :text="msg" prefix-icon="headphones"></m-input>
    <m-input v-model="msg1" placeholder="请输入内容3" :text="msg1" type="textarea" prefix-icon="user"></m-input>
    <m-input v-model="msg" placeholder="请输入内容4" :text="msg" suffix-icon="heart"></m-input>
  </div>
</template>

<script>
import MInput from '../components/MInput'

export default {
  name: 'MForm',
  data () {
    return {
      msg:"欢迎查看西瓜的text框",
      msg1:"欢迎查看西瓜的textarea框"
    }
  },
  components:{
    MInput
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>

</style>

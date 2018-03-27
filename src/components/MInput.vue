<template>
  <div class="input-group">
  <span class="input-group-addon" v-if="prefixIcon !== ''" >
    <slot name="icon">
      <i
        class="glyphicon"
        :class="'glyphicon-'+prefixIcon"
        @click="handleIconClick">
      </i>
    </slot>

  </span>
   <input
    v-if="type !== 'textarea'"
    class="form-control"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :maxlength="maxlength"
    :minlength="minlength"
    :autofocus="autofocus"
    :min="min"
    :max="max"
    :form="form"
    :value="currentValue"
    ref="input"
    @input="handleInput"
    @focus="handleFocus"
    @blur="handleBlur"
  >
  <textarea
    v-else
    class="form-control"
    :value="currentValue"
    ref="textarea"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :style="textareaStyle"
    :readonly="readonly"
    :rows="rows"
    :form="form"
    :autofocus="autofocus"
    :maxlength="maxlength"
    :minlength="minlength"
    @input="handleInput"
  >
  </textarea>
  <span class="input-group-addon" v-if="suffixIcon !== ''">
    <slot name="icon">
      <i
        class="glyphicon"
        :class="'glyphicon-'+suffixIcon"
        @click="handleIconClick">
      </i>
    </slot>
  </span>

  </div>
</template>

<script>

export default {
  name: 'MInput',
  data () {
    // debugger;
    return {
      currentValue:this.$attrs.text
    }
  },
  props: {
    type: {//类型
      type: String,
      default: 'text'
    },
    name: {// 名字
      type: String,
      default: 'text'
    },
    placeholder: {// 默认值
      type: String,
      default: '请输入内容'
    },
    disabled: {// 是否禁用
      type: Boolean,
      default: false
    },
    readonly: {// 是否只读
      type: Boolean,
      default: false
    },
    autocomplete: {// 自动补全
      type: Boolean,
      default: false
    },
    autofocus: {// 自动聚焦
      type: Boolean,
      default: false
    },
    maxlength: {// 输入的最大长度
      type: Number,
      default: 1000// 自动补全
    },
    minlength: {// 输入的最小长度（暂时不支持）
      type: Number,
      default: 0
    },
    max: {// 允许输入的最大值（数字或者日期）
      type: Number,
      default: 1000
    },
    min: { // 允许输入的最小值（数字或者日期）
      type: Number,
      default: 0
    },
    rows: { // 文本框行数
      type: Number,
      default: 3
    },
    form: {// 绑定的表单（不是原生的）
      type: String,
      default: ''
    },
    value: {// 输入值
      type: String,
      default: ''
    },
    textareaStyle:{//文本框样式
      type: String,
      default: ''
    },
    prefixIcon:{//前缀icon内容
      type: String,
      default: ''
    },
    suffixIcon:{//后缀icon内容
      type: String,
      default: ''
    }
  },
  watch: {
    'value'(val, oldValue) {
      this.setCurrentValue(val);
    }
  },
  computed: {
    validating() {
      return this.$parent.validateState === 'validating';
    }
  },
  methods:{
    /**
    * 修改当前输入框的值
    * @param {Any} value 用户当前输入的值
    */
    setCurrentValue(value) {
      if (value === this.currentValue) return;  // 如果新旧值一致直接返回

      this.currentValue = value;  // 改变当前值
      this.$emit('input', value);  // 触发 input 事件
      this.$emit('change', value);  // 触发 change 事件
    },
    /**
    * 处理输入事件
    * @param {Event} event
    */
    handleInput(event){
      this.setCurrentValue(event.target.value);  // 改变当前值
    },
   /**
    * 用来处理获得焦点的事件，会直接触发focus事件。
    * @param {Event} event
    */
    handleFocus(event) {
      this.$emit('focus', event);
    },
    /**
    * 失去焦点事件
    * @param {Event} event
    */
    handleBlur(event) {
      this.$emit('blur', event);  // 触发 blur 事件
    },
    /**
    * 点击icon的单击事件
    * @param {Event} event
    */
    handleIconClick(event) {
     this.$emit('click', event);
    }
  }
}
</script>

<style lang="scss" scoped>
.input-group{
  margin-bottom:1em;
  width: 100%;
}
</style>

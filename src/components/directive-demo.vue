<template>
  <div>
    <input placeholder="请输入文本" v-focus v-model="inData"/>
    <div>{{inData | capitalize(1,2,3)}}</div>
  </div>
</template>

<script>
export default {
  name: 'directive-demo',
  data: function () {
    return {
      inData: 'qqq'
    }
  },
  filters: {
    capitalize: function (value, v1, v2, v3) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<style>

</style>

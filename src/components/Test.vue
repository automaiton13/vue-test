<template>
  <div class="red">
    test {{name}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'test',
  data: function () {
    return {
      name: 'luck'
    }
  }
}
</script>

<style>
  .red{
    color: red;
  }
</style>

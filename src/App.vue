<template>
  <div id="app1">
    <img src="./assets/logo.png">
    <router-view/>
    123

    <DirectiveDemo />
  </div>
</template>

<script>
import Test from './components/Test.vue'
import DirectiveDemo from './components/directive-demo.vue'
export default {
  name: 'App',
  components: {
    Test,
    DirectiveDemo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

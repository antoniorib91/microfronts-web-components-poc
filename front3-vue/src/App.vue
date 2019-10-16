<template>
  <div id="app-vue">
    <img src="./assets/logo.png"/>
    <hello-world msg="Hello!"></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app-vue',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app-vue {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

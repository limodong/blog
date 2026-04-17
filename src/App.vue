<template>
  <div id="app">
    <Avatar url="https://ts4.tc.mm.bing.net/th/id/OIP-C.wfZEI6pBUt-vqQpsw_aLAwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"/>
  </div>
</template>

<script>
import Avatar from './components/Avatar.vue';
export default {
  name: 'App',
  components:{
    Avatar
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

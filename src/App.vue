<template>
  <div id="app">
    <!-- <Avatar url="https://ts4.tc.mm.bing.net/th/id/OIP-C.wfZEI6pBUt-vqQpsw_aLAwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" />
    <Icon :type="fontClass" /> -->
    <Pager :total="302" :current="current" @changePage="handleChangePage" />

  </div>
</template>

<script>
import Avatar from './components/Avatar.vue';
import Icon from '@/components/Icon.vue'
import Pager from '@/components/Pager'
export default {
  name: 'App',
  data(){
    return {
      current: 1
    }
  },
  components: {
    Avatar,
    Icon,
    Pager
  },
  methods: {
    handleChangePage(pageNum){
      this.current = pageNum;
    }
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

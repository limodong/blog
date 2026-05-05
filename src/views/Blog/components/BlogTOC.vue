<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="list" @select="handleSelect"/>
  </div>
</template>

<script>
import RightList from "./RightList.vue";
export default {
  props:["list"],
  components: {
    RightList
  },
  methods: {
    handleSelect(data){
      console.log(data)
      location.hash = data.anchor;
    }
  }
}
</script>

<style lang="less" scoped>
.blog-toc-container{
    width: 100%;
    height: 100%;
}
</style>
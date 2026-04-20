<template>
    <div class="test-layout-container">
        <Layout>
      <template>
          <div class="main">主区域宽度沾满剩余空间，溢出隐藏</div>
      </template>
      <template #left>
          <div class="left">
              左边栏区域，宽度适应内容，溢出隐藏
              左边栏区域，宽度适应内容，溢出隐藏
          </div>
      </template>
      <template #right>
          <div class="right">右边栏区域，宽度适应内容，溢出隐藏</div>
      </template>
    </Layout>
    </div>
</template>

<script>
import Layout from './';
export default {
    components: {
        Layout
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
.test-layout-container{
    width: 80%;
    height: 600px;
    border: 2px solid;

    .left{
        width: 200px;
        height: 100%;
        background-color: rgb(209, 125, 116);
    }
    .right{
        width: 150px;
        height: 100%;
        background-color: rgb(181, 214, 233);
    }
    .main{
         width: 100%;
        height: 100%;
        background-color: rgb(77, 166, 172);
        white-space: nowrap;
    }
}
</style>
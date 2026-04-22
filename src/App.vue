<template>
  <div class="app-container">
   <Layout>
      <template #default>
            <router-view></router-view>
      </template>
      <template #left>
          <div class="aside">
              <Side/>
          </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout';
import Side from '@/components/Side'
export default {
  name: 'App',
  components: {
    Layout,
    Side
  }
}
</script>

<style lang="less">
@import '~@/styles/global.less';
.app-container {
  width: 100%;
  height: 100%;
  .aside{
    height: 100%;
    width: 250px;
    background-color: #000;
  }
}
</style>

<template>
  <div class="test-side-container">
    <Side/>
  </div>
</template>

<script>
import Side from '@/components/Side'
export default {
    components: {
        Side
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/global.less';
    .test-side-container{
        background-color: #000;
        width: 200px;
        height: 100vh;
    }
</style>
<template>
  <div class="empty-container-test">
    <Empty/>
  </div>
</template>

<script>
import Empty from "./"
export default {
    components: {
        Empty
    }
}
</script>

<style lang="less" scoped>
.empty-container-test{
  width: 500px;
  height: 500px;
  position: relative;
}
</style>
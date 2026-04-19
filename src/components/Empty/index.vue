<template>
  <div class="empty-container">
    <Icon type="empty" :size="160"/>
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {
  props: {
    text: {
      type: String,
      default: "无数据"
    }
    
  },
  components: {
      Icon
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.empty-container{
  .self-center();
  text-align: center;
  p{
    margin-top: 30px;
    font-size: 20px;
    font-weight: 700;
    color: @secondary
  }
  .icon-container{
    color: @secondary
  }
}
</style>
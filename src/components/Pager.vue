<template>
    <div class="pager-container" v-if="total !== 0">
        <a href="" v-show="current > 1">首页</a>
        <a href="">&lt;</a>
        <a href="">3</a>
        <a href="">4</a>
        <a href="">5</a>
        <a href="">&gt;</a>
        <a href="">尾页</a>
        <span>共 {{ total }} 条</span>
    </div>
</template>

<script>
export default {
    props: {
        current: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 0
        },
    }

}
</script>

<style lang="less" scoped>
@import "../styles/global.less";

.pager-container {
    margin: 30px 0;

    a {
        margin: 0 10px;
        color: @primary;
    }
}
</style>
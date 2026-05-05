<template>
    <ul class="right-list-container">
        <li v-for="item in list" :key="item.name" @click="handleClick(item)">
                <span :class="{active: item.isSelect}">{{ item.name }}</span>
                <span class="aside-info" :class="{active: item.isSelect}" v-if="item.aside">{{ item.aside }}</span>            
            <RightList :list="item.children" @click="handleClick(item)" />
        </li>
    </ul>
</template>

<script>
export default {
    name: 'RightList',
    props: ['list'],
    data() {
        return {
        }
    },
    methods: {
        handleClick(item) {
            this.$emit("select",item)
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.right-list-container {
    li {
        padding-left: 14px;
        cursor: pointer;
        min-height: 40px;
        line-height: 40px;
        font-size: 1em;
        color: @dark;
        .active {
            color: @warn;
        }
        .aside-info{
            margin-left: 10px;
        }
    }
}
</style>
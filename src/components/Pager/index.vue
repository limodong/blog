<template>
    <div class="pager-container" v-if="total !== 0">
        <h2>{{ minVisible }}-{{ maxVisible }}</h2>
        <a @click="handleClick(1)">首页</a>
        <a @click="handleClick(current -1)">&lt;</a>
        <a @click="handleClick(n)" v-for="(n,index) in pageSize" :key="index" 
        :class="{active: current === n}"
        >{{ n }}</a>
        <a @click="handleClick(current + 1)">&gt;</a>
        <a @click="handleClick(pageNumber)">尾页</a>
        <span>每页 {{ limit }}条 共 {{ total }} 条</span>
    </div>
</template>

<script>
export default {
    props: {
        // 当前选中的页码
        current: {
            type: Number,
            default: 2
        },
        // 每页的数据量
        limit: {
            type: Number,
            default: 10
        },
        // 总数据量
        total: {
            type: Number,
            default: 0
        },
        // 分页组件可现实的分页数
        visiblePageNum: {
            type: Number,
            default: 10
        },
    },
    computed: {
        pageNumber(){
            return Math.ceil(this.total / this.limit); // 总页数
        },
        // 分页组件显示的最小页码数，也就是分页组件的第一个页码数字
        minVisible(){
            let min = this.current - this.visiblePageNum/2;
           return min < 1 ? 1: min;
        },
        maxVisible(){
            let max = this.minVisible + this.visiblePageNum - 1;
            return max > this.pageNumber ? this.pageNumber : max;
        },
        pageSize(){
            const arr = [];
           for (let i = this.minVisible; i <= this.maxVisible; i++) {
            arr.push(i);
           }
            return arr
        }
    },
    methods:{
        handleClick(pageNum){
            if(pageNum < 1) {
                pageNum = 1;
            }
            if (pageNum > this.pageNumber) {
                pageNum = this.pageNumber
            }
            if (pageNum === this.current) {
                return;
            }
            
            this.$emit("changePage",pageNum);
        }
    }

}
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";

.pager-container {
    margin: 30px 0;

    a {
        margin: 0 10px;
        color: @primary;
        cursor: pointer;
        &.active{
            color: @lightWords;
            font-weight: 700;
        }
    }
}
</style>
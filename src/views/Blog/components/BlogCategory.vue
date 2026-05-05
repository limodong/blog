<template>
    <div class="blog-category-container">
        <h2>文章分类</h2>
        <RightList :list="list" @select="handleSelect"/>
    </div>
</template>

<script>
import RightList from './RightList.vue'
import fetchData from "@/mixins/fetchData"
import Api from "@/api"
export default {
    mixins: [fetchData([])],
    data() {
        return {
        }
    },
    computed: {
        categoryId(){
            return +this.$route.params.id || -1;
        },
        list(){
            const articleCount = this.data.reduce((prev,curr) => prev + curr.articleCount,0);
            const result = [
                {id: -1,name: "全部",articleCount},
                ...this.data,
            ];
            return result.map(it => ({...it,isSelect:it.id === this.categoryId,aside: `${it.articleCount}篇`}));
        }
    },
    components: {
        RightList
    },
    methods: {
        async fetchData(){
            return await Api.getBlogCategory();
        },
        handleSelect(data){
            const query = {
                page: 1,
                limit: this.limit || 10
            }
            this.$router.push({ name: "BlogCategory", params: { id: data.id }, query })
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.blog-category-container {
    height: 100%;
    overflow-y: scroll;
    h2 {
        margin-left: 14px;
        margin-bottom: 0;
    }
}
</style>
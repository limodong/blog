<template>
    <ul class="blog-category-container">
        <li v-for="item in categoryData" :key="item.name">
            <div>
                <span class="category-name">{{ item.name }}</span>
                <span class="article-count">{{ item.articleCount }}篇</span>
            </div>
            <BlogCategory :category-data="item.children"/>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'BlogCategory',
    props: ['categoryData'],
    data(){
        return {
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.blog-category-container{
    li{
        padding-left: 14px;
        cursor: pointer;
        height: 30px;
        line-height: 30px;
        div:hover{
            background-color: #ccc;
        }
        .category-name{
            display: inline-block;
            width: 60px;
            font-size: 1em;
            font-weight: bold;
        }
        .article-count{
            margin-left: 10px;
            font-size: .8em;
            color: @dark;
        }
    }
}
</style>
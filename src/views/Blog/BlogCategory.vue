<template>
    <ul class="blog-category-container">
        <li v-for="item in categoryData" :key="item.name">
            <div>{{ item.name }}</div>
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
.blog-category-container{
    li{
        margin-left: 20px;
        cursor: pointer;
        div:hover{
            background-color: #ccc;
        }
    }
}
</style>
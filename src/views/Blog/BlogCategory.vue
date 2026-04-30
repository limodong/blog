<template>
    <ul class="blog-category-container" @click="handleClick">
        <li v-for="item in categoryData" :key="item.name" :data-category-id="item.id">
            <div>
                <span class="category-name">{{ item.name }}</span>
                <span class="article-count">{{ item.articleCount }}篇</span>
            </div>
            <BlogCategory :category-data="item.children" />
        </li>
    </ul>
</template>

<script>
export default {
    name: 'BlogCategory',
    props: ['categoryData'],
    data() {
        return {
        }
    },
    methods: {
        handleClick(event) {
            const el = event.target;
            if (el.nodeName === 'LI') {
                const query = this.$route.query;
                this.$router.push({ name: "BlogCategory", params: { id: el.dataset.categoryId }, query })
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.blog-category-container {
    li {
        padding-left: 14px;
        cursor: pointer;
        height: 30px;
        line-height: 30px;

        &:hover {
            background-color: #ccc;
        }

        div {
            pointer-events: none;


        }


        .category-name {
            display: inline-block;
            width: 60px;
            font-size: 1em;
            font-weight: bold;
        }

        .article-count {
            margin-left: 10px;
            font-size: .8em;
            color: @dark;
        }
    }
}
</style>
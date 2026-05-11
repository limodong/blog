<template>
    <div class="detail-container">
        <Layout>
            <template #default>
                <div class="blog-detail-container" v-loading="isLoading">
                    <BlogDetail :detail="data" v-if="data" :detailLoading="isLoading" />
                </div>

            </template>

            <template #right>
                <div class="right-container" v-loading="isLoading">
                    <BlogTOC :list="data.toc" v-if="data" />
                </div>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail.vue";
import BlogTOC from "./components/BlogTOC.vue";
import fetchData from '@/mixins/fetchData'
import Api from "@/api"
export default {
    mixins: [fetchData(null)],
    computed: {

    },
    methods: {
        async fetchData() {
            return await Api.getBlogDatil(this.$route.params.id);
        }
    },
    components: {
        Layout,
        BlogDetail,
        BlogTOC
    },
}
</script>

<style lang="less" scoped>
.detail-container {
    width: 100%;
    height: 100%;
}

.blog-detail-container {
    height: 100%;
}

.right-container {
    width: 350px;
    height: 100%;
}
</style>
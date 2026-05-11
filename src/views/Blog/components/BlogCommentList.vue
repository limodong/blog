<template>
    <div class="blog-comment-list-container" v-loading="isLoading">
        <DataList :list="data.rows" v-if="data" />
    </div>
</template>

<script>
import DataList from "@/components/MessageArea/DataList.vue"
import fetchData from "@/mixins/fetchData";
import Api from "@/api"
export default {
    mixins: [fetchData({})],
    components: {
        DataList
    },
    methods: {
        async fetchData() {
            const resp = await Api.getCommentList();
            console.log(resp);
            return resp;
        }
    }
}
</script>

<style lang="less" scoped>
</style>
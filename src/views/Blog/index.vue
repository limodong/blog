<template>
  <div class="blog-container">
    <Layout>
      <template #default>
        <BlogList />
      </template>
      <template #right>
        <div class="right-container" v-loading="isLoading">
          <h2>文章分类</h2>
          <BlogCategory :category-data="categoryData"/>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogCategory from "./BlogCategory";
import BlogList from "./BlogList";
import fetchData from "../../mixins/fetchData";
import api from "@/api"
export default {
  mixins: [fetchData([])],
  components: {
    Layout,
    BlogCategory,
    BlogList
  },
  data() {
    return {
      categoryData: [
        // { name: 'a', children: [ { name: 'a-1'}, { name: 'a-2'}, { name: 'a-3'} ] },
        // { name: 'b', children: [ { name: 'b-1'}, { name: 'b-2'}, { name: 'b-3'} ] },
        // { name: 'c', children: [ { name: 'c-1'}, { name: 'c-2'}, { name: 'c-3', children: [ { name: 'c-3-1' }, { name: 'c-3-2' }, { name: 'c-3-3' } ]} ] }
      ],
    }
  },
  methods: {
    async fetchData() {
      const categoryResp = await api.getBlogCategory();
      this.categoryData = categoryResp.data;
    }
  }
}
</script>

<style lang="less" scoped>
.blog-container {
  width: 100%;
  height: 100%;

  .right-container {
    position: relative;
    width: 250px;
    height: 100%;
  }
}
</style>
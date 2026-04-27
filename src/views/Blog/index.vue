<template>
  <div class="blog-container">
    <Layout>
      <template #default>
        123
      </template>
      <template #right>
        <div class="right-container">
          <BlogCategory :category-data="categoryData"/>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogCategory from "./BlogCategory";
import fetchData from "../../mixins/fetchData";
export default {
  mixins:[fetchData()],
  components: {
    Layout,
    BlogCategory
  },
  data(){
    return {
      categoryData: [
          { name: 'a', children: [ { name: 'a-1'}, { name: 'a-2'}, { name: 'a-3'} ] },
          { name: 'b', children: [ { name: 'b-1'}, { name: 'b-2'}, { name: 'b-3'} ] },
          { name: 'c', children: [ { name: 'c-1'}, { name: 'c-2'}, { name: 'c-3', children: [ { name: 'c-3-1' }, { name: 'c-3-2' }, { name: 'c-3-3' } ]} ] }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.right-container{
  width: 250px;
}
</style>
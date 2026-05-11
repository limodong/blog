<template>
  <div class="blog-container">
    <Layout>
      <template #default>
        <BlogList />
      </template>
      <template #right>
        <div class="right-container" v-loading="isLoading">
          <BlogCategory :category-data="categoryData"/>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogCategory from "./components/BlogCategory.vue";
import BlogList from "./components/BlogList.vue";
import fetchData from "@/mixins/fetchData";
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
      categoryData: [],
      isActive: false
    }
  },
  computed:{
    articleCountTotal(){
      return this.categoryData.map(item => item.articleCount).reduce((prev,curr)=> (prev+curr) ,0)
    }
  },
  methods: {
    async fetchData() {
      const categoryResp = await api.getBlogCategory();
      this.categoryData = categoryResp.data;
    },
    handleClick(){
      
      if (this.$route.params.id && this.$route.params.id !== -1) {
        this.$router.push({name: 'Blog'});
      }
      
    }
  },
  watch:{
    '$route.params':function(){
      this.isActive = (!this.$route.params.id || this.$route.params.id === -1);
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.blog-container {
  width: 100%;
  height: 100%;

  .right-container {
    position: relative;
    width: 300px;
    height: 100%;
    .all{
      line-height: 30px;
      padding-left: 14px;
      cursor: pointer;
      color: @dark;
      &:hover,&.active{
        color: @warn;
      }
      span{
        display: inline-block;
      }
      .text{
        width: 60px;
        font-weight: bold;
      }
      .count{
        font-size: .8em;
      }
    }
    
  }
}
</style>
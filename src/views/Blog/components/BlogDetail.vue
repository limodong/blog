<template>
  <div class="blog-detail-container">
    <h1>{{ detail.title }}</h1>
    <aside v-if="detail">
      <span>日期：{{ datetimeFormate(detail.createDate) }}</span>
      <span>浏览：{{ detail.scanNumber }}</span>
      <span>评论：{{ detail.commentNumber }}</span>
      <span>分类：{{ detail.category?.name }}</span>
    </aside>
    <div class="markdown-body" v-html="detail.htmlContent"></div>
    <BlogComment />
    <BlogCommentList />
  </div>
</template>

<script>
import { datetimeFormate } from "@/utils";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
import BlogComment from "./BlogComment.vue";
import BlogCommentList from "./BlogCommentList.vue";

export default {
  props: {
    detail: {
      type: Object
    }
  },
  components: {
    BlogComment,
    BlogCommentList
  },
  methods: {
    datetimeFormate
  }

}
</script>

<style lang="less" scoped>
.blog-detail-container {
  box-sizing: border-box;
  height: 100%;
  padding: 10px 40px;
  overflow-y: scroll;
  scroll-behavior: smooth;

  aside span {
    margin-right: 15px;
  }

  .markdown-body {
    margin-top: 40px;
  }

  .blog-comment-container {
    margin-top: 20px;
  }
}
</style>
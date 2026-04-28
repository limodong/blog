<template>
  <div class="blog-list-container">
    <div class="item-container" v-for="item in blogPageData.rows" :key="item.id">
      <img class="picture" :src="item.thumb"/>
      <div class="content">
          <h2>{{ item.title }}</h2>
          <div class="content-info">
            <p>
              <span>日期：</span>
              <span>{{ item.createDate }}</span>
            </p>
            <p>
              <span>浏览：</span>
              <span>{{ item.scanNumber }}</span>
            </p>
            <p>
              <span>评论：</span>
              <span>{{ item.commentNumber }}</span>
            </p>
            <p class="category">{{ item.category.name }}</p>
          </div>
          
          <div class="summary">
            大数据开发隔爆水袋尽快哈办法双打卡办法久啊十八大发吧VS合计的开发部辣三丁VB附件黄老师大V吧发喇叭v阿是啦对吧v发好啦科技吧客服部看见撒大部分管理卡计划表肯定是发来贺电撒部分老师VB大垃圾回复
          </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import fetchData from "../../mixins/fetchData";
import api from "@/api";
export default {
  mixins: [fetchData({})],
  data(){
    return {
      blogPageData: {}
    }
  },
  methods: {
    async fetchData(){
      const resp = await api.getBlogList();
      console.log('-------->',resp);
      this.blogPageData = resp.data;
    }
  }

}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.blog-list-container{
  height: 100%;
  padding: 10px;
  
  .item-container{
    display: flex;
    margin-left: 40px;
    padding: 10px 0;
    border-bottom: 1px solid;

    .picture{
      width: 184px;
      height: 120px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 1px 0 0 1px rgba(0, 0, 0, .5),-1px 0 0 1px rgba(0, 0, 0, .5),0 1px 0 1px rgba(0, 0, 0, .5),0 -1px 0 1px rgba(0, 0, 0, .5);
      margin-right: 1em;
    }

    h2{
      margin: 10px 0;
    }
    
    .content-info{
      display: flex;
      align-items: center;
      height: 20px;
      font-size: .8em;
      color: @secondary;

      p{
        padding-right: 1em;
      }
    }
    .summary{
      margin-top: 10px;
      font-weight: bold;
    }
    
  }
}
</style>
<template>
  <div class="blog-list-container" v-loading="isLoading">
    <div class="item-container" v-for="item in data.rows" :key="item.id">
      <div class="thumb" v-if="item.thumb">
        <router-link :to="{name:'BlogDetail',params:{id: item.id}}">
          <img class="picture" :src="item.thumb" :alt="item.title" :title="item.title" />
        </router-link>
      </div>
      
      <div class="content">
        <router-link :to="{name:'BlogDetail',params:{id: item.id}}">
          <h2>{{ item.title }}</h2>
        </router-link>
        
        <div class="content-info">
          <p>
            <span>日期：</span>
            <span>{{ datetimeFormate(item.createDate) }}</span>
          </p>
          <p>
            <span>浏览：</span>
            <span>{{ item.scanNumber }}</span>
          </p>
          <p>
            <span>评论：</span>
            <span>{{ item.commentNumber }}</span>
          </p>
          <router-link :to="{name: 'BlogCategory', params: {id: item.category.id}}">
            <a class="category">{{ item.category.name }}</a>
          </router-link>
          
        </div>

        <div class="summary">
          {{ item.description }}
        </div>
      </div>
    </div>
    <Pager :current="routeInfo.page" :limit="routeInfo.limit" :total="data.total" @changePage="handleChangePage" />
  </div>
</template>

<script>
import Pager from '@/components/Pager';
import fetchData from "../../../mixins/fetchData";
import {datetimeFormate}  from "@/utils";
import api from "@/api";
export default {
  mixins: [fetchData({})],
  data() {
    return {
    }
  },
  computed: {
    routeInfo(){
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      const categoryId = +this.$route.params.id || -1;
      return {
        page,
        limit,
        categoryId
      }
    }
  },
  components: {
    Pager
  },
  methods: {
    async fetchData() {
      const resp = await api.getBlogList(this.routeInfo.page,this.routeInfo.limit,this.routeInfo.categoryId);
      return resp.data;
    },
    handleChangePage(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit
      };
      // 跳转到 当前分类id 当前的页容量 newPage的页码
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({name: 'Blog',query})
      }else{
        this.$router.push({name: 'Blog',query, params: {id: this.routeInfo.categoryId}})
      }
    },
    datetimeFormate // 静态方法如果要在vue的template模版中使用需要再methods中注册方法
  },
    watch: {
    // 因为vue-router的route对象会在每次变更路径时生成一个新的路由对象，所以可以直接监听route对象
    $route: { // 这是完整写法
      async handler() {
        console.log('监听路由参数----》', this.$route);
        this.isLoading = true;
        this.data = await this.fetchData();
        this.isLoading = false;
      },
      deep: false, // 是否监听该数据内部属性的变化，默认false
      immediate: false, // 是否立即执行一次，默认false
    },
    // 这只是一个示例，没有任何功效，只是提供这种写法
    // ["$route.query.page"]: function(){
    //   console.log(`page发生了变化：${this.$route.query.page}`)
    // }
  },

}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';

.blog-list-container {
  height: 100%;
  padding: 10px;
  overflow-y: auto;

  .item-container {
    display: flex;
    margin-left: 40px;
    padding: 10px 0;
    border-bottom: 1px solid;

    .picture {
      width: 184px;
      height: 120px;
      object-fit: cover;
      border-radius: 4px;
      margin-right: 1em;
    }

    h2 {
      margin: 10px 0;
    }

    .content-info {
      display: flex;
      align-items: center;
      height: 20px;
      font-size: .8em;
      color: @secondary;

      p {
        padding-right: 1em;
      }
    }

    .summary {
      margin-top: 10px;
      font-weight: bold;
    }

  }

  .pager-container {
    display: flex;
    justify-content: center;
  }
}
</style>
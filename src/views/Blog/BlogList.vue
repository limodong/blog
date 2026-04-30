<template>
  <div class="blog-list-container">
    <div class="item-container" v-for="item in list" :key="item.id">
      <img class="picture" :src="item.thumb" />
      <div class="content">
        <h2>{{ item.title }}</h2>
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
          <p class="category">{{ item.category.name }}</p>
        </div>

        <div class="summary">
          {{ item.description }}
        </div>
      </div>
    </div>
    <Pager :current="page" :limit="limit" :visiblePageNum="visiblePageNum" :total="blogPageData.total"
      @changePage="handleChangePage" />
  </div>
</template>

<script>
import Pager from '@/components/Pager';
import fetchData from "../../mixins/fetchData";
import { datetimeFormate } from "@/utils/dateFormate";
import api from "@/api";
export default {
  mixins: [fetchData({})],
  watch: {
    '$route.params': function () {
      console.log('监听路由参数----》', this.$route.params);
    }
  },
  data() {
    return {
      blogPageData: {},
      page: 1,
      limit: 10,
      visiblePageNum: 10
    }
  },
  computed: {
    list() {
      let arr = this.blogPageData.rows;
      const categoryId = this.$route.params.id || -1;
      if (arr && categoryId === -1) {
        return arr;
        arr = this.blogPageData.rows.filter(item => item.category.id == categoryId);
      }
      const start = this.page === 1 ? 0 : this.page * this.limit;
      const end = start + this.limit;
      console.info('------------------------->', categoryId, arr, this.blogPageData.rows)
      return arr.slice(start, end) || [];
    }
  },
  components: {
    Pager
  },
  methods: {
    async fetchData() {
      const resp = await api.getBlogList();
      console.log('-------->', resp);
      this.blogPageData = resp.data;
    },
    handleChangePage(page) {
      this.page = page;
      const query = {
        page,
        limit: this.limit
      };
      this.$router.push({ name: 'Blog', query })
    },
    datetimeFormate // 静态方法如果要在vue的template模版中使用需要再methods中注册方法
  }

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
      border-radius: 8px;
      box-shadow: 1px 0 0 1px rgba(0, 0, 0, .5), -1px 0 0 1px rgba(0, 0, 0, .5), 0 1px 0 1px rgba(0, 0, 0, .5), 0 -1px 0 1px rgba(0, 0, 0, .5);
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
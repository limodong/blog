<template>
  <div class="data-list-container">
    <h2>评论列表（{{ list.length }}）</h2>
    <div class="list-item" v-for="item in list" :key="item.id">
      <div class="comment-date">{{ datetimeFormate(item.createDate, true) }}</div>
      <div class="avatar-container">
        <img :src="item.avatar" alt="头像">
      </div>
      <div class="comment-content">
        <div class="label">{{ item.nickname }}</div>
        <div class="comment">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { datetimeFormate } from "@/utils"
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    datetimeFormate
  }
}
</script>

<style lang="less" scoped>
.list-item {
  display: flex;
  align-items: center;
  height: 120px;
  position: relative;
  border-bottom: 1px solid #000;

  .comment-date {
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .avatar-container {
    flex: 0 0 auto;
    position: relative;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .comment-content {
    margin-left: 10px;

    .label {
      font-size: 1.2em;
      font-weight: bold;

    }

    .comment {
      height: 40px;
      margin-top: 10px;
    }
  }
}
</style>
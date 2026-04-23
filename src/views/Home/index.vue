<template>
  <div class="home-container" @wheel="handleWheel">
    <ul v-loading="isLoading" class="carousel-ul" ref="carouselUlRef" :style="{ marginTop: marginTop + 'px' }"
      @transitionend="handleTransitionend">
      <li v-for="item in data" :key="item.id" :style="{ height: bannerHeight + 'px' }">
        <Carousel :carousel="item"></Carousel>
      </li>
    </ul>
    <div class=" icon icon-up" v-show="current > 0" @click="--current">
      <Icon type="arrowUp"></Icon>
    </div>
    <div class="icon icon-down" v-show="current < data.length - 1" @click="current++">
      <Icon type="arrowDown"></Icon>
    </div>
    <ul class="indicator-container">
      <li class="indicator" :class="{ active: index === current }" v-for="(item, index) in data" :key="item.id"
        @click="handleIndicatorClick"></li>
    </ul>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData'
import api from '@/api';
import Icon from '@/components/Icon';
import Carousel from './Carousel';
export default {
  mixins: [fetchData([])],
  data() {
    return {
      bannerHeight: 0,
      bannerWidth: 0,
      current: 0,
      isWheeling: false,
    }
  },
  computed: {
    marginTop() {
      return -this.bannerHeight * this.current;
    }
  },
  components: {
    Icon,
    Carousel
  },
  methods: {
    // 点击指示器事件
    handleIndicatorClick(index) {
      this.current = index;
    },
    // 鼠标滚轮滑动时，首页图片也跟着滚动
    handleWheel(e) {
      if (this.isWheeling) {
        return;
      }
      if (e.deltaY >= 100 && this.current < this.data.length - 1) {// 下一页
        this.isWheeling = true;
        this.current++;
      }
      else if (e.deltaY <= -100 && this.current > 0) {// 上一页
        this.isWheeling = true;

        this.current--;
      }
      console.log(this.isWheeling, this.current, e.deltaY);
    },
    // 监听transition动效结束后的函数处理
    handleTransitionend() {
      this.isWheeling = false;
    },
    // 监听窗口尺寸变化，变化时对应的banner的尺寸也要随着变化
    handleResize() {
      this.bannerHeight = this.$refs.carouselUlRef.clientHeight;
      this.bannerWidth = this.$refs.carouselUlRef.clientWidth;
    },
    // 导入了混入mixins，在created生命周期中会调用此方法来获取远程数据，然后远程数据存储在mixins中的data属性中，也就是通过this.data就可以获取到远程数据。
    fetchData() {
      return api.getBanner();
    }
  },
  mounted() {
    this.bannerHeight = this.$refs.carouselUlRef.clientHeight;
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
@jump: 5px;

.home-container {
  width: 100%;
  height: 100%;
  background-color: #000;
  position: relative;
  overflow: hidden;

  .carousel-ul {
    width: 100%;
    height: 100%;
    transition: 1s;
  }

  .icon {
    .self-center();
    transform: translateY(0);
    cursor: pointer;
  }

  .icon-up {
    top: 20px;
    animation: jumpUp 2s infinite;
  }

  .icon-down {
    top: auto;
    bottom: 20px;
    animation: jumpDown 2s infinite;
  }

  @keyframes jumpUp {
    from {
      transform: translateY(-@jump);
    }

    50% {
      transform: translateY(@jump);
    }

    100% {
      transform: translateY(-@jump);
    }
  }

  @keyframes jumpDown {
    from {
      transform: translateY(@jump);
    }

    50% {
      transform: translateY(-@jump);
    }

    100% {
      transform: translateY(@jump);
    }
  }
}

ul {
  list-style: none;
}

.indicator-container {
  .self-center();
  left: auto;
  right: 20px;

  .indicator {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-bottom: 4px;
    cursor: pointer;

    &.active {
      background-color: #fff;
    }
  }
}
</style>
<template>
  <div class="home-container">
    <ul class="carousel-ul" ref="carouselUlRef" :style="{ marginTop: marginTop + 'px' }">
      <li v-for="item in banner" :key="item.id" :style="{ height: bannerHeight + 'px' }">
        <Carousel :bigImg="item.bigImg" :midImg="item.midImg"></Carousel>
      </li>
    </ul>
    <div class=" icon icon-up" v-show="current > 0" @click="--current">
      <Icon type="arrowUp"></Icon>
    </div>
    <div class="icon icon-down" v-show="current < banner.length - 1" @click="current++">
      <Icon type="arrowDown"></Icon>
    </div>
    <ul class="indicator-container" @click="handleIndicatorClick">
      <li class="indicator" :class="{ active: index === current }" :data-index="index" v-for="(item, index) in banner"
        :key="item.id"></li>
    </ul>
  </div>
</template>

<script>
import api from '@/api';
import Icon from '@/components/Icon';
import Carousel from './Carousel';
export default {
  data() {
    return {
      banner: [],
      bannerHeight: 0,
      current: 0
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
    handleIndicatorClick(event) {
      console.log(event);
      if (event.target.nodeName === "LI") {
        this.current = event.target.dataset.index
      }
    }
  },
  async created() {
    this.banner = await api.getBanner();
  },
  mounted() {
    this.bannerHeight = this.$refs.carouselUlRef.clientHeight;
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
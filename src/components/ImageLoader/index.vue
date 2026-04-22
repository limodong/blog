<template>
    <div class="imageLoader-container">
        <img class="placeholder" :src="placeholder" v-if="!everyLoaded" @load="load">
        <img :src="src" :style="{ opacity: originOpacity, transition: `${duration}ms` }">
    </div>
</template>

<script>

export default {
    data() {
        return {
            originLoaded: false, // 原图片加载完成状态
            everyLoaded: false // 页面上所有都加载完成状态
        }
    },
    props: {
        src: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            default: 2000
        }
    },
    computed: {
        originOpacity() {
            return this.originLoaded ? 1 : 0;
        }
    },
    methods: {
        load() {
            if (this.placeholder) {
                this.originLoaded = true;
                setTimeout(() => {
                    this.everyLoaded = true;
                    this.$emit("load", "图片加载完成");
                }, this.duration)
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';

.imageLoader-container {
    width: 500px;
    height: 500px;
    position: relative;

    img {
        .self-fill();
        object-fit: cover;
    }

    .placeholder {
        filter: blur(2vw);
    }
}
</style>
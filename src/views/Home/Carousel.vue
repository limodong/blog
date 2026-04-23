<template>
    <div class="carousel-container">
        <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" />
        <div class="text-container">
            <h2 ref="titleRef">{{ carousel.title }}</h2>
            <p ref="descriptionRef">{{ carousel.description }}</p>
        </div>

    </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
    props: ["carousel"],
    components: {
        ImageLoader,
        titleWidth: 0,
        descriptionWidth: 0
    },
    mounted() {
        // 动态获取元素的宽度
        this.titleWidth = this.$refs.titleRef.clientWidth;
        this.descriptionWidth = this.$refs.descriptionRef.clientWidth;
        // 先设置文本为不可见，且将宽度设置为0，因为文本的css样式设置了overflow:hidden;所以当宽度为0时文字隐藏
        this.$refs.titleRef.style.cssText = "width:0;opacity:0;";
        this.$refs.descriptionRef.style.cssText = "width:0;opacity:0;";
        //浏览器强制渲染，因为设置css样式是异步操作，所以强制reflow之后样式就会更新上去，才能将文本隐藏
        this.$refs.titleRef.clientWidth;
        // 设置文本为可见，且设置之前获取文本元素的宽度，配合transition可以呈现文字从隐藏到展示的过程
        this.$refs.titleRef.style.cssText = `opacity:1;width:${this.titleWidth}px;`;
        this.$refs.descriptionRef.style.cssText = `opacity:1;width:${this.descriptionWidth}px;`;
    }
}
</script>

<style lang="less" scoped>
.carousel-container {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #fff;

    .text-container {
        position: absolute;
        top: 50%;
        left: 5%;
        color: #fff;
        text-shadow: 1px 0 0 #000, -1px 0 #000, 0 1px 0 #000, 0 -1px 0 #000;

    }

    .imageLoader-container {
        width: 100%;
        height: 100%;
    }
}

h2,
p {
    white-space: nowrap;
    transition: 2s;
    overflow: hidden;
}

p {
    transition: 2s 1s;
}
</style>
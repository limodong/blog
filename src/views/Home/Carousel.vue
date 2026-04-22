<template>
    <div class="carousel-container">
        carousel
        <!-- <ImageLoader :src="bigImg" :placeholder="midImg" /> -->
    </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader'
export default {
    props: {
        bigImg: {
            type: String,
            required: true
        },
        midImg: {
            type: String,
            required: true
        }
    },
    components: {
        ImageLoader
    }
}
</script>

<style lang="less" scoped>
.carousel-container {
    width: 100%;
    height: 100%;
    background-color: #ccc;

    .imageLoader-container {
        width: 100%;
        height: 100%;
    }

}
</style>
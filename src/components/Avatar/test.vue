<template>
    <img class="avtar-container" :src="url" alt="" :style="{ width: size + 'px', height: size + 'px' }">
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true,
            default: "https://ts4.tc.mm.bing.net/th/id/OIP-C.wfZEI6pBUt-vqQpsw_aLAwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        size: {
            type: Number,
            default: 100
        }
    }
}
</script>

<style scoped>
.avtar-container {
    border-radius: 50%;
    object-fit: cover;
    /* 防止图片拉升 */
    display: block;
    /* img标签是inline-block元素，为了防止出现间隙将其变成块级元素 */
}
</style>
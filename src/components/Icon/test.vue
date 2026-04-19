<template>
    <span class="icon-container iconfont" :class="fontClass" />
</template>

<script>
import {classMap} from "./"

export default {
    name: 'Icon',
    props: {
        type: {
            type: String,
            required: true,
            default: "blog",
        }
    },
    computed: {
        // 计算属性会在第一次运行后缓存结果，只有所依赖的属性更改时才会去重新运行，并将重新计算的结果保存在缓存中
        fontClass() {
            return classMap[this.type]
        }
    }

}
</script>

<style scoped>
/* 导入的链接没有协议，默认使用本站所用协议，使用的是http协议所以它默认http */
@import "//at.alicdn.com/t/c/font_5091545_8b2ounay9gp.css";
</style>
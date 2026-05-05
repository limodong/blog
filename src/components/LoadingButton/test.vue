<template>
  <div class="loading-button-container">
    <LoadingButton :clickFunction="handleClick" @click="handleClick"/>
  </div>
</template>

<script>
import LoadingButton from './'
export default {
    components: {
        LoadingButton
    },
    methods: {
        /* // 这是第一种方式
        handleClick(count,callback){
            console.log(count);
            setTimeout(()=>{
                if (callback) {
                    callback("一个未知错误")
                }
            },3000)
        } */

       // 这是第二种方式（子组件通过$listeners来获取父组件的的事件）
       async handleClick(){
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve("一个未知错误");
            },3000)
        })
       },
    }
}
</script>

<style lang="less" scoped>
.loading-button-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
}
</style>
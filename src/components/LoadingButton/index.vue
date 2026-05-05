<template>
    <div>
        <button :disabled="isLoading" @click="handleClick">
            {{ isLoading ? "loading" : "submit" }}
        </button>
        <div class="err">{{ error }}</div>
    </div>
</template>

<script>
export default {
    props:{
        clickFunction:{
            type: Function
        }
    },
    data(){
        return {
            count: 0,
            isLoading: false,
            error: "" // 显示的错误
        }
    },
    methods: {
        // 当子组件需要获取到父组件的数据后，再接着处理某些事务的场景
        async handleClick(){
            /**
             * 点击次数+1
             * 错误信息清空
             * 为了防止重复点击，需要现将isLoading设置为true
             * 通知父组件：被点击了 ，并传递当前的点击次数
             * 等待父组件处理（有可能是异步的），将父组件处理的结果设置到error
             */
            this.count++;
            this.error = "";
            this.isLoading = true;
            // 第一种方式使用$emit通知父组件，父组件运行完之后调用回调函数，子组件再执行
            /* this.$emit('click',this.count,(error)=>{
                
            }); */

            // 第二种方式使用$listeners获取父组件的事件方法，直接调用父组件的事件方法即可（父组件必须得传对应的事件方法）
            /* if (this.$listeners.click) {
                const result = await this.$listeners.click();
                this.isLoading = false;
                this.error = result
            } */

            // 第三种方式：父组件传一个属性，且属性是一个函数
            const error = await this.clickFunction();
            this.isLoading = false;
            this.error = error


        }
    }

}
</script>

<style>

</style>
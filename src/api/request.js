import axios from 'axios'
import Vue from 'vue';

const instance = axios.create();

instance.interceptors.response.use(function (response) {
    console.log(response);
    if (response.data.code !== 0) {
        Vue.prototype.$showMessage({
            type: 'error',
            content: '请求没有权限！',
            callback: () => {
                // 可以做错误处理
                console.log("消息回调。。。。");
            }
        })    }
    return response;
})

export default instance;
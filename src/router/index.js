import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter); // Vue使用插件

/*
 hash模式：地址栏从#/开始匹配（location.hash来获取值），hash模式默认就是无刷新跳转，且兼容性好
 history模式: 地址栏/开始匹配(location.pathname来获取值) ，H5才出现的API，内部使用history.pushState(null,null,"/blog")来实现无刷新跳转
 */
const router = new VueRouter({
    routes,
    mode: 'history' // 默认模式是hash
});
export default router;
<template>
  <div class="menu-container">
    <!-- active-class可以修改选中时添加的选中的类样式名称（vue-router默认的选中样式是router-link-active和router-link-exact-active) -->
    <!-- exact-active-class可以修改选中时添加的选中的类样式名称（vue-router默认的选中样式是router-link-exact-active),这里只需要active-class所以exact-active-class设置空字符串 -->
    <router-link v-for="item in menus" :key="item.title" :to="{name: item.name}" :exact="item.exact" active-class="selected" exact-active-class="">
        <Icon :type="item.icon" :size="16"/>
        <span>{{ item.title }}</span>
    </router-link>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
    data(){
        return {
            menus: [
                // exact表示是否精确匹配，当精确匹配时只有路径完全相等才会拥有选中样式
                // 例如当exact为true时为路径精确匹配，/blog会拥有选中样式，但是/blog/123不会拥有选中样式，
                // 例如当exact为false时为路径模糊匹配，/blog会拥有选中样式，但是/blog/123也会拥有选中样式
                { name: 'Home', icon: 'home', title: '首页', exact: true },
                { name: 'Blog', icon: 'blog', title: '文章', exact: false },
                { name: 'About', icon: 'about', title: '关于我', exact: true },
                { name: 'Project', icon: 'code', title: '项目&效果', exact: true },
                { name: 'Message', icon: 'message', title: '留言板', exact: true },
            ]
        }
    },
    components: {
        Icon
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
@import '~@/styles/global.less';
    .menu-container{
        width: 100%;
        color: @secondary;
        overflow: hidden;
        a{
            display: block;
            height: 40px;
            line-height: 40px;
            padding-left: 44px;
            font-size: 16px;
            cursor: pointer;
            .icon-container{
                margin: 0 10px;
            }
            &.selected{
                background-color: darken(@dark,3%);
            }
            &:hover{
                background-color: @dark;
            }
            
        }
    }
</style>
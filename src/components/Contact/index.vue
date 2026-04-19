<template>
  <div class="contact-container">
    <ul>
        <li v-for="item in info" :key="item">
            <Icon :type="item.icon" :size="30"/>
            <span>{{ item.title }}</span>
        </li>
    </ul>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
    data(){
        return {
            info: [
                { icon: 'github', title: 'limodong' },
                { icon: 'email', title: '1710109384@qq.com' },
                { icon: 'qq', title: '1710109384' },
                { icon: 'weChat', title: 'limodong' },
            ]
        }
    },
    components:{
        Icon
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
@import '~@/styles/mixin.less';
.contact-container{
    .self-fill();
    color: #fff;
    ul li{
        display: flex;
        padding: 10px;
        color: @secondary;

        span{
            line-height: 30px;
            font-size: 14px;
        }
    }
    .icon-container{
        margin-right: 8px;
    }
}
</style>
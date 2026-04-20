<template>
  <div class="side-container">
    <Avatar url="https://ts4.tc.mm.bing.net/th/id/OIP-C.wfZEI6pBUt-vqQpsw_aLAwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" :size="150" />
    <p>二虎的小窝</p>
    <Menu />
    <Contact/>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import Menu from '@/components/Side/Menu';
import Contact from '@/components/Side/Contact';

export default {
    components: {
        Avatar,
        Menu,
        Contact
    }
}
</script>

<style lang="less" scoped>
    @import'~@/styles/var.less';
    .side-container{
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .avatar-container{
            margin: 20px auto;
        }
        p{
            font-size: 20px;
            font-weight: 700;
            color: #fff;
            text-align: center;
        }
        .contact-container{
            top: 600px;
        }
    }
</style>
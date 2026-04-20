<template>
  <div class="contact-test-container">
    <Contact/>
  </div>
</template>

<script>
import Contact from "./"
export default {
    props:{},
    components:{
        Contact
    }
}
</script>

<style lang="less" scoped>
.contact-test-container{
    width: 210px;
    height: 500px;
    background-color: #000;
    position: relative;
}
</style>
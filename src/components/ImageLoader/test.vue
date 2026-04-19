<template>
  <ImageLoader
   src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h2304"
   placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
   :duration="1500"
   @load="handleLoad"/>
</template>

<script>
import ImageLoader from './'
export default {
    components: {
        ImageLoader
    },
    methods:{
        handleLoad(data){
            console.log(data);
        }
    }
}
</script>

<style>

</style>
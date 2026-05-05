<template>
  <div class="form-container">
    <form action="">
        <div class="form-item">
            <div class="form-label">账号</div>
            <!-- v-model是vue提供的双向绑定的指令，它的底层就是给表单注册了一个@input事件，然后将表单的值和动态属性绑定，当值更改时监听到的input事件会修改动态属性的值 -->
            <!-- <input type="text" :value="formData.loginId" @input="formData.loginId=$event.target.value"> -->
            <input type="text" v-model="formData.loginId">
        </div>
        <div class="form-item">
            <div class="form-label">密码</div>
            <input type="password" v-model="formData.loginPwd">
        </div>
        <div class="form-item">
            <div class="form-label">爱好</div>
            <div class="loves">
                <label for="sports">
                    <input type="checkbox" id="sports" v-model="formData.loves" value="sports"/>
                    运动
                </label>
                
                <label for="movie">
                    <input type="checkbox" id="movie" v-model="formData.loves" value="movie"/>
                    电影</label>
                
                <label for="music">
                    <input type="checkbox" id="music" v-model="formData.loves" value="music"/>
                    音乐</label>
                
                <label for="other">
                    <input type="checkbox" id="other" v-model="formData.loves" value="other"/>
                    其他</label>
            </div>
        </div>
        <div class="form-item">
            <div class="form-label">年龄</div>
            <input type="text"  v-model="formData.age"/>
        </div>
        <div>
            <div>个人简介</div>
            <textarea  v-model="formData.introduce"></textarea>
        </div>
        <div class="form-item">
            <input type="checkbox" id="remember"  v-model="formData.remember">
            <label for="remember">记住我的选择</label>
        </div>
        
    </form>
    <div class="formate">
        <pre>
            {{ formData }}
        </pre>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            formData: {
                loginId: "",
                loginPwd: "",
                loves: [],
                sex:"",
                age: 18,
                introduce: "",
                remember: false
            }
        }
    }
}
</script>

<style lange="less" scoped>
.form-container{
    display: flex;
    justify-content: center;
    align-items: center;

   
   
}
 form {
    flex: 1;
}
.formate{
    flex: 1;
}
.form-item{
    display: flex;
    align-items: center;
    line-height: 50px;
}
.form-label{
    margin-right: 10px;
}
</style>
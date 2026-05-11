<template>
    <form class="data-form-container">
        <div class="form-item">
            <input type="text" placeholder="用户昵称" />
            <span class="error-message"></span>
            <div class="tips">0/10</div>
        </div>
        <div class="form-item">
            <textarea maxlength="300" placeholder="输入内容"></textarea>
            <span class="error-message"></span>
            <div class="tips">0/300</div>
        </div>
        <div class="form-item">
            <div class="submit-btn">
                <button @click.prevent>提交</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@border: 1px dashed #ccc;

.form-item {
    width: 50%;
    position: relative;
    margin-bottom: 20px;

    input,
    textarea {
        width: 100%;
        padding-top: 4px;
        padding-left: 1em;
        margin: 0;
        border: @border;
        outline: none;
        font-size: 18px;
        border-radius: 8px;
    }

    input {
        height: 40px;
        line-height: 40px;
    }

    textarea {
        resize: none;
        height: 200px;
    }

    .tips {
        position: absolute;
        right: 4px;
        bottom: 4px;
    }

    .submit-btn {
        width: 120px;
        height: 40px;
        background-color: rgb(100, 142, 214);

        border: 1px solid #fff;
        border-radius: 4px;

        button {
            width: 100%;
            height: 100%;
            background: transparent;
            color: #fff;
            border: none;
            cursor: pointer;
        }
    }
}
</style>
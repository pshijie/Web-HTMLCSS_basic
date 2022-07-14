<template>
    <div class="demo">
        <h2 class="title">学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
    export default {
        name: "School",
        data() {
            return {
                name: "尚硅谷atguigu",
                address: "北京",
            };
        },
    };
</script>

<style scoped>
    /* 加上scoped后该样式和别的组件的同名样式不会发生冲突 */
    .demo {
        background-color: skyblue;
    }
</style>
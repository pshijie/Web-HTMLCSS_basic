<template>
    <div class="demo">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
	// 暴露js给外部使用
	// 写法1:
	// const school = Vue.extends({...})
	// export {school}
	// 写法2：
	// export default Vue.extends{...}
	// 写法3：
    export default {
        name: "School",
        data() {
            return {
                name: "尚硅谷",
                address: "北京昌平",
            };
        },
        methods: {
            showName() {
                alert(this.name);
            },
        },
    };
</script>

<style>
    .demo {
        background-color: orange;
    }
</style>
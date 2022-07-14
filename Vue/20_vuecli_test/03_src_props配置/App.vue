<template>
    <div>
		<!-- age加上冒号就可以认为是表达式，这样"18"就不是一个字符串 -->
        <Student name="李四" sex="女" :age="18" />
    </div>
</template>

<script>
    import Student from "./components/Student";

    export default {
        name: "App",
        components: { Student },
    };
</script>

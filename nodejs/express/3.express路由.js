// 路由就就是针对不同的请求进行不同的处理
const express = require('express')
const router = require('./router')

const app = express()

// 注册路由模块，添加访问前缀
app.use('/api', router)  // http://127.0.0.1/api/user/list 会输出Get user list.

app.listen(80, () => {
    console.log('http://127.0.0.1')
})
// 中间件:
//      1.指流程的中间处理环节（可以视为preHandler函数）
//      2.一个函数，包含 req, res, next 三个参数，next() 参数把流转关系交给下一个中间件或路由
//      3.服务器收到请求后，可先调用中间件进行预处理
//      4.多个中间件是共享req和resp对象的
// 全局生效中间件:客户端发送的任意请求到达服务器后都会触发的中间件

const express = require('express')
const app = express()

// 定义第一个全局中间件
// 完整写法:
// const mw = function (req, resp, next) {
//     next();
// }
// app.use(mw)
// 简写:
app.use((req, res, next) => {
    console.log('调用了第1个全局中间件')
    const time = Date.now();
    req.startTime = time;  // 比如要获取请求到达服务器的时间,可以使用中间件
    next()
})
// 定义第二个全局中间件
app.use((req, res, next) => {
    console.log('调用了第2个全局中间件')
    next()
})

app.get('/user', (req, res) => {
    res.send('User page.' + req.startTime)  // 获取请求到达服务器的时间
})

app.listen(80, () => {
    console.log('http://127.0.0.1')  // 调用http://127.0.0.1/user 后先在控制台显示'调用了第1个全局中间件'和'调用了第2个全局中间件',再在页面显示User Page
})
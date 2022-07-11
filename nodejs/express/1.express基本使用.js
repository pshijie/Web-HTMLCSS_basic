const express = require('express')
// 创建 web 服务器
const app = express()

// 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
app.get('/user', (req, res) => {
    res.send({ name: 'psj', age: 100, gender: '男' })
})
app.post('/user', (req, res) => {
    res.send('请求成功')
})

app.get('/', (req, res) => {
    // 通过 req.query 可以获取到客户端发送过来的查询参数
    console.log(req.query)
    res.send(req.query)
})

// 这里的 :id 是一个动态的参数
app.get('/user/:ids/:username', (req, res) => {
    // req.params 是动态匹配到的 URL 参数，默认是一个空对象
    console.log(req.params)
    res.send(req.params)
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})
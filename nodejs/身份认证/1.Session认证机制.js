const express = require('express')
const app = express()


// 配置中间件
const session = require('express-session')
app.use(
    session({
        secret: 'Bruce', // secret 的值为任意字符串
        resave: false,
        saveUninitalized: true,
    })
)
// 向 session 中存数据
app.post('/api/login', (req, res) => {
    req.session.username = "psj"
    req.session.isLogin = true

    res.send({ status: 0, msg: 'login done' })
})

// 从 session 取数据
app.get('/api/username', (req, res) => {
    if (!req.session.isLogin) {
        return res.send({ status: 1, msg: 'fail' })
    }
    res.send({ status: 0, msg: 'success', username: req.session.username })
})

// 清空 session
app.post('/api/logout', (req, res) => {
    // 清空当前客户端的session信息
    req.session.destroy()
    res.send({ status: 0, msg: 'logout done' })
})


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})
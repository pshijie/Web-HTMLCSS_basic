const express = require('express')
const app = express()

// 定义中间件函数
const mw1 = (req, res, next) => {
    console.log('调用了第一个局部生效的中间件')
    next()
}

const mw2 = (req, res, next) => {
    console.log('调用了第二个局部生效的中间件')
    next()
}

// 两种定义局部中间件的方式（不会使用app.use）
app.get('/hello', mw2, mw1, (req, res) => res.send('hello page.'))  // mw2, mw1只会在当前理由中生效
app.get('/about', [mw2], (req, res) => res.send('about page.'))

app.get('/user', (req, res) => res.send('User page.'))

app.listen(80, function () {
    console.log('Express server running at http://127.0.0.1')
})
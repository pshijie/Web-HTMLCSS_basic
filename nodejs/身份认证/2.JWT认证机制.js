// Session认证的局限性：
//     1.需要配合 Cookie 才能实现。由于 Cookie 默认不支持跨域访问，所以涉及到前端跨域请求后端接口的时候，需要做很多额外的配置，才能实现跨域 Session 认证。
//     2.当前端请求后端接口不存在跨域问题的时候，推荐使用 Session 身份认证机制。
//     3.当前端需要跨域请求后端接口的时候，不推荐使用 Session 身份认证机制，推荐使用 JWT 认证机制
// JWT 工作原理:用户的信息通过 Token 字符串的形式，保存在客户端浏览器中。服务器通过还原 Token 字符串的形式来认证用户的身份

const express = require('express')
const app = express()

// 用于生成 JWT 字符串
const jwt = require('jsonwebtoken')
// 用于将 JWT 字符串解析还原成 JSON 对象
const expressJWT = require('express-jwt')

// 密钥为任意字符串
const secretKey = 'Bruce'


// JWT 字符串还原为 JSON 对象:注册中间件即可
// 客户端访问有权限的接口时，需通过请求头的 Authorization 字段，将 Token 字符串发送到服务器进行身份认证
// unless({ path: [/^\/api\//] }) 指定哪些接口无需访问权限
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))


// 生成 JWT 字符串
app.post('/api/login', (req, res) => {
    const userInfo = { username: 'psj', password: 123456 }

    res.send({
        status: 200,
        message: '登录成功',
        // jwt.sign() 生成 JWT 字符串
        // 参数：用户信息对象、加密密钥、配置对象-token有效期
        // 尽量不保存敏感信息，因此只有用户名，没有密码
        token: jwt.sign({ username: userInfo.username }, secretKey, { expiresIn: '30s' })
    })
})

// 获取用户信息
app.get('/admin/getinfo', (req, res) => {
    res.send({
        status: 200,
        message: '获取信息成功',
        data: req.user  // JWT会自动把用户信息对象挂在到req.user对象中
    })
})

// 捕获解析 JWT 失败后产生的错误
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.send({ status: 401, message: 'Invalid token' })
    }
    res.send({ status: 500, message: 'Unknown error' })
})


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})


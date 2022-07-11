// 1. 导入 http 模块
const http = require('http')

// 2. 创建 web 服务器实例
const server = http.createServer()

server.on('request', (req, res) => {
    // req.url 是客户端请求的 URL 地址
    const url = req.url
    // req.method 是客户端请求的 method 类型
    const method = req.method
    const str = `Your request url is ${url}, and request method is ${method}`

    // 调用 res.setHeader() 方法，设置 Content-Type 响应头，解决中文乱码的问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    console.log(str)

    // 调用 res.end() 方法，向客户端响应一些内容
    res.end(str)
})

// 4. 启动服务器
server.listen(8080, function () {
    console.log('server running at http://127.0.0.1:8080')
})

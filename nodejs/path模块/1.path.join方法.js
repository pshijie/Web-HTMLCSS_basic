const path = require('path')
const fs = require('fs')

// 注意：  ../ 会抵消前面的路径
const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
console.log(pathStr)  // \a\d\e

// 取代fs.readFile(__dirname + '/1.txt', ...)
fs.readFile(path.join(__dirname, './1.txt'), 'utf8', function (err, dataStr) {
    if (err) {
        return console.log(err.message)
    }
    console.log(dataStr)
})
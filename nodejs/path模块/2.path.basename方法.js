const path = require('path')

// 定义文件的存放路径
const fpath = '/a/b/c/index.html'

const fullName = path.basename(fpath)  // 获取路径中的最后一部分
console.log(fullName) // index.html

const nameWithoutExt = path.basename(fpath, '.html')  // 获取路径中除了扩展名的部分
console.log(nameWithoutExt) // index

const fext = path.extname(fpath)  // 获取路径中的扩展名
console.log(fext)  // .html


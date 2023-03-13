// 入口文件

// 模块引入
import * as m1 from "./01-m1.js";  // m1,m2,m3都是一个模块对象
import * as m2 from "./02-m2.js";
import * as m3 from "./03-m3.js";

console.log(m1);
console.log(m2);
console.log(m3);

m1.teach();
m2.findJob();
m3.default.change();

// 修改背景颜色为粉色
import $ from 'jquery';// const $ = require("jquery");
$('body').css('background','pink');



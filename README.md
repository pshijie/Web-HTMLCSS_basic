# HTML

## 标签

|     标签类别      |                     主要标签                     |
| :---------------: | :----------------------------------------------: |
|       换行        |                        br                        |
|       标题        |                      h1-h6                       |
|       段落        |                        p                         |
|    文本格式化     |         strong​、​b​、​em、i、del、s、ins、u         |
|      无语义       |              div:exclamation:、span              |
|       图像        |                 img:exclamation:                 |
|      超链接       |                  a:exclamation:                  |
| 表格:exclamation: |         table​​、thead、tbody、tr、caption         |
|       列表        | ul:exclamation:、li:exclamation:、​ol、dl、dt、dd |
| 表单:exclamation: |               form、inuput、label                |



# CSS

## 1.引入方式(CSS-04)

- 内部样式表
- 外部样式表
- 行内样式表

## 2.选择器:exclamation:(CSS-01/06)

- 标签选择器
- 类选择器
- id选择器
- 复合选择器：
  - 后代选择器
  - 子元素选择器
  - 子元素选择器
  - 伪类选择器

## 3.字体、文本、背景属性(CSS-02/03/08)

- 字体：
  - 字体类别
  - 字体大小
  - 字体粗细
  - 字体样式
- 文本：
  - 文本颜色
  - 对齐方式
  - 缩进距离
  - 行间距
  - 添加线
- 背景：
  - 背景颜色
  - 背景图片
  - 背景平铺

## 4.元素显示模式:exclamation:(CSS-07)

- 块元素
- 行内元素
- 行内元素

## 5.三大特性:exclamation:(CSS-09)

- 重叠性
- 继承性
- 优先级

## 6.盒子模型:exclamation:(CSS-10/11)

- 边框:
  - 圆角边框
- 内容
- 内边距
- 外边距
- 阴影：
  - 盒子阴影
  - 文字阴影

## 7.浮动:exclamation:(CSS-12/13/14)

- 传统页面布局
  - 普通流
  - 浮动
  - 定位
- 浮动的作用
- 浮动的特性
- 浮动的使用
- 清除浮动：
  - 为什么清除浮动
  - 如何清除浮动：
    - 额外标签法
    - 添加overflow
    - 添加伪元素after
    - 添加双伪元素before和after

## 8.定位:exclamation:

- 定位的本质:
  - 定位模式:
    - 静态定位
    - 相对定位
    - 决对定位
    - 固定定位
  - 边偏移:
    - top
    - bottom
    - left
    - right

- 定位的作用

# JS

## 1.JS基础

- 输入输出语句
- 数据类型：
  - 简单数据类型：
    - Number
    - String
    - Undefined
    - Null
  - 复杂数据类型：
    - Object
  - 数据类型间的转换
- 运算符
- 函数:exclamation:
- 预解析
- 对象

## 2.WebAPI

### 2.1 DOM

- 什么是DOM
- 获取元素:exclamation:：
  - 根据ID
  - 根据标签名
  - 根据类名
  - 根据选择器
  - 特殊元素的获取
- 事件三要素:exclamation:：
  - 事件源
  - 事件类型
  - 事件处理程序
- 操作元素：
  - 改变元素内容
  - 改变普通元素属性
  - 改变表单元素的属性
  - 改变样式中的属性
  - 自定义属性操作：
    - 获取元素属性值
    - 自定义属性
    - 设置属性值
    - 移除属性
- 节点操作：
  - 节点层级关系：
    - 父子
    - 邻居
  - 创建和添加节点
  - 删除节点
  - 复制节点

- 注册和删除事件:exclamation:：
  - 传统方式
  - 方法监听注册方式
- 事件流三个阶段：
  - 捕获阶段
  - 当前目标阶段
  - 冒泡阶段

- 事件对象：
  - 什么是事件对象
  - 常见事件对象属性和方法
  - 鼠标事件对象常见属性
  - 键盘事件及常见对象属性

### 2.2 BOM

- 什么是BOM
- window对象常见事件：
  - onload
  - onresize
- 定时器:exclamation:：
  - setTimeout
  - clearTimeout
  - setInterval
  - clearInterval
  - 什么是回调函数

- this执行问题：
  - 全局作用域或普通函数中
  - 方法中
  - 构造函数中
- JS执行机制:exclamation:：
  - 同步任务
  - 异步任务
  - 执行栈
  - 任务队列

- location对象：
  - 什么是location对象
  - URL的组成
  - 属性
  - 方法

- navigator对象
- history对象

### 2.3 PC端网页特效

- 元素偏移量offset：
  - 相关属性
  - 和style的区别
- 元素可视区client：
  - 相关属性
  - 和offset的区别
- 元素滚动scroll：
  - 相关属性
  - 和client的区别


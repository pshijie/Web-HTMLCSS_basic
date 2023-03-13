/**
 * 自定义模块2
 */
(function (window) {
  var msg = 'psj'
  //操作数据的函数
  function doSomething() {
    console.log('doSomething ' + msg.toUpperCase());
  }
  function doOtherthing() {
    console.log('doOtherthing ' + msg.toLowerCase());
  }
  //向外暴露
  window.myModule2 = {
    doSomething,
    doOtherthing
  }
})(window)//方便代码打包压缩
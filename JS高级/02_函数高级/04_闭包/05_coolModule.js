/**
 * 自定义模块1
 */
//私有数据
function myModule() {
  var msg = 'psj'  // 私有数据
  //操作数据的函数
  function doSomething() {
    console.log('doSomething ' + msg.toUpperCase());
  }
  function doOtherthing() {
    console.log('doOtherthing ' + msg.toLowerCase());
  }
  //向外暴露（键值对的形式）
  return {
    doSomething: doSomething,
    doOtherthing: doOtherthing
  }
}
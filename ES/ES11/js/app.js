import * as m1 from "./hello.js";  // 如果用不到也会全部加载

const btn = document.getElementById('btn');
btn.onclick = function () {
    // 1.原始方法
    // m1.hello()

    // 2.动态加载
    import('./hello.js').then(module => {  // 按需加载
        module.hello();
    });
}
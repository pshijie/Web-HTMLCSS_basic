//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
import { hunhe, hunhe2 } from './mixin'
//关闭Vue的生产提示
Vue.config.productionTip = false

// 所有的组件都复用hunhe和hunhe2的代码
// Vue.mixin(hunhe)
// Vue.mixin(hunhe2)


//创建vm
new Vue({
	el: '#app',
	render: h => h(App)
})
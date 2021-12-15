import Vue from 'vue'
import App from './App'

//关闭Vue开发中一些提示
Vue.prototype.productionTip = false

//声明当前的组件为整个应用
App.myType = 'app'

const app = new Vue(app)

//挂载当前应用的实例
app.$mount()

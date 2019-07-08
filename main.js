import Vue from 'vue'
import App from './App.vue'
import router from './router'


import "./assets/css/common.css";

// 引入axios
import axios from "./axios"
//引入ElmentUI
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi);

// 定义全局头组件
import head from "./yg/common/head.vue"
Vue.component("myHead",head);

import toTop from "./yg/common/toTop.vue"
Vue.component("toTop",toTop)


Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
import ElementUI from 'element-ui';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 引入axios并挂到Vue原形对象上
import Vue from "vue";
import axios from "axios";
Vue.prototype.$axios = axios;
// 解决 axios 访问后台 获取不到session (后台也需配置)
axios.defaults.withCredentials = true;
// axios 配置代理
axios.defaults.baseURL = 'http://127.0.0.1:8088';

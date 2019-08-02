import Vue from "vue";
import store from "./store";
import router from "./router/router";

import "./animate/animate";

// 引入 base.css/全局css
import "./css"

// 引入 Elementui
import "./Elementui"

// 引入axios并挂到Vue原形对象上
import axios from "axios";
axios.defaults.withCredentials=true;
Vue.prototype.$axios = axios;

// 注册自定义全局组件
import toyo from "./components";
Vue.use(toyo);

import App from "./App.vue";

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
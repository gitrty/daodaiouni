// import './src/css/main.scss';

import Vue from "vue";
import store from "./src/store/";
import router from "./src/router";


import "./src/animate";

import "./src/css/base.css";
import "./src/css/public.scss";

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

import App from "./src/App.vue";

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
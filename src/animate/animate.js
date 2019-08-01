import Vue from 'vue';
Vue.prototype.getStyle = (el, attr) => {
    // chrome等浏览器
    if (window.getComputedStyle) {
        return window.getComputedStyle(el, null)[attr];
    }
    // ie 678
    return el.currentStyle[attr];
}
Vue.prototype.animate_slow = (el, json, callback) => {
    // 清除之前的定时器
    clearInterval(el.timer);
    // 创建新的定时器
    el.timer = setInterval(() => {
        let flag = true;
        for (let attr in json) {
            // 当前值
            let current = 0;
            // 目标值
            let target = 0;
            if (attr == 'opacity') {
                current = Vue.prototype.getStyle(el, attr) * 100;
                target = json[attr] * 100;
            } else {
                current = parseInt(Vue.prototype.getStyle(el, attr));
                target = parseFloat(json[attr]);
            }
            // 步长 (目标值-当前值)/10  (默认除10,可自定义)
            let steps = (target - current) / 10;
            steps = steps > 0 ? Math.ceil(steps) : Math.floor(steps);
            // 新的位置 = 当前位置 + 步长
            if (attr == 'opacity') {
                el.style[attr] = (current + steps) / 100;
                el.style.filter = "alpha(opacity = " + (current + steps) + ")"
            } else if (attr == 'zIndex') {
                el.style.zIndex = target;
            } else {
                el.style[attr] = current + steps + 'px';
            }
            if (current != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(el.timer);
            if (typeof (callback) == 'function') {
                callback();
            }
        }
        // 默认30ms ,可自定义
    }, 30);
}


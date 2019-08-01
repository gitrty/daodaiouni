import Vue from 'vue';
export default {
    increment: ({ commit, state, getters }) => {
        commit('increment_fun');
    },
    show: ({ commit, state, getters }) => {
        state.falg = !state.falg;
    },
    addshop: ({ state }) => {
        // 创建小图
        state.shopnum++;
        let midImg = document.getElementById('main_img');
        let smallImg = midImg.cloneNode(true);
        let temDiv = document.querySelector('.con-fangDaIMg');
        smallImg.style.position = 'fixed';
        smallImg.style.top = event.clientY + 'px';
        smallImg.style.left = event.clientX + 'px';
        smallImg.style.width = '60px';
        smallImg.style.height = '60px';
        smallImg.style.zIndex = '100';
        smallImg.style.borderRadius = '50%';

        document.body.appendChild(smallImg);

        // 计算 飞到右侧购物车 动画的距离
        let flength = document.querySelector('#dr-quickservice');
        let mlength = document.querySelector('.droline_kf');
        let mX = flength.offsetLeft;
        let mY = flength.offsetTop + mlength.offsetHeight;
        Vue.prototype.animate_slow(smallImg, { left: mX, top: mY, opacity: 0 }, () => {
            smallImg.style.display = 'none';
        });

    },
    login: ({ state }) => {
        // let Header = document.getElementById('header');
        // let Float = document.getElementById('dr-quickservice');
        // let Logo = document.getElementById('logo');
        // let Nav = document.getElementById('nav');
        // let Footer = document.getElementById('footer');
        // Header.style.display = 'none';
        // Float.style.display = 'none';
        // Logo.style.display = 'none';
        // Nav.style.display = 'none';
        // Footer.style.display = 'none';
    },
    regs: () => {

    }

}

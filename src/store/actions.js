import Vue from 'vue';
export default {
    increment: ({ commit, state, getters }) => {

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
        // 购物车
        let thatshop;    //当前页面的商品
        let thatuser;    //当前登录用户
        let thatche;     //当前用户购物车
        Vue.prototype.$axios.post("/shopping/wares", { token: "toyo" }).then(({ data }) => {
            let shopid = window.location.href.split('?')[1].split('=')[1];
            // console.info(shopid)
            data.forEach(el => {
                if (el.wimg == shopid) {
                    thatshop = el;
                }
            })
            // console.info(thatshop);

            Vue.prototype.$axios.post('/api/index').then(({ data }) => {
                // console.info(data)
                if (data.status == 1) {
                    thatuser = data.uname;
                } else {
                    console.info('零食用户');
                    state.temshow = true;
                    return;
                }
                // console.info(thatuser);
                // 获取当前用户购物车
                Vue.prototype.$axios.post("/shopping/usershop", { uname: thatuser }).then(({ data }) => {
                    // console.info(data.ushop);
                    let thatche = data.ushop;  //数据库中的用户 购物车
                    // 若购物车不存在 则创建一个购物车 (一个数组)
                    if (thatche == null || thatche == '' || thatche == undefined) {
                        thatche = [];
                        thatshop.num = 1;
                        thatche.push(thatshop);
                        Vue.prototype.$axios.post('/shopping/addshop',
                            { uname: thatuser, ushop: JSON.stringify(thatche) });
                        //若存在购物车 , 则获取到用户购物车 
                    } else {
                        let thische = JSON.parse(thatche);
                        let tem = 0
                        console.info(thatshop)
                        // 如果存在商品 则增加数量
                        thische.forEach((el, index) => {
                            if (el.wimg == thatshop.wimg) {
                                thische[index].num++;
                                tem++;
                            }
                        })
                        // 如果不存在商品 则添加商品
                        if (tem == 0) {
                            thatshop.num = 1;
                            thische.push(thatshop);
                        }
                        console.info(thische);
                        Vue.prototype.$axios.post('/shopping/addshop',
                            { uname: thatuser, ushop: JSON.stringify(thische) });
                        state.num_zong++;
                    }

                })
            })

        })


    },
    nor({ state }) {
        state.temshow = false;
    },
    gologin({ state }) {
        state.temshow = false;
        Vue.prototype.$myrouter.push('/login');
    }
}

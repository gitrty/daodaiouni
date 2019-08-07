<template>
  <div class="love_quickservice" id="dr-quickservice" style="display: block;">
    <div class="massa" style="left: 0px; display: none;">
      <a href="javascript:void(0);" style="background:#FFF;">
        <p class="paop" style="background:#FFF;">
          欢迎光临我爱钻石网
          <br />有任何疑问，都可以咨询我们哦~
        </p>
      </a>
      <a class="mi-a" href="javascript:;"></a>
    </div>
    <div class="droline_kf">
      <a href="javascript:void(0);">
        <img src="../../images/kefu_top.gif" style="cursor: pointer;" />
      </a>
    </div>
    <router-link to="/shopping">
      <div class="love_quick_cort " >
        <span
          id="right_goods_sum"
          class="right_goods_sum"
          style="display: inline;"
          v-show="this.$store.state.num_zong"
        >{{this.$store.state.num_zong}}</span>
        <a rel="nofollow" href="javascript:void(0)" id="right_cart" class="love_quick2"></a>
        <div class="love_quick_word" style="  ">购物车</div>
      </div>
    </router-link>
    <div class="love_quick_cort" @click="goDetails">
      <a rel="nofollow" href="javascript:void(0)" class="love_quick3"></a>
      <div class="love_quick_word" style="right: 0px; ">QQ咨询</div>
    </div>
    <div class="love_quick_cort">
      <a rel="nofollow" href="javascript:void(0);" class="love_quick4"></a>
      <div
        class="love_quick_word quick_ewm"
        style="right: 0px;width:104px;height:140px;padding:6px;  "
      >
        <img src="../../images/erweima.jpg" alt="移动版二维码" />
      </div>
    </div>
    <div class="love_quick_cort">
      <a href="javascript:void(0)" class="love_quick5"></a>
      <div class="love_quick_word" style="right: 0px; ">预约进店</div>
    </div>
    <div class="love_quick_cort" style="margin-top:34px; margin-bottom:18px;">
      <a href="javascript:void(0)" class="to-top" @click="totop"></a>
      <div class="love_quick_word" style="right: 0px; top:0;">返回顶部</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    totop() {
      document.documentElement.scrollTop = 0;
    },
    // 暂时将qq挂到详情页,开发完成后删除
    goDetails() {
      this.$router.push("/details");
    }
  },
  computed: mapGetters(["shopnum"]),
  mounted() {
    let oList = document.querySelectorAll(".love_quick_cort");
    let divs = document.querySelectorAll(".love_quick_word");

    oList.forEach((el, index) => {
      el.onmouseenter = () => {
        this.animate_slow(divs[index], {
          opacity: 1,
          right: 49,
          display: "block"
        });
      };
      el.onmouseleave = () => {
        this.animate_slow(divs[index], { opacity: 0, right: 0 });
      };
    });
    // 获取已登录用户
    this.$axios.post("/api/index").then(({ data }) => {
      if (data.status == -1) {
        // console.info("零食用户");
        return;
      }
      let username = data.uname;
      // 获取已登录用户的购物车
      this.$axios
        .post("/shopping/usershop", { uname: username })
        .then(({ data }) => {
          let usershop = JSON.parse(data.ushop);
          if (usershop == "" || usershop == null || usershop == undefined) {
            usershop = [];
          }
          // 购物车总数量
          let zongshu = 0;
          usershop.forEach(el => {
            zongshu += el.num;
          });
          this.$store.state.num_zong = zongshu;
        });
    });
  }
};
</script>

<style lang="scss" scoped>
.love_quickservice {
  .love_quick2,
  .love_quick3,
  .love_quick4,
  .love_quick5 {
    display: inline-block;
    background-image: url(../../images/kefu_bg.png);
    background-repeat: no-repeat;
    margin: 0 auto;
    margin-top: 8px;
  }
  display: block;
  position: fixed;
  right: 30px;
  bottom: 30px;
  background: #f6eee2;
  width: 50px;
  text-align: center;
  z-index: 8001;
  .massa {
    position: absolute;
    top: 10px;
    left: 0;
    width: 220px;
    height: 80px;
    display: none;
    background: url(../../images/tc_border.png) no-repeat;
    z-index: 10000;
    a {
      display: inline-block;
      margin: 0 auto;
      margin-top: 8px;
    }
    .paop {
      font-size: 12px;
      margin: 7px 0;
      text-align: center;
      line-height: 20px;
      width: 182px;
      color: #000;
      cursor: pointer;
    }
    .mi-a {
      width: 20px;
      height: 20px;
      position: absolute;
      display: inline-block;
      right: 10px;
      top: -10px;
      background: url(../../images/tc_close.png) no-repeat;
      transition: 0.2s;
    }
  }
}
.droline_kf {
  background: #f6eee2;
  width: 58px;
  position: relative;
  height: 100px;
  left: -4px;
  cursor: pointer;
  margin-bottom: 26px;
  a {
    display: inline-block;
    background-image: url(../../images/kefu_bg.png);
    background-repeat: no-repeat;
    margin: 0 auto;
    margin-top: 8px;
  }
}
.love_quick_cort {
  position: relative;
  width: 50px;
  height: 50px;
  margin: 3px 0;
  z-index: 1;
  line-height: 50px;
  .right_goods_sum {
    display: none;
    position: absolute;
    width: 16px;
    height: 16px;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    left: 32px;
    margin-top: 5px;
    color: #fff;
    background: #ca0000;
    border-radius: 16px;
  }
}
.love_quick_word {
  // display: none;
  position: absolute;
  width: 66px;
  height: 50px;
  background: #fff;
  padding-left: 10px;
  color: #9d7e6a;
  font-size: 12px;
  top: 9px;
  right: 0;
  z-index: -1;
  opacity: 0;
  filter: alpha(opacity=0);
  border-left: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  border-top: 1px solid #f0f0f0;
  line-height: 48px;
  margin-top: -1px;
  text-align: left;
}
.love_quick3 {
  background-position: -0px -68px;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: #fff;
  }
}
.love_quick4 {
  background-position: -0px -118px;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: #fff;
  }
}
.love_quick5 {
  background-position: 0 -168px;
  width: 50px;
  height: 50px;
  &:hover {
    background-color: #fff;
  }
}
.love_quick2 {
  background-position: -0px -17px;
  width: 50px;
  height: 50px;
  &:hover {
    background-color: #fff;
  }
}
.love_quickservice .to-top {
  display: block;
  background: url(../../images/go_top.png) no-repeat;
  background-position: 1px 0px;
  width: 50px;
  height: 50px;
  margin-top: 0px;
  &:hover {
    background-position: -48.5px 0px;
  }
}
// .nonebgimg{
//   background-image:none;
// }
</style>



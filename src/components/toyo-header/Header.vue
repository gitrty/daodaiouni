<template>
  <div id="header">
    <!-- 顶部导航 -->
    <div class="top">
      <div class="con">
        <div class="top-con-l f-l">
          <p>我爱钻石网欢迎您!</p>
          <p>
            微信小程序
            <span></span>
          </p>
          <p>服务热线 : 400-666-9518</p>
        </div>
        <div class="top-con-r f-r">
          <p>钻石学堂</p>
          <p>
            今日金价
            <span>
              <em class="f-l">足金零售价</em>
              <em>{{mon}}</em> 元/克
            </span>
          </p>
          <p @click="login" v-show="doLogin">登录</p>
          <p @click="regs" v-show="doLogin">注册</p>
          <p id="user" v-show="!doLogin">欢迎,{{username}}</p>
          <p id="esc" @click="esc" v-show="!doLogin">退出</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      mon: "348",
      doLogin: false,
      username: ""
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    regs() {
      this.$router.push("/regs");
    },
    esc() {
      if (confirm("确定要退出吗?")) {
        this.$axios.post("http://127.0.0.1:8088/api/esc").then(res => {
          // this.$router.push("/login");
          window.history.go(0);
        });
      }
    }
  },
  mounted() {
    // 获取登录状态
    this.$axios.post("http://127.0.0.1:8088/api/index").then(({ data }) => {
      if (data.status == 1) {
        this.doLogin = false;
        this.username = data.uname;
      } else {
        this.doLogin = true;
      }
      // console.info(data);
    });
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  min-width: 1200px;
  height: 30px;
  background: #444444;
  text-align: center;
  .con {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    // background: indianred;
    p {
      display: inline-block;
      line-height: 30px;
      color: silver;
      font-size: 13px;
    }
    .top-con-l {
      p {
        margin-right: 40px;
      }
      p:nth-child(2) {
        cursor: pointer;
        width: 109px;
        position: relative;
        z-index: 100;
        &:hover {
          background-color: #fff;
        }
        &:hover span {
          display: block;
        }
        span {
          display: none;
          width: 148px;
          height: 146px;
          border: 1px solid #dfdfdf;
          border-top: 0;
          position: absolute;
          z-index: 333;
          left: -20px;
          background: #fff url(./../../images/qrcode.png) no-repeat center;
        }
      }
    }
    .top-con-r {
      p {
        cursor: pointer;
        margin-left: 32px;
        &:hover {
          color: #fff;
        }
      }
      p:nth-child(2) {
        width: 106px;
        background-color: #f0b60a;
        color: #000;
        position: relative;
        &:hover {
          background-color: #fff;
        }
        &:hover span {
          display: block;
        }
        span {
          position: absolute;
          display: none;
          width: 194px;
          height: 34px;
          line-height: 34px;
          padding: 0 10px;
          font-size: 12px;
          color: #8f8f8f;
          text-align: right;
          border: 1px solid #efefef;
          border-top: 0;
          left: -87px;
          background-color: #fff;
          em:nth-child(1) {
            color: #000;
          }
          em:nth-child(2) {
            color: #c53c58;
          }
        }
      }
    }
  }
}
#user {
  &:hover {
    color: silver;
    cursor: initial;
  }
}
#esc {
  margin-left: 8px;
}
</style>


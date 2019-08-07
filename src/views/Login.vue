<template>
  <div id="login">
    <!-- top -->
    <div class="login-top">用户登录</div>
    <!-- left -->
    <div class="login-l">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="form.uname" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.upwd" placeholder="请输入密码" type="password"></el-input>
        </el-form-item>
        <el-form-item label="记住密码">
          <el-switch v-model="form.delivery"></el-switch>
          <el-tag class="wjpwd" type="danger" @click="wjpwd">忘记密码?</el-tag>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="disb">登录</el-button>
        </el-form-item>
      </el-form>
      <div class="tolog">
        <p>使用合作账号登录我爱钻石网</p>
        <p>
          <em class="myicon myico1"></em> 支付宝
        </p>
        <p>
          <em class="myicon myico2"></em>QQ
        </p>
        <p>
          <em class="myicon myico3"></em>新浪微博
        </p>
      </div>
    </div>
    <!-- right -->
    <div class="login-r">
      <p>还不是我爱钻石网用户？</p>
      <p>现在立即注册成为我爱钻石网用户，便能立刻享受便宜又放心的购物乐趣</p>
      <el-button type="primary" @click="onReg">注册新用户</el-button>
    </div>
    <div class="clear-f"></div>

    <!-- end -->
  </div>
</template>

<script>
// 使用base64进行编码
import { Base64 } from "js-base64";
export default {
  data() {
    return {
      form: {
        uname: "",
        upwd: "",
        delivery: true
      }
    };
  },
  methods: {
    // 登录验证
    onSubmit() {
      if (this.form.uname == "" || this.form.upwd == "") {
        console.info("账号密码不能为空");
      } else {
        this.$axios
          .post("/api/login", {
            uname: this.form.uname,
            upwd: Base64.encode(this.form.upwd)
          })
          .then(({ data }) => {
            if (data.status == 1) {
              // 登录成功
              // 是否记住账号密码  (存储cookie)
              if (this.form.delivery) {
                // 上传账号密码到cookie
                this.$cookies.set(
                  "keyName",
                  Base64.encode(this.form.uname),
                  60 * 60 * 24 * 7
                );
                this.$cookies.set(
                  "keyPwd",
                  Base64.encode(this.form.upwd),
                  60 * 60 * 24 * 7
                );
              } else {
                this.$cookies.remove("keyName");
                this.$cookies.remove("keyPwd");
              }
              this.$router.push("/");
              window.history.go(0);
            } else {
              //登录失败
              console.info(data.msg);
              alert("密码错误");
            }
          });
      }
    },
    onReg() {
      // console.log("reg!");
      this.$router.push("/regs");
    },
    wjpwd() {
      console.info("忘记密码!");
    }
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    // 判断是否有记住密码
    if (this.$cookies.get("keyName") && this.$cookies.get("keyPwd")) {
      this.form.uname = Base64.decode(this.$cookies.get("keyName"));
      this.form.upwd = Base64.decode(this.$cookies.get("keyPwd"));
    }
  }
};
</script>

<style lang='scss' scoped >
#login {
  width: 1000px;
  //   height: 380px;
  margin: 0 auto;
  //   background-color: pink;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 20px;
  .login-top {
    width: 100%;
    height: 60px;
    //   background-color: gold;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
    border-bottom: 1px solid #ccc;
  }
  .login-l {
    width: 550px;
    // height: 300px;
    // background-color: pink;
    padding: 20px 40px;
    float: left;
    border-right: 1px solid #ccc;
  }
  .login-r {
    width: 400px;
    height: 300px;
    // background-color: pink;
    padding: 30px 40px;
    float: left;

    p {
      margin-top: 10px;
    }
    p:nth-child(1) {
      font-weight: 900;
    }
    p:nth-child(2) {
      margin-bottom: 10px;
    }
  }
  .clear-f {
    clear: both;
  }
}
.wjpwd {
  margin-left: 20px;
  cursor: pointer;
}
.tolog {
  p {
    font-size: 12px;
    color: #777;
    margin-right: 6px;
    &:hover {
      color: indianred;
      cursor: pointer;
    }
  }
  p:nth-child(1) {
    margin-left: 60px;
    margin-bottom: 10px;
    color: #000;
  }
  p:nth-child(2) {
    float: left;
    margin-left: 60px;
  }
  p:nth-child(3) {
    float: left;
  }
  p:nth-child(4) {
    float: left;
  }
}
.myicon {
  width: 16px;
  height: 16px;
  display: inline-block;
  background: url(../images/login.png);
  vertical-align: bottom;
}
.myico1 {
  background-position: -39px 287px;
}
.myico2 {
  background-position: -55px 287px;
}
.myico3 {
  background-position: -70px 287px;
}
</style>



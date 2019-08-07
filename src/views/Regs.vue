<template>
  <div id="login">
    <!-- top -->
    <div class="login-top">用户注册</div>
    <!-- left -->

    <div class="login-l">
      <!-- left-top -->
      <div class="login-l-t">
        <div class="login-user" @click="change1" :style="tabstyle1"></div>
        <div class="login-email" @click="change2" :style="tabstyle2"></div>
      </div>
      <!-- left-bottom1 -->
      <el-form ref="form" :model="form" label-width="100px" v-show="tabreg">
        <el-form-item label="账号">
          <el-input v-model="form.uname" placeholder="请输入用户名" @change="unm"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.upwd" placeholder="请输入密码" type='password'></el-input>
        </el-form-item>
        <el-form-item label="重复密码">
          <el-input v-model="form.upwd2" placeholder="请再次输入密码" type='password'></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="form.code" placeholder="请输入验证码" class="incode"></el-input>
          <p id="icode" @click="tabcode" v-text="code" :title="'点击切换验证码'"></p>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="disb">注册</el-button>
        </el-form-item>
      </el-form>
      <!-- left-bottom2 -->
      <el-form ref="form2" :model="form2" label-width="100px" v-show="!tabreg">
        <el-form-item label="邮箱">
          <el-input v-model="form2.uname" placeholder="请输入邮箱" @change="unm2"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form2.upwd" placeholder="请输入密码" type='password'></el-input>
        </el-form-item>
        <el-form-item label="重复密码">
          <el-input v-model="form2.upwd2" placeholder="请再次输入密码" type='password'></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="form2.code" placeholder="请输入验证码" class="incode"></el-input>
          <p id="icode" @click="tabcode" v-text="code" :title="'点击切换验证码'"></p>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit2" class="disb">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- right -->
    <div class="login-r2">
      <p>已有账号，请直接登录</p>
      <router-link to="/login">
        <el-button type="primary">登录</el-button>
      </router-link>
      <div class="tolog2">
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
    <div class="clear-f"></div>

    <!-- end -->
  </div>
</template>

<script>
import { Message } from "element-ui";
import { Base64 } from "js-base64";
export default {
  data() {
    return {
      form: {
        uname: "",
        upwd: "",
        upwd2: "",
        code: ""
      },
      form2: {
        uname: "",
        upwd: "",
        upwd2: "",
        code: ""
      },
      code: "1234",
      tabreg: true,
      tabstyle1: {
        "background-position": "134px 224px"
      },
      tabstyle2: {
        "background-position": "0px 224px"
      },
      tabTest: false
    };
  },
  methods: {
    unm() {
      // 后台验证是否重复
      this.$axios
        .post("/api/test", { uname: this.form.uname })
        .then(({ data }) => {
          if (data.status == -1) {
            Message({
              message: "用户名已存在",
              type: "warning"
            });
          } else {
            Message({
              message: "用户名可用",
              type: "'success'"
            });
          }
        });
    },
    unm2() {
      if (
        !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
          this.form2.uname
        )
      ) {
        Message({
          message: "请输入正确的邮箱",
          type: "warning"
        });
        return;
      }
      // 后台验证是否重复
      this.$axios
        .post("/api/test", { uname: this.form2.uname })
        .then(({ data }) => {
          if (data.status == -1) {
            Message({
              message: "用户名已存在",
              type: "warning"
            });
          } else {
            Message({
              message: "用户名可用",
              type: "'success'"
            });
          }
        });
    },
    //  1  ===> 用户名登录验证
    onSubmit() {
      // 验证是否有未填项
      if (
        this.form.uname == "" ||
        this.form.upwd == "" ||
        this.form.upwd2 == "" ||
        this.form.code == ""
      ) {
        alert("请填写完整信息");
        return;
      }
      // 各种验证
      if (this.form.upwd.length < 6) {
        alert("密码不能少于6位");
        return;
      }
      // 验证码验证
      if (!(this.form.code.toUpperCase() == this.code.toUpperCase())) {
        alert("验证码错误");
        return;
      }
      // 重复密码验证
      if (!(this.form.upwd == this.form.upwd2)) {
        alert("两次密码不一致");
        return;
      }
      this.$axios
        .post("/api/regs", {
          uname: this.form.uname,
          upwd: Base64.encode(this.form.upwd)
        })
        .then(({ data }) => {
          // console.info(data)
          if (data.status == 1) {
            if (confirm(data.msg + ",是否现在登录")) {
              this.$router.push("/login");
            }
          } else {
            console.info(data.msg);
          }
        });
      return false;
    },

    // 2 ===>  邮箱登录验证
    onSubmit2() {
      // 验证是否有未填项
      if (
        this.form2.uname == "" ||
        this.form2.upwd == "" ||
        this.form2.upwd2 == "" ||
        this.form2.code == ""
      ) {
        alert("请填写完整信息");
        return;
      }
      // 各种验证

      if (this.form2.upwd.length < 6) {
        alert("密码不能少于6位");
        return;
      }
      // 验证码验证
      if (!(this.form2.code.toUpperCase() == this.code.toUpperCase())) {
        alert("验证码错误");
        return;
      }
      // 重复密码验证
      if (!(this.form2.upwd == this.form2.upwd2)) {
        alert("两次密码不一致");
        return;
      }
      this.$axios
        .post("http://127.0.0.1:8088/api/regs", {
          uname: this.form2.uname,
          upwd: Base64.encode(this.form2.upwd)
        })
        .then(({ data }) => {
          if (data.status == 1) {
            if (confirm(data.msg + ",是否现在登录")) {
              this.$router.push("/login");
            }
          } else {
            alert(data.msg);
          }
        });
      return false;
    },

    // 点击切换验证码
    tabcode() {
      let str = "";
      for (let i = 0; i < 4; i++) {
        if (Math.random() > 0.5) {
          str += parseInt(Math.random() * 10);
        } else {
          str += String.fromCharCode(parseInt(Math.random() * 26 + 65));
        }
      }
      this.code = str;
    },

    // 点击切换登录方式
    change1() {
      this.tabstyle1 = {
        "background-position": "134px 224px"
      };
      this.tabstyle2 = {
        "background-position": "0px 224px"
      };
      this.tabreg = true;
    },
    change2() {
      this.tabstyle1 = {
        "background-position": "134px 269px"
      };
      this.tabstyle2 = {
        "background-position": "0px 269px"
      };
      this.tabreg = false;
    }
  },
  mounted() {
    document.documentElement.scrollTop = 0;

    // 生成验证码
    let createCode = () => {
      let str = "";
      for (let i = 0; i < 4; i++) {
        if (Math.random() > 0.5) {
          str += parseInt(Math.random() * 10);
        } else {
          str += String.fromCharCode(parseInt(Math.random() * 26 + 65));
        }
      }
      this.code = str;
    };
    createCode();

    // TAB键切换注册方式
    window.onkeydown = ev => {
      // 阻止 键盘Tab键 默认行为,解决阻止默认行为后input框无法输出
      let tar = ev.target;
      while (tar.nodeType != 1) {
        tar = tar.parentNode;
      }
      if (
        tar.tagName != "SELECT" &&
        tar.tagName != "INPUT" &&
        tar.tagName != "TEXTAREA" &&
        tar.tagName != "A"
      ) {
        ev.preventDefault();
      }
      if (ev.keyCode == 9) {
        this.tabreg = !this.tabreg;
        if (this.tabreg) {
          this.tabstyle1 = {
            "background-position": "134px 224px"
          };
          this.tabstyle2 = {
            "background-position": "0px 224px"
          };
        } else {
          this.tabstyle1 = {
            "background-position": "134px 269px"
          };
          this.tabstyle2 = {
            "background-position": "0px 269px"
          };
        }
      }
    };
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
  .login-r2 {
    text-align: center;
    width: 400px;
    height: 100%;
    // height: 300px;
    // background-color: pink;
    padding: 30px 40px;
    float: left;

    > p {
      margin-top: 60px;
      margin-bottom: 20px;
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
.tolog2 {
  p {
    font-size: 12px;
    color: #777;
    margin-right: 6px;
    &:hover {
      color: indianred;
      cursor: pointer;
    }
  }
  > p {
    margin-top: 20px;
  }
  p:nth-child(1) {
    // margin-left: 60px;
    // margin-bottom: 10px;
    color: #000;
  }
  p:nth-child(2) {
    float: left;
    margin-left: 76px;
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
.incode {
  width: 120px;
  float: left;
}
#icode {
  width: 80px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  line-height: 40px;
  float: left;
  margin-left: 20px;
  vertical-align: bottom;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
}
.login-l-t {
  height: 70px;
  width: 100%;
  // background-color:pink;
  border-bottom: 1px dashed #ccc;
  margin-bottom: 30px;

  .login-user {
    background: url(../images/login.png);
    background-position: 134px 224px;
    width: 134px;
    height: 45px;
    float: left;
    // display: inline;
    cursor: pointer;
  }
  .login-email {
    background: url(../images/login.png);
    background-position: 0px 224px;
    width: 134px;
    height: 45px;
    float: left;
    margin-left: 10px;
    cursor: pointer;
  }
}
</style>



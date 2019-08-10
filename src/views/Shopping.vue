<template>
  <div class="shopping">
    <div class="shopping-con">
      <div>
        <img src="../images/cart1.png" width="966" height="80" />
      </div>
      <!-- top -->
      <div class="shop-top">
        <table width="946" align="center" border="0" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td width="36" height="32"></td>
              <td width="38">
                <!-- <div style="text-align:center" class="yahei font14 fontblack">图片</div> -->
                <input type="checkbox" id="checkall" checked @click="checkall" />
              </td>
              <td width="280">商品详情</td>
              <td width="100">钻石网报价</td>
              <td width="108">手寸</td>
              <td width="102">刻字</td>
              <td width="118">数量</td>
              <td width="87">小计</td>
              <td width="77">操作</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- content -->
      <div class="shop-mid" v-for="(val,index) in forshop" :key="index">
        <table
          width="946"
          align="center"
          border="0"
          cellspacing="0"
          cellpadding="0"
          id="tabd40359"
          class="fctd_gray"
        >
          <tbody>
            <tr>
              <td width="36">
                <input type="checkbox" class="check" checked @click="change" />
              </td>
              <td width="318" class="font14 fontblack">
                <table width="318" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td width="112">
                        <a href>
                          <img :src="require(`../images/${val.wimg}.jpg`)" width="80" height="80" />
                        </a>
                      </td>
                      <td width="160">
                        <div class="fcgn">
                          <a href>{{val.wname}}</a>
                        </div>
                      </td>
                      <td width="46">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td width="100">
                ￥{{val.wprice}}
                <input type="hidden" id="good_price40359" value="6299.00" />
              </td>
              <td width="108">0</td>
              <td width="102"></td>
              <td width="118">
                <div style="width:76px; margin:auto">
                  <table align="center" width="76" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td width="17" class="fc_jian" @click="increment" :value="val.id">
                          <a href="javascript:void(0);"></a>
                        </td>
                        <td width="42" align="center">
                          <input
                            class="fcsum"
                            type="text"
                            id="good_num40359"
                            :value="val.num"
                            disabled
                          />
                        </td>
                        <td width="17" class="fc_jia" @click="decrement" :value="val.id">
                          <a href="javascript:void(0);"></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
              <td width="87" id="xj_good40359">￥{{val.num*val.wprice}}.00</td>
              <td width="77">
                <span class="fc_sc">
                  <a class="tips">收藏</a>
                </span>
                <br />
                <span class="fc_del">
                  <a class="tipsdel" @click="delshop" :value="val.id">删除</a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- bottom -->
      <div class="cart_confirm" v-show="this.$store.state.num_zong">
        <div class="width946">
          <div class="w946">
            <table width="946" align="center" border="0" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>
                  <td width="36" height="32"></td>
                  <td width="106">
                    <div align="left" class="sl_zongji">
                      数量总计：
                      <span class="mcolor2" id="allgoodsnumber">{{this.$store.state.num_zong}}</span>件
                    </div>
                  </td>
                  <td width="65">
                    <div align="right" class="jg_zongji">金额总计：</div>
                  </td>
                  <td width="243">
                    <div align="left" class="m_zongji">
                      <span
                        class="font24 mcolor3"
                        id="allgoodsamount"
                      >￥{{this.$store.state.price_zong}}</span>
                    </div>
                  </td>
                  <td width="176">
                    <div align="right" class="goonbuy">
                      <a href="javascript:void(0)">
                        <img src="../images/goonbue.png" width="122" height="37" />
                      </a>
                    </div>
                  </td>
                  <td width="208" class="goonbuy2">
                    <a href="javascript:void(0)">
                      <img src="../images/jiesuan.png" width="122" height="37" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="cart_confirm myconfirm" v-show="!this.$store.state.num_zong">
        <p>暂无商品...</p>
      </div>
      <!-- end -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { MessageBox } from "element-ui";
export default {
  data() {
    return {
      forshop: []
    };
  },
  methods: {
    // 减
    increment(ev) {
      let uid = ev.currentTarget.getAttribute("value");
      this.$axios.post("/api/index").then(({ data }) => {
        let username = data.uname;
        // 获取已登录用户的购物车
        this.$axios
          .post("/shopping/usershop", { uname: username })
          .then(({ data }) => {
            let usershop = JSON.parse(data.ushop);
            // console.info(usershop);
            usershop.forEach((el, index) => {
              if (el.id == uid) {
                if (usershop[index].num > 1) {
                  usershop[index].num--;
                }
              }
            });
            // 从数据库中增加该项商品
            this.$axios
              .post("/shopping/addshop", {
                uname: username,
                ushop: JSON.stringify(usershop)
              })
              .then(res => {
                this.forshop = usershop;
                // 计算总数量和总金额
                let checks = document.querySelectorAll(".check");
                let zongshu = 0;
                let zongjia = 0;
                checks.forEach((ele, index) => {
                  if (ele.checked) {
                    // 购物车总数量
                    zongshu += this.forshop[index].num;
                    // 购物车商品总价格
                    zongjia += parseInt(
                      this.forshop[index].wprice * this.forshop[index].num
                    );
                  }
                });
                this.$store.state.num_zong = zongshu;
                this.$store.state.price_zong = zongjia;
              });
          });
      });
    },
    // 加
    decrement(ev) {
      let uid = ev.currentTarget.getAttribute("value");
      this.$axios.post("/api/index").then(({ data }) => {
        let username = data.uname;
        // 获取已登录用户的购物车
        this.$axios
          .post("/shopping/usershop", { uname: username })
          .then(({ data }) => {
            let usershop = JSON.parse(data.ushop);
            // console.info(usershop);
            usershop.forEach((el, index) => {
              if (el.id == uid) {
                usershop[index].num++;
              }
            });
            // 从数据库中增加该项商品
            this.$axios
              .post("/shopping/addshop", {
                uname: username,
                ushop: JSON.stringify(usershop)
              })
              .then(res => {
                this.forshop = usershop;
                // 计算总数量和总金额
                let checks = document.querySelectorAll(".check");
                let zongshu = 0;
                let zongjia = 0;
                checks.forEach((ele, index) => {
                  if (ele.checked) {
                    // 购物车总数量
                    zongshu += this.forshop[index].num;
                    // 购物车商品总价格
                    zongjia += parseInt(
                      this.forshop[index].wprice * this.forshop[index].num
                    );
                  }
                });
                this.$store.state.num_zong = zongshu;
                this.$store.state.price_zong = zongjia;
              });
          });
      });
    },
    // 操作 - 删除
    delshop(ev) {
      let uid = ev.currentTarget.getAttribute("value");
      MessageBox.confirm("确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "info"
      }).then(() => {
        // 获取已登录用户
        this.$axios.post("/api/index").then(({ data }) => {
          let username = data.uname;
          // 获取已登录用户的购物车
          this.$axios
            .post("/shopping/usershop", { uname: username })
            .then(({ data }) => {
              let usershop = JSON.parse(data.ushop);
              // console.info(usershop);
              usershop.forEach((el, index) => {
                if (el.id == uid) {
                  usershop.splice(index, 1);
                }
              });
              // 从数据库中删除该项商品
              this.$axios
                .post("/shopping/addshop", {
                  uname: username,
                  ushop: JSON.stringify(usershop)
                })
                .then(res => {
                  this.forshop = usershop;
                  // 计算总数量和总金额
                  let checks = document.querySelectorAll(".check");
                  let zongshu = 0;
                  let zongjia = 0;
                  checks.forEach((ele, index) => {
                    if (ele.checked) {
                      // 购物车总数量
                      zongshu += this.forshop[index].num;
                      // 购物车商品总价格
                      zongjia += parseInt(
                        this.forshop[index].wprice * this.forshop[index].num
                      );
                    }
                  });
                  this.$store.state.num_zong = zongshu;
                  this.$store.state.price_zong = zongjia;
                });
            });
        });
      });
    },
    // 操作 - 复选框 动态计算数量价格
    change() {
      let checks = document.querySelectorAll(".check");
      let zongshu = 0;
      let zongjia = 0;
      checks.forEach((ele, index) => {
        if (ele.checked) {
          // 购物车总数量
          zongshu += this.forshop[index].num;
          // 购物车商品总价格
          zongjia += parseInt(
            this.forshop[index].wprice * this.forshop[index].num
          );
        }
      });
      this.$store.state.num_zong = zongshu;
      this.$store.state.price_zong = zongjia;
    },
    checkall(event) {
      let checks = document.querySelectorAll(".check");
      let zongshu = 0;
      let zongjia = 0;
      if (event.currentTarget.checked) {
        checks.forEach((ele, index) => {
          ele.checked = true;
          // 购物车总数量
          zongshu += this.forshop[index].num;
          // 购物车商品总价格
          zongjia += parseInt(
            this.forshop[index].wprice * this.forshop[index].num
          );
        });
        this.$store.state.num_zong = zongshu;
        this.$store.state.price_zong = zongjia;
      } else {
        checks.forEach(el => {
          el.checked = false;
        });
        this.$store.state.num_zong = 0;
        this.$store.state.price_zong = 0;
      }
    }
  },
  computed: mapGetters(["shopnum", "shopprice"]),
  mounted() {
    let checkAll = document.getElementById("checkall");
    document.documentElement.scrollTop = 0;
    this.shopnum_2 = this.shopnum;
    // 获取已登录用户
    this.$axios.post("/api/index").then(({ data }) => {
      if (data.status == -1) {
        // console.info("零食用户3");
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
          // console.info(usershop);
          this.forshop = usershop;
          // 购物车总数量
          let zongshu = 0;
          usershop.forEach(el => {
            zongshu += el.num;
          });
          this.$store.state.num_zong = zongshu;
          // 购物车商品总价格
          let zongjia = 0;
          usershop.forEach(el => {
            zongjia += parseInt(el.wprice * el.num);
          });
          this.$store.state.price_zong = zongjia;
        });
    });
  }
};
</script>

<style lang="scss" scoped>
.shopping {
  width: 100%;
  min-width: 966px;
  .shopping-con {
    width: 966px;
    margin: 0 auto;
    img {
      margin-top: 7px;
    }
  }
}
.shop-top {
  width: 966px;
  height: 40px;
  //   background-color: gold;
  line-height: 34px;
  background: #f4f4f4;
  padding-top: 2px;
  margin-top: 11px;
}
table {
  height: 100%;
  font-size: 14px;
  text-align: center;
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: grey;
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
      input {
        vertical-align: middle;
      }
    }
  }
}
.f_cart_tit td {
  text-align: center;
  font-family: "microsoft yahei", "微软雅黑";
  font-size: 14px;
  color: #000000;
}
.shop-mid {
  border: 1px solid #ebebeb;
  width: 100%;
  padding-bottom: 9px;
  .fctd_gray {
    background: #f4f4f4;
    height: 90px;
    margin-top: 9px;
    td {
      text-align: center;
      font-size: 12px;
      color: #000000;
    }
    .tips {
      margin-top: 46px;
    }
  }
}
.fc_sc a {
  font-size: 12px;
  color: #000000;
}
.fc_jian a {
  width: 17px;
  height: 20px;
  background: url(../images/jian.png);
  display: block;
  &:hover {
    width: 17px;
    height: 20px;
    background: url(../images/jian_cur.png);
    display: block;
  }
}
.fc_jia a {
  width: 17px;
  height: 20px;
  background: url(../images/jia.png);
  display: block;
  &:hover {
    width: 17px;
    height: 20px;
    background: url(../images/jia_cur.png);
    display: block;
  }
}
.fcsum {
  width: 32px;
  height: 20px;
  line-height: 20px;
  padding: 0px;
  margin: 0px;
  border: 1px solid #d7d7d7;
  font-size: 12px;
  text-align: center;
  color: #000000;
}
.cart_confirm {
  // margin-bottom: 50px;
  font-size: 12px;
  width: 964px;
  border: 1px solid #ebe4ba;
  background: #fffef5;
  height: 70px;
  margin-top: 10px;
  padding-top: 12px;
  //   float: left;
  .width946 {
    width: 946px;
    margin: auto;
  }
  .goonbuy {
    text-align: right;
    width: 156px;
    margin-left: 20px;
    margin-top: -10px;
    float: left;
  }
  .goonbuy2 {
    margin-left: 20px;
    margin-top: -13px;
    float: left;
    a {
      display: inline-block;
      width: 160px;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.jg_zongji {
  text-align: right;
  font-family: "microsoft yahei", "微软雅黑";
  font-size: 12px;
  color: #000000;
}
.m_zongji {
  text-align: left;
  font-family: "microsoft yahei", "微软雅黑";
  color: #000000;
  span {
    color: #b32e18;
    font-size: 24px;
  }
}
.fc_del,
.fc_sc {
  a {
    color: #999;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: indianred;
    }
  }
}
.fc_sc > a {
  color: #000;
}
.myconfirm {
  text-align: center;
  line-height: 40px;
  color: #ccc;
  font-size: 18px;
}
</style>



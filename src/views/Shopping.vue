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
              <td width="36" height="32">
                <input
                  type="checkbox"
                  class="myselect"
                  checked="checked"
                  name="checkbox"
                  value="checkbox"
                />
              </td>
              <td width="38">
                <div style="text-align:left" class="yahei font14 fontblack">全选</div>
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
      <div class="shop-mid">
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
                <input type="checkbox" checked="checked" id="mycheckbox" value="40359" />
              </td>
              <td width="318" class="font14 fontblack">
                <table width="318" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td width="112">
                        <a href>
                          <img
                            src="../images/20461651_thumb_G_1480415743995.jpg"
                            width="80"
                            height="80"
                          />
                        </a>
                      </td>
                      <td width="160">
                        <div class="fcgn">
                          <a href>恋人絮语/PT950铂金钻戒 30分/F-G色/SI净度/国检-forever love系列</a>
                        </div>
                      </td>
                      <td width="46">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td width="100" v-text="'¥'+shopprice+'.00'">
                ￥6299.00
                <input type="hidden" id="good_price40359" value="6299.00" />
              </td>
              <td width="108">0</td>
              <td width="102"></td>
              <td width="118">
                <div style="width:76px; margin:auto">
                  <table align="center" width="76" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td width="17" class="fc_jian" @click="decrement">
                          <a href="javascript:void(0);"></a>
                        </td>
                        <td width="42" align="center">
                          <input class="fcsum" type="text" id="good_num40359" v-model="shopnum_2" />
                        </td>
                        <td width="17" class="fc_jia" @click="shopnum_2++">
                          <a href="javascript:void(0);"></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
              <td width="87" id="xj_good40359">￥226764.00</td>
              <td width="77">
                <span class="fc_sc">
                  <a class="tips">收藏</a>
                </span>
                <br />
                <span class="fc_del">
                  <a class="tipsdel" @click="delshop">删除</a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- bottom -->
      <div class="cart_confirm">
        <div class="width946">
          <div class="w946">
            <table width="946" align="center" border="0" cellspacing="0" cellpadding="0">
              <tbody>
                <tr>
                  <td width="36" height="32">
                    <input
                      type="checkbox"
                      class="myselect"
                      checked="checked"
                      name="checkbox"
                      value="checkbox"
                    />
                  </td>
                  <td width="106">
                    <div align="left" class="sl_zongji">
                      数量总计：
                      <span class="mcolor2" id="allgoodsnumber" v-text="shopnum_2"></span>件
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
                        v-text="'¥'+shopprice*shopnum_2+'.00'"
                      ></span>
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
      <!-- end -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      shopnum_2: 0
    };
  },
  methods: {
    decrement() {
      this.shopnum_2 > 0 ? this.shopnum_2-- : 0;
    },
    // 操作 - 删除 
    delshop() {

    }
  },
  computed: mapGetters(["shopnum", "shopprice"]),
  mounted() {
    document.documentElement.scrollTop = 0;
    this.shopnum_2 = this.shopnum;
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
</style>



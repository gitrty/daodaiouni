<template>
  <div class="loupe">
    <div class="loupe-con">
      <!-- 左部分 -->
      <div class="loupe-l">
        <!-- 特惠 -->
        <div class="goods_attach_ico">
          <img src="../images/3.png" width="153" height="153" />
        </div>
        <!-- 放大镜 -->
        <div class="con-FangDa" id="fangdajing">
          <div class="con-fangDaIMg">
            <img
              :src="fangda_img"
              id="main_img"
              title="恋人絮语/PT950铂金钻戒 30分/F-G色/SI净度/国检-forever love系列"
              alt="恋人絮语/PT950铂金钻戒 30分/F-G色/SI净度/国检-forever love系列"
            />
            <div class="magnifyingBegin" style="display: none; left: 300px; top: 300px;"></div>
            <div class="magnifyingShow" style="display:none;">
              <img
                :src="fangda_img"
                id="main_img2"
                title="恋人絮语/PT950铂金钻戒 30分/F-G色/SI净度/国检-forever love系列"
                alt="恋人絮语/PT950铂金钻戒 30分/F-G色/SI净度/国检-forever love系列"
              />
            </div>
          </div>
          <ul class="con-FangDa-ImgList">
            <li style="margin-right:8px;">
              <img src="../images/fd0.jpg" />
            </li>
            <li style="margin-right:8px;">
              <img src="../images/fd1.jpg" />
            </li>
            <li style="margin-right:8px;">
              <img src="../images/fd2.jpg" />
            </li>
            <li style="margin-right:8px;">
              <img src="../images/fd3.jpg" />
            </li>
            <li>
              <img src="../images/fd4.jpg" />
            </li>
          </ul>
        </div>
        <!-- ul-list  -->
        <div class="goods_share">
          <div class="share_txt">分享到：</div>
          <div class="bdsharebuttonbox baidushare">
            <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
            <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
            <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
            <a href="#" class="bds_more" data-cmd="more"></a>
          </div>

          <div class="shoucang" state="0">
            <span class="star_zoom">
              <a href="javascript:void(0);">
                <!-- 小星星 -->
                <div class="start_d">
                  <img id="star_img" src="../images/s1.png" width="16" height="16" />
                </div>
                <div class="jiaru">
                  加入收藏（
                  <span id="xihuan">12</span>）
                </div>
              </a>
            </span>
          </div>
        </div>
        <!-- end -->
      </div>
      <!-- 右部分 -->
      <div class="loupe-r">
        <div class="goods_title">
          <h1>恋人絮语/PT950铂金钻戒 30分/F-G色/SI净度/国检-forever love系列</h1>
          <i></i>
        </div>
        <ul class="good_attr">
          <li>
            <span>市场价：</span>
            <span class="price">￥17997元</span>
          </li>
          <li class="cuxiao">
            钻石网价：
            <span class="p_red">￥</span>
            <span class="shop_price">6299.00</span>
          </li>
          <li>
            累计销售：
            <span class="p_red">871</span>
            <span class="gray_line">|</span>评论：
            <span class="p_red">109</span>
            <span class="gray_line">|</span>人气：
            <span class="p_red">33842</span>
          </li>
        </ul>
        <div class="material_select">
          材质：
          <a href="javascript:void(0)" class="cur">PT950铂金</a>
        </div>
        <div class="select_tk">
          <a href="javascript:void(0)" data="20461651" class="cur">30分/PT950铂金/F-G/SI/国检</a>
          <a href="javascript:void(0)">50分/白18K金/VS2/H/GIA双证</a>
          <a href="javascript:void(0)">1克拉/白18K金/SI1/I/GIA双证</a>
          <a href="javascript:void(0)">50分/PT950铂金/VS2/H/GIA双证</a>
          <a href="javascript:void(0)">30分/18K白金/SI/I-J/国检</a>
          <a href="javascript:void(0)">1克拉/PT950铂金/VS2/F/GIA双证</a>
          <a href="javascript:void(0)">70分/白18K/SI/I-J/国检</a>
          <a href="javascript:void(0)">70分/PT950铂金SI/I-J/国检</a>
        </div>
        <div class="select_sc">
          <div class="shoucun">手寸：</div>
          <div id="divselect">
            <cite class="ocite" @click="show">{{cite_msg}}</cite>
            <ul v-show="falg">
              <li>
                <a href="javascript:void(0)" selectid="7">-请选择-</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="7">7</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="8">8</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="9">9</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="10">10</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="11">11</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="12">12</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="13">13</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="14">14</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="15">15</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="16">16</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="17">17</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="18">18</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="19">19</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="20">20</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="21">21</a>
              </li>
              <li>
                <a href="javascript:void(0)" selectid="22">22</a>
              </li>
            </ul>
          </div>
          <input name="shouc" id="shouc" type="hidden" value />
          <div class="celiang">
            <a href="javascript:void(0)" target="_blank">如何测量？</a>
          </div>
        </div>
        <div class="select_sc">
          <div class="shoucun">刻字：</div>
          <input name="kz" id="kz" type="text" value class="kezi_input" />
          <a href="javascript:void(0)" class="kezi">♥</a>
          <a href="javascript:void(0)" class="kezi">＆</a>
        </div>
        <div class="select_bt">
          <input type="hidden" id="goods_id" name="goods_id" value="20461651" />
          <a class="cart_bt" id="cart_bt" href="javascript:void(0)" @click="addshop">加入购物车</a>
          <a class="gm_bt" href="javascript:void(0)">立即购买</a>
          <a class="gray_bt" href="/goods/20783955.html">专属定制</a>
          <a class="gray_zx_bt" href="javascript:void(0)">
            <i></i>在线咨询
          </a>
        </div>
        <p class="peisong">
          <span>
            配送：全国包邮（港澳台除外）；现货预计3-5个工作日到货，购买前，钻戒类指圈号请
            <a href="javascript:void(0)">咨询客服</a>或备注留言，定制发货时间据款式而定
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      fangda_img: require("../images/fd0.jpg"),
      cite_msg: "-请选择-"
    };
  },
  methods: mapActions(["show", "addshop"]),
  computed: mapGetters(["falg"]),
  mounted() {
    //   切换小星星颜色
    document.querySelector(".jiaru").onmouseenter = () => {
      document
        .querySelector("#star_img")
        .setAttribute("src", require("../images/s2.png"));
      this.animate_slow(document.querySelector("#star_img"), {
        width: 22,
        height: 22,
        marginTop: -5,
        marginLeft: -4
      });
    };
    document.querySelector(".jiaru").onmouseleave = () => {
      document
        .querySelector("#star_img")
        .setAttribute("src", require("../images/s1.png"));
      this.animate_slow(document.querySelector("#star_img"), {
        width: 16,
        height: 16,
        marginTop: 0,
        marginLeft: 0
      });
    };
    // 切换ul-list的图片边框 / 中图片
    let lis = document.querySelectorAll(".con-FangDa-ImgList>li");
    let mainImg1 = document.getElementById("main_img");
    let mainImg2 = document.querySelector(".magnifyingShow");

    lis.forEach((el, index) => {
      el.onmouseenter = () => {
        //   切换小图边框颜色
        lis.forEach((el, index) => {
          el.classList.remove("active");
        });
        el.classList.add("active");
        // 切换中图片
        this.fangda_img = require(`../images/fd${index}.jpg`);
      };
    });
    // 放大镜
    let middleImg = document.getElementById("main_img");
    let middleArea = document.querySelector(".magnifyingBegin");
    let bigArea = document.querySelector(".magnifyingShow");
    let bigImg = document.getElementById("main_img2");
    let box = document.querySelector(".con-fangDaIMg");
    let loupe = document.querySelector(".loupe-l");

    let getStyle = (el, attr) => {
      // chrome等浏览器
      if (window.getComputedStyle) {
        return window.getComputedStyle(el, null)[attr];
      }
      // ie 678
      return el.currentStyle[attr];
    };
    // 计算小蓝块大小 比例
    middleArea.style.width =
      (parseInt(getStyle(bigArea, "width")) /
        parseInt(getStyle(bigImg, "width"))) *
        parseInt(getStyle(middleImg, "width")) +
      "px";
    middleArea.style.height =
      (parseInt(getStyle(bigArea, "height")) /
        parseInt(getStyle(bigImg, "height"))) *
        parseInt(getStyle(middleImg, "height")) +
      "px";

    // 计算大图和小图的比例 ( 计算大图移动距离时使用 )
    let srcaleX =
      parseInt(getStyle(bigImg, "width")) /
      parseInt(getStyle(middleImg, "width"));
    let srcaleY =
      parseInt(getStyle(bigImg, "height")) /
      parseInt(getStyle(middleImg, "height"));
    // 进入中图显示大图
    box.onmouseenter = () => {
      middleArea.style.display = "block";
      bigArea.style.display = "block";
      box.onmousemove = ev => {
        ev = ev || window.event;
        // 计算小蓝块移动 距离 ( 跟着鼠标移动 )
        let mX =
          ev.pageX -
          loupe.offsetLeft -
          middleImg.offsetLeft -
          middleArea.offsetWidth / 2;
        let mY =
          ev.pageY -
          loupe.offsetTop -
          middleImg.offsetLeft -
          middleArea.offsetHeight / 2;
        // 阻止小蓝块移出 中图
        if (mX <= 0) {
          mX = 0;
        }
        if (mY <= 0) {
          mY = 0;
        }
        if (mX >= middleImg.offsetWidth - middleArea.offsetWidth) {
          mX = middleImg.offsetWidth - middleArea.offsetWidth;
        }
        if (mY >= middleImg.offsetHeight - middleArea.offsetHeight) {
          mY = middleImg.offsetHeight - middleArea.offsetHeight;
        }
        // 小蓝块移动距离
        middleArea.style.left = mX + "px";
        middleArea.style.top = mY + "px";
        // 大图移动距离 = 小蓝块移动的距离* (大图/小图)
        bigImg.style.left = srcaleX * -mX + "px";
        bigImg.style.top = srcaleY * -mY + "px";
      };
    };
    // 离开中图隐藏大图
    box.onmouseleave = () => {
      middleArea.style.display = "none";
      bigArea.style.display = "none";
      middleImg.onmousemove = null;
    };
    // select 下拉框
    let uList = document.getElementById("divselect").querySelectorAll("ul>li");
    uList.forEach(el => {
      el.onclick = () => {
        this.$store.state.falg = false;
        let msg = el.children[0].innerHTML;
        document.querySelector(".ocite").innerHTML = msg;
      };
    });
    // 选择钻石样式
    let select_tk = document.querySelector(".select_tk");
    let tList = select_tk.querySelectorAll("a");
    // console.info(tList);
    tList.forEach(el => {
      el.onclick = () => {
        tList.forEach(el => {
          el.classList.remove("cur");
        });
        el.classList.add("cur");
      };
    });
    // end
  }
};
</script>

<style lang="scss" scoped>
.loupe {
  width: 100%;
  height: 916px;
  min-width: 1200px;
  .loupe-con {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    // background-color: pink;
    padding-top: 42px;
    .loupe-l {
      width: 602px;
      float: left;
      position: relative;
      //   background-color: gold;
      .goods_attach_ico {
        position: absolute;
        width: 153px;
        height: 153px;
        right: 26px;
        top: 26px;
        z-index: 5;
      }
      .con-FangDa {
        width: 602px;
        .con-fangDaIMg {
          width: 600px;
          height: 600px;
          border: #eee solid 1px;
          position: relative;
          > img {
            width: 100%;
            height: 100%;
          }
          .magnifyingBegin {
            width: 300px;
            height: 300px;
            left: 0;
            top: 0;
            background-color: #454545;
            opacity: 0.5;
            filter: alpha(opacity=50);
            position: absolute;
            cursor: move;
            display: none;
            z-index: 61;
          }
          .magnifyingShow {
            width: 400px;
            height: 400px;
            display: none;
            position: absolute;
            left: 640px;
            top: 0;
            overflow: hidden;
            border: 1px #eee solid;
            z-index: 69;
            > img {
              position: absolute;
              width: 800px;
              height: 800px;
              margin-left: 0;
              margin-top: 0;
              //   margin-left: -400px;
              //   margin-top: -400px;
            }
          }
        }

        //
        .con-FangDa-ImgList {
          list-style: none;
          width: 602px;
          height: 114px;
          float: left;
          padding: 0px;
          margin: 8px 0px 0px 0px;
          //   background-color: red;
          li {
            width: 112px;
            height: 112px;
            float: left;
            cursor: pointer;
            box-shadow: 2px 2px 6px -4px #000;
            border: 1px solid #ccc;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .active {
            border: 1px solid #e53e49;
          }
        }
      }

      .goods_share {
        margin-top: 33px;
        float: left;
        .share_txt {
          width: 65px;
          float: left;
          font-size: 14px;
        }
        .baidushare {
          width: 100px;
          float: left;
          margin-top: -4px;
        }
        .shoucang {
          width: 300px;
          float: left;
          text-align: left;
          text-indent: 60px;
          .star_zoom {
            padding-bottom: 3px;
            margin-right: 5px;
          }
          a {
            color: #000;
            font-size: 14px;
            .start_d {
              width: 16px;
              float: left;
            }
            .jiaru {
              padding-left: 8px;
              float: left;
              &:hover {
                color: #e53e49;
              }
            }
          }
        }
      }
    }
  }
}

.loupe-r {
  width: 558px;
  float: left;
  margin-left: 40px;
  //   background-color: gray;
  height: 100%;
  .goods_title {
    width: 558px;
    float: left;
    border-bottom: 1px solid #eee;
    height: 62px;
    text-align: left;
    h1 {
      font-size: 20px;
      color: #000;
      font-weight: bold;
    }
    i {
      font-size: 14px;
      color: #888;
      font-style: normal;
    }
  }

  .good_attr {
    width: 558px;
    float: left;
    text-align: left;
    li {
      padding-left: 10px;
      width: 548px;
      border-bottom: 1px solid #eee;
      height: 46px;
      float: left;
      text-align: left;
      line-height: 46px;
      color: #232323;
      font-size: 14px;
      .price {
        text-decoration: line-through;
        font-size: 14px;
        font-weight: normal;
      }
    }
    .cuxiao {
      line-height: 40px;
    }
    .p_red {
      color: #e93a38;
    }
    .gray_line {
      padding: 0 45px;
      color: #dedede;
      font-size: 12px;
    }
    .shop_price {
      color: #e93a38;
      font-size: 26px;
      font-weight: bold;
    }
  }

  .material_select {
    width: 548px;
    float: left;
    padding-left: 10px;
    padding-top: 30px;
    padding-bottom: 15px;
    font-size: 14px;
    text-align: left;
    a {
      border: 1px solid #eee;
      padding: 8px 20px;
      font-size: 14px;
      margin-right: 10px;
      word-break: keep-all;
      white-space: nowrap;
    }
    a.cur {
      border: 1px solid #dc393e;
      background: url(../images/shop_select_bg.png) right bottom no-repeat;
    }
  }

  .select_tk {
    width: 548px;
    float: left;
    padding-left: 10px;
    padding-top: 22px;
    padding-bottom: 15px;
    font-size: 14px;
    text-align: left;
    a {
      border: 1px solid #eee;
      padding: 4px 20px;
      font-size: 14px;
      margin-right: 10px;
      margin-bottom: 15px;
      float: left;
      word-break: keep-all;
      white-space: nowrap;
      &:hover {
        border: 1px solid #dc393e;
        background-color: #dc393e;
        color: #fff;
      }
    }
    a.cur {
      border: 1px solid #dc393e;
      background-color: #dc393e;
      color: #fff;
    }
  }
  .select_sc {
    width: 548px;
    float: left;
    padding-left: 10px;
    text-align: left;
    margin-top: 10px;
    .shoucun {
      width: 42px;
      float: left;
      height: 36px;
      line-height: 36px;
      font-size: 14px;
    }
    #divselect {
      width: 90px;
      margin: 0px;
      position: relative;
      z-index: 10;
      float: left;
      cite {
        width: 84px;
        height: 24px;
        line-height: 24px;
        display: block;
        color: #232323;
        cursor: pointer;
        font-style: normal;
        padding-left: 10px;
        // padding-right: 24px;
        border: 1px solid #eee;
        background: url(../images/xjt.png) no-repeat right center;
        font-size: 14px;
        height: 34px;
        line-height: 34px;
      }
      ul {
        width: 90px;
        border: 1px solid #eee;
        background-color: #ffffff;
        position: absolute;
        z-index: 20000;
        margin-top: -1px;
        li {
          height: 28px;
          line-height: 28px;
          &:hover {
            background-color: #ccc;
          }
          a {
            display: block;
            height: 28px;
            color: #232323;
            text-decoration: none;
            padding-left: 10px;
            padding-right: 10px;
            font-size: 14px;
          }
        }
      }
    }
    input[type="hidden"] {
      display: none;
      -webkit-appearance: initial;
      background-color: initial;
      cursor: default;
      padding: initial;
      border: initial;
    }
    .celiang {
      width: 100px;
      float: left;
      height: 36px;
      line-height: 36px;
      font-size: 14px;
      margin-left: 38px;
      a {
        &:hover {
          color: #e53e49;
        }
      }
    }

    .kezi_input {
      height: 32px;
      outline: none;
      padding: 0px;
      margin: 0px;
      border: 1px solid #eee;
      line-height: 32px;
      font-size: 14px;
      float: left;
    }
    .kezi {
      width: 32px;
      height: 32px;
      float: left;
      border: 1px solid #eee;
      display: block;
      font-size: 16px;
      line-height: 32px;
      text-align: center;
      color: #333;
      margin-left: 10px;
      &:hover {
        color: #e53e49;
      }
    }
  }

  .select_bt {
    width: 548px;
    float: left;
    padding-left: 10px;
    text-align: left;
    margin-top: 43px;
    a {
      float: left;
      text-align: center;
    }
    a.cart_bt {
      width: 180px;
      color: #fff;
      background: #dc383f;
      padding-top: 13px;
      padding-bottom: 13px;
      font-size: 16px;
      border-radius: 2px;
      margin-right: 20px;
      &:hover {
        background: #ca0000;
      }
    }

    a.gm_bt {
      width: 180px;
      color: #fff;
      background: #f8b74f;
      padding-top: 13px;
      padding-bottom: 13px;
      font-size: 16px;
      border-radius: 2px;
      &:hover {
        background: #f7a623;
      }
    }
    a.gray_bt {
      width: 178px;
      color: #232323;
      background: #f6f6f6;
      padding-top: 9px;
      padding-bottom: 9px;
      font-size: 16px;
      border-radius: 2px;
      margin-right: 20px;
      margin-top: 16px;
      border: 1px solid #dfdfdf;
      text-align: center;
      &:hover {
        color: #ca0000;
      }
      //   display: inline;
    }
    a.gray_zx_bt {
      width: 178px;
      color: #232323;
      background: #f6f6f6;
      padding-top: 9px;
      padding-bottom: 9px;
      font-size: 16px;
      -moz-border-radius: 2px;
      -webkit-border-radius: 2px;
      border-radius: 2px;
      margin-right: 20px;
      margin-top: 16px;
      border: 1px solid #dfdfdf;
      text-align: left;
      // display: inline;
      &:hover {
        color: #ca0000;
      }
      i {
        width: 19px;
        height: 17px;
        background: url(../images/home.jpg);
        margin-left: 40px;
        margin-right: 10px;
        float: left;
        // display: inline;
        margin-top: 3px;
        text-align: left;
      }
    }
  }
  .peisong {
    width: 380px;
    float: left;
    margin-top: 30px;
    color: #989898;
    font-size: 12px;
    text-align: left;
    padding-left: 10px;
    line-height: 21px;
  }
}
</style>


<template>
  <div class="footer" id="footer">
    <div class="footer-con">
      <!-- top -->
      <div class="foo-top">
        <div class="foo-top-con">
          <a href="javascript:void(0)">
            <img src="../../images/foo1.jpg" alt />
          </a>
          <p>包邮低价</p>
        </div>
        <div class="foo-top-con">
          <a href="javascript:void(0)">
            <img src="../../images/foo2.jpg" alt />
          </a>
          <p>全国联保</p>
        </div>
        <div class="foo-top-con">
          <a href="javascript:void(0)">
            <img src="../../images/foo3.jpg" alt />
          </a>
          <p>商品终身保养</p>
        </div>
        <div class="foo-top-con">
          <a href="javascript:void(0)">
            <img src="../../images/foo4.jpg" alt />
          </a>
          <p>一钻双证</p>
        </div>
        <div class="foo-top-con">
          <a href="javascript:void(0)">
            <img src="../../images/foo5.jpg" alt />
          </a>
          <p>15天免费退换</p>
        </div>
      </div>
      <!-- mid -->
      <div class="foo-mid">
        <div class="foo-mid-l">
          <ul>
            <li>关于我们</li>
            <li>
              <a href="javascript:void(0)">关于我们</a>
            </li>
            <li>
              <a href="javascript:void(0)">联系我们</a>
            </li>
            <li>
              <a href="javascript:void(0)">投诉及建议</a>
            </li>
          </ul>
          <ul>
            <li>关于支付</li>
            <li>
              <a href="javascript:void(0)">订购方式</a>
            </li>
            <li>
              <a href="javascript:void(0)">支付方式</a>
            </li>
            <li>
              <a href="javascript:void(0)">支付常见问题</a>
            </li>
          </ul>
          <ul>
            <li>关于配送</li>
            <li>
              <a href="javascript:void(0)">配送方式</a>
            </li>
            <li>
              <a href="javascript:void(0)">配送常见问题</a>
            </li>
            <li>
              <a href="javascript:void(0)">全程运输保险</a>
            </li>
          </ul>
          <ul>
            <li>会员中心</li>
            <li>
              <a href="javascript:void(0)">如何成为会员</a>
            </li>
            <li>
              <a href="javascript:void(0)">会员积分政策</a>
            </li>
            <li>
              <a href="javascript:void(0)">会员优惠政策</a>
            </li>
          </ul>
          <ul>
            <li>无忧售后</li>
            <li>
              <a href="javascript:void(0)">售后服务</a>
            </li>
            <li>
              <a href="javascript:void(0)">退换货承诺</a>
            </li>
            <li>
              <a href="javascript:void(0)">购钻常见问题</a>
            </li>
          </ul>
        </div>
        <div class="foo-mid-r">
          <!-- 1 -->
          <div class="foo-r-con1">
            <p>400-666-9518</p>
            <p>
              周一-周五09:30-19:30
              <br />周六-周日09:00-19:30
            </p>
            <div>
              <a
                href="javascript:void(0)"
                onclick="doyoo.util.openChat('g=10062109');return false"
              >在线咨询</a>
            </div>
          </div>
          <!-- 2 -->
          <div class="weixin">
            <div>
              <img src="../../images/weixin.jpg" />
            </div>
            <div class="wei_txt">官方微信</div>
          </div>
          <!-- 3 -->
          <div class="weibo">
            <div>
              <img src="../../images/weibo.jpg?v=1" />
            </div>
            <div class="wei_txt">微信小程序</div>
          </div>
        </div>
      </div>
      <!-- foo -->
      <div class="foo-foo">
        <div class="foo-ban">
          <div class="link-tit">
            <a href="javascript:void(0)">友情链接:</a>
          </div>
          <!-- 滚动link部分 -->
          <div class="scroll_link" id="scroll_link">
            <ul>
              <li v-for="(val,index) in link_scroll" :key="index">
                <a href="javascript:void(0)" target="_blank" :title="val">{{val}}</a>
              </li>
            </ul>
          </div>
        </div>
        <p>Copyright © 2006-2016 我爱钻石网 www.ilovezuan.com All Rights Reserved 粤ICP备19073970号-1</p>
        <p>深圳市罗湖区翠竹街道水贝二路水贝工业区13栋(维平珠宝大厦一楼）1楼2109-4</p>
        <p>深圳市钻永恒科技有限公司</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link_scroll: [
        "热门搜索",
        "水晶",
        "文玩部落",
        "裸钻定制",
        "古钱币收藏网",
        "佐卡伊钻戒",
        "童装品牌网",
        "中外玩具网",
        "结婚钻戒",
        "人民币收藏—惠泽藏品网",
        "钻戒彩钻定制",
        "中国和田玉网",
        "珂兰官网珠宝招商网",
        "钻石等级",
        "情感咨询",
        "热门搜索",
        "水晶",
        "文玩部落",
        "裸钻定制",
        "古钱币收藏网",
        "佐卡伊钻戒",
        "童装品牌网",
        "中外玩具网",
        "结婚钻戒"
      ]
    };
  },
  mounted() {
    //   动态生成滚动 ul 的宽度
    let oUl = document.querySelector("#scroll_link>ul");
    let lis = document.querySelectorAll("#scroll_link>ul>li");
    let maxWidth = 0;
    lis.forEach(el => {
      maxWidth += el.offsetWidth;
    });
    oUl.style.width = maxWidth + "px";
    let left = 0;
    // 滚动link定时器
    let autoPlay = () => {
      if (left - 1100 <= -maxWidth) {
        oUl.style.left = 0;
        left = 0;
      }
      this.animate_slow(oUl, { left: left }, () => {
        left -= 10;
      });
    };
    window.timer = setInterval(autoPlay, 80);
    // 鼠标进入停止定时器
    oUl.onmouseenter = () => {
      clearInterval(window.timer);
    };
    // 鼠标进入继续滚动
    oUl.onmouseleave = () => {
      window.timer = setInterval(autoPlay, 80);
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  min-width: 1200px;
  height: 550px;
  //   background: red;
  .footer-con {
    width: 1200px;
    height: 100%;
    // background-color: pink;
    margin: 0 auto;
    // **************top
    .foo-top {
        margin-top: 40px;
      height: 130px;
      width: 100%;
      //   background-color: #ccc;
      border-bottom: 1px solid #e5e5e5;
      .foo-top-con {
        cursor: pointer;
        width: 240px;
        height: 90px;
        float: left;
        // border: 1px solid #000;
        img {
          float: left;
          border: none 0;
        }
        p {
          float: left;
          font-size: 20px;
          padding-top: 36px;
          text-align: left;
          text-indent: 16px;
          color: #222;
          letter-spacing: 1px;
          font-family: "宋体";
        }
      }
    }
    // **********mid
    .foo-mid {
      padding-top: 16px;
      height: 180px;
      width: 100%;
      //   background-color: gold;
      .foo-mid-l {
        float: left;
        ul {
          float: left;
          width: 134px;
          height: 146px;
          margin-left: 18px;
          li {
            font-size: 14px;
            font-family: "宋体";
            line-height: 30px;
            a {
              color: #555;

              &:hover {
                color: #e53e49;
              }
            }
          }
          li:nth-child(1) {
            font-family: "宋体";
            font-size: 16px;
            color: #222;
            line-height: 56px;
          }
        }
      }
      .foo-mid-r {
        width: 440px;
        height: 120px;
        // background-color: skyblue;
        float: left;
        margin-top: 20px;
        border-left: 1px solid #eee;
        // 1
        .foo-r-con1 {
          width: 142px;
          float: left;
          margin-left: 40px;
          font-size: 14px;
          font-family: "宋体";
          text-align: left;
          color: #222;
          p:nth-child(1) {
            color: #e53e49;
            font-size: 20px;
            font-weight: bold;
            font-family: "宋体";
          }
          p:nth-child(2) {
            font-family: "宋体";
            line-height: 24px;
            font-size: 14px;
            margin-top: 4px;
          }
          > div {
            width: 140px;
            border: 1px solid #e53e49;
            display: block;
            height: 27px;
            margin-top: 14px;
            box-sizing: content-box;
            background-color: #fff;
            a {
              box-sizing: content-box;
              width: 85px;
              height: 27px;
              font-family: "宋体";
              font-size: 14px;
              display: block;
              background: url(../../images/say.jpg);
              background-repeat: no-repeat;
              padding-left: 55px;
              line-height: 27px;
              color: #e53e49;
            }
          }
        }
        // 2
        .weixin {
          width: 92px;
          float: left;
          margin-left: 52px;
          margin-top: -2px;
        }
        // 3
        .weibo {
          width: 92px;
          float: left;
          margin-left: 20px;
          margin-top: -2px;
        }
        .wei_txt {
          font-size: 14px;
          color: #222;
          text-align: center;
          line-height: 34px;
          color: #222;
        }
      }
    }
    // *********foo
    .foo-foo {
        margin-top: 40px;
      height: 152px;
      //   background-color: pink;
      .foo-ban {
        text-align: center;
        .link-tit {
          width: 100px;
          float: left;
          a {
            font-size: 12px;
            color: #555;
            font-family: "宋体";
            line-height: 23px;
            margin-left: 10px;
            &:hover {
              color: #e53e49;
            }
          }
        }
        .scroll_link {
          overflow: hidden;
          position: relative;
          width: 1100px;
          float: left;
          z-index: 0;
          ul {
            // width: 10000px;
            overflow: hidden;
            position: relative;
            li {
              position: relative;
              overflow: hidden;
              float: left;
              a {
                font-size: 12px;
                color: #555;
                line-height: 23px;
                margin-left: 10px;
                &:hover {
                  color: #e53e49;
                }
              }
            }
          }
        }
      }

      p {
        text-align: center;
        color: #555;
        font-family: "宋体";
        font-size: 14px;
        line-height: 20px;
        margin-top: 3px;
        float: left;
        width: 1200px;
      }
    }
  }
}
</style>



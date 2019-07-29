<template>
  <div class="rxtj">
    <div class="rx-con">
      <div class="rx-con-top">热销推荐</div>
      <!-- 1 -->
      <div class="rx-con-tit">
        <h2>
          <a id="tab1" href="javascript:void(0);" class="cur">婚戒</a>
        </h2>
        <h2>
          <a id="tab2" href="javascript:void(0);">钻戒</a>
        </h2>
        <h2>
          <a id="tab3" href="javascript:void(0);">对戒</a>
        </h2>
        <h2>
          <a id="tab4" href="javascript:void(0);">配饰</a>
        </h2>
        <h2>
          <a id="tab5" href="javascript:void(0)">黄金</a>
        </h2>
      </div>
      <!-- 2 -->
      <div class="rx-con-con container">
        <div class="big_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1500616780447824288.jpg"
              width="592"
              height="288"
              :alt="nameArr[0]"
              :title="nameArr[0]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="big_link_txt">
            <span class="pro_tit">{{nameArr[0]}}</span>
            <br />
            <span class="price">￥{{moneyArr[0]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507630507958889089.jpg"
              width="288"
              height="288"
              :alt="nameArr[1]"
              :title="nameArr[1]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[1]}}</span>
            <br />
            <span class="price">￥{{moneyArr[1]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1500616949483449841.jpg"
              width="288"
              height="288"
              :alt="nameArr[2]"
              :title="nameArr[2]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[2]}}</span>
            <br />
            <span class="price">￥{{moneyArr[2]}}</span>
          </a>
        </div>
      </div>
      <!-- 3 -->
      <div class="rx-con-con container">
        <div class="small_link" id="first-img">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507630587747792085.jpg"
              width="288"
              height="288"
              :alt="nameArr[3]"
              :title="nameArr[3]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[3]}}</span>
            <br />
            <span class="price">￥{{moneyArr[3]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1500617011079585423.jpg"
              width="288"
              height="288"
              :alt="nameArr[4]"
              :title="nameArr[4]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[4]}}</span>
            <br />
            <span class="price">￥{{moneyArr[4]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1500617216838965590.jpg"
              width="288"
              height="288"
              :alt="nameArr[5]"
              :title="nameArr[5]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[5]}}</span>
            <br />
            <span class="price">￥{{moneyArr[5]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507621834900057751.jpg"
              width="288"
              height="288"
              :alt="nameArr[6]"
              :title="nameArr[6]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[6]}}</span>
            <br />
            <span class="price">￥{{moneyArr[6]}}</span>
          </a>
        </div>
      </div>
      <!-- 结束 -->
      <!-- 2 -->
      <div class="rx-con-con container">
        <div class="big_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507626120997791493.jpg"
              width="592"
              height="288"
              :alt="nameArr[0]"
              :title="nameArr[0]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="big_link_txt">
            <span class="pro_tit">{{nameArr[0]}}</span>
            <br />
            <span class="price">￥{{moneyArr[0]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507626186869808694.jpg"
              width="288"
              height="288"
              :alt="nameArr[1]"
              :title="nameArr[1]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[1]}}</span>
            <br />
            <span class="price">￥{{moneyArr[1]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507626250892221225.jpg"
              width="288"
              height="288"
              :alt="nameArr[2]"
              :title="nameArr[2]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[2]}}</span>
            <br />
            <span class="price">￥{{moneyArr[2]}}</span>
          </a>
        </div>
      </div>
      <!-- 3 -->
      <div class="rx-con-con container">
        <div class="small_link" id="first-img">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507634133240632309.jpg"
              width="288"
              height="288"
              :alt="nameArr[3]"
              :title="nameArr[3]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[3]}}</span>
            <br />
            <span class="price">￥{{moneyArr[3]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507634195823211283.jpg"
              width="288"
              height="288"
              :alt="nameArr[4]"
              :title="nameArr[4]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[4]}}</span>
            <br />
            <span class="price">￥{{moneyArr[4]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507634241262344959.jpg"
              width="288"
              height="288"
              :alt="nameArr[5]"
              :title="nameArr[5]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[5]}}</span>
            <br />
            <span class="price">￥{{moneyArr[5]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507634282586237753.jpg"
              width="288"
              height="288"
              :alt="nameArr[6]"
              :title="nameArr[6]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[6]}}</span>
            <br />
            <span class="price">￥{{moneyArr[6]}}</span>
          </a>
        </div>
      </div>
      <!-- 结束 -->
      <!-- 2 -->
      <div class="rx-con-con container">
        <div class="big_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1500616780447824288.jpg"
              width="592"
              height="288"
              :alt="nameArr[0]"
              :title="nameArr[0]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="big_link_txt">
            <span class="pro_tit">{{nameArr[0]}}</span>
            <br />
            <span class="price">￥{{moneyArr[0]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507630507958889089.jpg"
              width="288"
              height="288"
              :alt="nameArr[1]"
              :title="nameArr[1]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[1]}}</span>
            <br />
            <span class="price">￥{{moneyArr[1]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1500616949483449841.jpg"
              width="288"
              height="288"
              :alt="nameArr[2]"
              :title="nameArr[2]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[2]}}</span>
            <br />
            <span class="price">￥{{moneyArr[2]}}</span>
          </a>
        </div>
      </div>
      <!-- 3 -->
      <div class="rx-con-con container">
        <div class="small_link" id="first-img">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507630587747792085.jpg"
              width="288"
              height="288"
              :alt="nameArr[3]"
              :title="nameArr[3]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[3]}}</span>
            <br />
            <span class="price">￥{{moneyArr[3]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1500617011079585423.jpg"
              width="288"
              height="288"
              :alt="nameArr[4]"
              :title="nameArr[4]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[4]}}</span>
            <br />
            <span class="price">￥{{moneyArr[4]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1500617216838965590.jpg"
              width="288"
              height="288"
              :alt="nameArr[5]"
              :title="nameArr[5]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[5]}}</span>
            <br />
            <span class="price">￥{{moneyArr[5]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507621834900057751.jpg"
              width="288"
              height="288"
              :alt="nameArr[6]"
              :title="nameArr[6]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[6]}}</span>
            <br />
            <span class="price">￥{{moneyArr[6]}}</span>
          </a>
        </div>
      </div>
      <!-- 结束 -->
      <!-- 2 -->
      <div class="rx-con-con container">
        <div class="big_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507626120997791493.jpg"
              width="592"
              height="288"
              :alt="nameArr[0]"
              :title="nameArr[0]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="big_link_txt">
            <span class="pro_tit">{{nameArr[0]}}</span>
            <br />
            <span class="price">￥{{moneyArr[0]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507626186869808694.jpg"
              width="288"
              height="288"
              :alt="nameArr[1]"
              :title="nameArr[1]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[1]}}</span>
            <br />
            <span class="price">￥{{moneyArr[1]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507626250892221225.jpg"
              width="288"
              height="288"
              :alt="nameArr[2]"
              :title="nameArr[2]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[2]}}</span>
            <br />
            <span class="price">￥{{moneyArr[2]}}</span>
          </a>
        </div>
      </div>
      <!-- 3 -->
      <div class="rx-con-con container">
        <div class="small_link" id="first-img">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507634133240632309.jpg"
              width="288"
              height="288"
              :alt="nameArr[3]"
              :title="nameArr[3]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[3]}}</span>
            <br />
            <span class="price">￥{{moneyArr[3]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507634195823211283.jpg"
              width="288"
              height="288"
              :alt="nameArr[4]"
              :title="nameArr[4]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[4]}}</span>
            <br />
            <span class="price">￥{{moneyArr[4]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507634241262344959.jpg"
              width="288"
              height="288"
              :alt="nameArr[5]"
              :title="nameArr[5]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[5]}}</span>
            <br />
            <span class="price">￥{{moneyArr[5]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507634282586237753.jpg"
              width="288"
              height="288"
              :alt="nameArr[6]"
              :title="nameArr[6]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[6]}}</span>
            <br />
            <span class="price">￥{{moneyArr[6]}}</span>
          </a>
        </div>
      </div>
      <!-- 结束 -->
      <!-- 2 -->
      <div class="rx-con-con container">
        <div class="big_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1500616780447824288.jpg"
              width="592"
              height="288"
              :alt="nameArr[0]"
              :title="nameArr[0]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="big_link_txt">
            <span class="pro_tit">{{nameArr[0]}}</span>
            <br />
            <span class="price">￥{{moneyArr[0]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507630507958889089.jpg"
              width="288"
              height="288"
              :alt="nameArr[1]"
              :title="nameArr[1]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[1]}}</span>
            <br />
            <span class="price">￥{{moneyArr[1]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1500616949483449841.jpg"
              width="288"
              height="288"
              :alt="nameArr[2]"
              :title="nameArr[2]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[2]}}</span>
            <br />
            <span class="price">￥{{moneyArr[2]}}</span>
          </a>
        </div>
      </div>
      <!-- 3 -->
      <div class="rx-con-con container">
        <div class="small_link" id="first-img">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507630587747792085.jpg"
              width="288"
              height="288"
              :alt="nameArr[3]"
              :title="nameArr[3]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[3]}}</span>
            <br />
            <span class="price">￥{{moneyArr[3]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1500617011079585423.jpg"
              width="288"
              height="288"
              :alt="nameArr[4]"
              :title="nameArr[4]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[4]}}</span>
            <br />
            <span class="price">￥{{moneyArr[4]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1500617216838965590.jpg"
              width="288"
              height="288"
              :alt="nameArr[5]"
              :title="nameArr[5]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[5]}}</span>
            <br />
            <span class="price">￥{{moneyArr[5]}}</span>
          </a>
        </div>
        <div class="small_link">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../images/1507621834900057751.jpg"
              width="288"
              height="288"
              :alt="nameArr[6]"
              :title="nameArr[6]"
            />
          </a>
          <a href="javascript:void(0)" target="_blank" class="small_link_txt">
            <span class="pro_tit">{{nameArr[6]}}</span>
            <br />
            <span class="price">￥{{moneyArr[6]}}</span>
          </a>
        </div>
      </div>
      <!-- 结束 -->
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let list = document.querySelectorAll(".rx-con-tit>h2>a");
    let contai = document.querySelectorAll(".container");
    // 进入页面时隐藏多余的 图片
    contai.forEach((el, index) => {
      index >= 2 ? (el.style.display = "none") : (el.style.display = "block");
    });
    list.forEach((el, index) => {
      el.onmouseenter = () => {
        // 导航切换
        list.forEach(el => {
          el.style.color = "#fff";
        });
        el.style.color = "#555";
        // 图片区域切换
        contai.forEach(el => {
          el.style.display = "none";
        });
        contai[index * 2].style.display = "block";
        contai[index * 2 + 1].style.display = "block";
      };
    });
  },
  data() {
    return {
      moneyArr: [6559, 7115, 12280, 3889, 4226, 5305, 8899],
      nameArr: [
        "恋人絮语",
        "典雅",
        "爱守护-公主",
        "玫瑰情事",
        "简单爱",
        "简单爱",
        "经典皇冠"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.rxtj {
  margin-top: 60px;
  width: 100%;
  min-width: 1200px;
  height: 1016px;
  background-color: #fbfaf6;
  .rx-con {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    // background: pink;
    .rx-con-top {
      line-height: 100px;
      font-size: 30px;
      text-align: center;
      font-family: "宋体";
      color: #555555;
    }
    .rx-con-tit {
      background: #bba496;
      height: 42px;
      text-align: center;
      h2 {
        width: 126px;
        display: inline-table;
        a {
          width: 126px;
          height: 42px;
          display: inline-table;
          line-height: 42px;
          font-size: 16px;
          font-family: "宋体";
          color: #fff;
        }
      }
      .cur {
        color: #555;
      }
    }
    .rx-con-con {
      margin-top: 36px;
      height: 380px;

      .big_link {
        width: 592px;
        height: 380px;
        float: left;
        background: #fff;
        transition: all 500ms ease-in-out;
        position: relative;
        text-align: center;
        a {
          color: #424243;
          font-family: "microsoft yahei", "微软雅黑";
          .pro_tit {
            font-size: 20px;
            font-family: "宋体";
          }
          .price {
            color: #e53e49;
            font-size: 20px;
            font-family: "microsoft yahei", 微软雅黑;
          }
          img {
            width: 592px;
            height: 288px;
          }
        }
        .big_link_txt {
          width: 592px;
          height: 86px;
          line-height: 28px;
          float: left;
          padding-top: 6px;
        }
      }

      .small_link {
        width: 288px;
        height: 380px;
        float: left;
        // display: inline;
        margin-left: 16px;
        background: #fff;
        transition: all 500ms ease-in-out;
        position: relative;
        text-align: center;
        a {
          color: #424243;
          font-family: "microsoft yahei", "微软雅黑";
          img {
            width: 288px;
            height: 288px;
          }
          .pro_tit {
            font-size: 20px;
            font-family: "宋体";
          }
          .price {
            color: #e53e49;
            font-size: 20px;
            font-family: "microsoft yahei", 微软雅黑;
          }
        }
        .small_link_txt {
          width: 288px;
          height: 86px;
          line-height: 28px;
          float: left;
          padding-top: 6px;
        }
      }
    }
  }
}
.big_link,
.small_link,
.small_link_s {
  transition: all 500ms ease-in-out;
  position: relative;
  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    transform: translate(0, -5px);
  }
}
#first-img {
  margin: 0;
}
</style>



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
      <!-- 2-0 -->
      <div class="rx-con-con container">
        <div class="big_link" @click="toDetails" :value="wares[0].wimg">
          <a href="javascript:void(0)">
            <img width="592" height="288" :alt="wares[0].wname" :title="wares[0].wname" />
          </a>

          <a href="javascript:void(0)" class="big_link_txt">
            <span class="pro_tit">{{wares[0].wname}}</span>
            <br />
            <span class="price">￥{{wares[0].wprice}}</span>
          </a>
        </div>
        <div class="small_link" @click="toDetails"  :value="wares[1].wimg">
          <a href="javascript:void(0)">
            <img width="288" height="288" :alt="wares[1].wname" :title="wares[1].wname" />
          </a>
          <a href="javascript:void(0)" class="small_link_txt">
            <span class="pro_tit">{{wares[1].wname}}</span>
            <br />
            <span class="price">￥{{wares[1].wprice}}</span>
          </a>
        </div>
        <div class="small_link" @click="toDetails" :value="wares[2].wimg">
          <a href="javascript:void(0)">
            <img width="288" height="288" :alt="wares[2].wname" :title="wares[2].wname" />
          </a>
          <a href="javascript:void(0)" class="small_link_txt">
            <span class="pro_tit">{{wares[2].wname}}</span>
            <br />
            <span class="price">￥{{wares[2].wprice}}</span>
          </a>
        </div>
      </div>
      <!-- 3-0 -->
      <div class="rx-con-con container">
        <div class="small_link" id="first-img" @click="toDetails"  :value="wares[3].wimg">
          <a href="javascript:void(0)">
            <img width="288" height="288" :alt="wares[3].wname" :title="wares[3].wname" />
          </a>
          <a href="javascript:void(0)" class="small_link_txt">
            <span class="pro_tit">{{wares[3].wname}}</span>
            <br />
            <span class="price">￥{{wares[3].wprice}}</span>
          </a>
        </div>
        <div class="small_link" @click="toDetails"  :value="wares[4].wimg">
          <a href="javascript:void(0)">
            <img width="288" height="288" :alt="wares[4].wname" :title="wares[4].wname" />
          </a>
          <a href="javascript:void(0)" class="small_link_txt">
            <span class="pro_tit">{{wares[4].wname}}</span>
            <br />
            <span class="price">￥{{wares[4].wprice}}</span>
          </a>
        </div>
        <div class="small_link" @click="toDetails"  :value="wares[5].wimg">
          <a href="javascript:void(0)">
            <img width="288" height="288" :alt="wares[5].wname" :title="wares[5].wname" />
          </a>
          <a href="javascript:void(0)" class="small_link_txt">
            <span class="pro_tit">{{wares[5].wname}}</span>
            <br />
            <span class="price">￥{{wares[5].wprice}}</span>
          </a>
        </div>
        <div class="small_link" @click="toDetails"  :value="wares[6].wimg">
          <a href="javascript:void(0)">
            <img width="288" height="288" :alt="wares[6].wname" :title="wares[6].wname" />
          </a>
          <a href="javascript:void(0)" class="small_link_txt">
            <span class="pro_tit">{{wares[6].wname}}</span>
            <br />
            <span class="price">￥{{wares[6].wprice}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$axios.post("/shopping/wares", { token: "toyo" }).then(({ data }) => {
      console.info(data)
      this.everyWare = data;
      this.wares = this.everyWare;
      // 添加动态图片  =>  不能直接添加(因为挂载前没有地址,会报错) , 需要在 axios 获取后动态添加
      let nodeList = [
        ...document.querySelectorAll(".big_link>a img"),
        ...document.querySelectorAll(".small_link>a img")
      ];
      // console.info(nodeList);
      nodeList.forEach((el, index) => {
        el.src = require(`../../images/${this.wares[index].wimg}.jpg`);
      });
    });

    let list = document.querySelectorAll(".rx-con-tit>h2>a");

    list.forEach((el, index) => {
      el.onmouseenter = () => {
        // 导航切换
        list.forEach(el => {
          el.style.color = "#fff";
        });
        el.style.color = "#555";
        // 图片区域文字切换
        this.wares = this.everyWare[index];
        // 图片动态切换
        let nodeList = [
          ...document.querySelectorAll(".big_link>a img"),
          ...document.querySelectorAll(".small_link>a img")
        ];
        nodeList.forEach((el, index) => {
          el.src = require(`../../images/${this.wares[index].wimg}.jpg`);
        });
      };
    });
  },
  data() {
    return {
      everyWare: [],
      wares: [
        {
          wname: "",
          wprice: "",
          wimg: ""
        },
        {
          wname: "",
          wprice: "",
          wimg: ""
        },
        {
          wname: "",
          wprice: "",
          wimg: ""
        },
        {
          wname: "",
          wprice: "",
          wimg: ""
        },
        {
          wname: "",
          wprice: "",
          wimg: ""
        },
        {
          wname: "",
          wprice: "",
          wimg: ""
        },
        {
          wname: "",
          wprice: "",
          wimg: ""
        }
      ]
    };
  },
  methods: {
    // 点击商品 跳转商品详情页 ,并动态传递 商品 编号
    toDetails(ev) {
      // div 等元素的 value 值需要使用 getAttribute("value") 的方式获取
      let oKey = ev.currentTarget.getAttribute('value')
      this.$router.push(`/details?${oKey}`);
    }
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



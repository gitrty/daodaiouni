<template>
  <div class="nav" id='nav'>
    <div class="nav-con">
      <!-- 导航栏 -->
      <div class="nav-l">
        <ul>
          <li @click="gohome">首页</li>
          <li>钻石</li>
          <li>婚戒</li>
          <li>对戒</li>
          <li>配饰</li>
          <li>彩钻</li>
          <li>时尚黄金</li>
          <li>品牌故事</li>
        </ul>
      </div>

      <!-- 搜索框 -->
      <div class="search">
        <input type="text" placeholder="搜索GIA证书号查询价格" />
        <button></button>
      </div>
      <!-- 购物车 用户 -->
      <div class="nav-r">
        <!-- shopping路由 -->
        <router-link to="/shopping">
          <span>
            <em v-show='shopnum'>{{shopnum}}</em>
          </span>
        </router-link>
        <span></span>
      </div>
    </div>
    <!-- 菜单 -->
    <div class="sub-menu">
      <div class="sub-menu-con">
        <ul>
          <li>{{sub_menu[0][0]}}</li>
          <li>{{sub_menu[0][1]}}</li>
          <li>{{sub_menu[0][2]}}</li>
          <li>{{sub_menu[0][3]}}</li>
          <li>{{sub_menu[0][4]}}</li>
          <li>{{sub_menu[0][5]}}</li>
        </ul>
        <ul>
          <li>{{sub_menu[1][0]}}</li>
          <li>{{sub_menu[1][1]}}</li>
          <li>{{sub_menu[1][2]}}</li>
          <li>{{sub_menu[1][3]}}</li>
          <li>{{sub_menu[1][4]}}</li>
          <li>{{sub_menu[1][5]}}</li>
        </ul>
        <ul class="two-ul">
          <li>{{sub_menu[2][0]}}</li>
          <li>{{sub_menu[2][1]}}</li>
          <li>{{sub_menu[2][2]}}</li>
          <li>{{sub_menu[2][3]}}</li>
          <li>{{sub_menu[2][4]}}</li>
          <li>{{sub_menu[2][5]}}</li>
        </ul>
        <div class="f-r">
          <a href="javascript:void(0)">
            <img :src="imgUrl" class="menu-img" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  data() {
    return {
      sub_menu: [
        ["钻石", "30分裸钻", "50分裸钻", "70分裸钻", "克拉钻", "探索全部钻石"],
        ["形状", "圆形", "心形", "水滴形", "公主方", "祖母绿"],
        [
          "定制",
          "先选钻托",
          "先选钻石",
          "钻石4C知识",
          "钻石其他参数",
          "钻石证书"
        ]
      ],
      imgUrl: require("../../images/menu_banner01.jpg"),
      menu_info: [
        [
          [
            "钻石",
            "30分裸钻",
            "50分裸钻",
            "70分裸钻",
            "克拉钻",
            "探索全部钻石"
          ],
          ["形状", "圆形", "心形", "水滴形", "公主方", "祖母绿"],
          [
            "定制",
            "先选钻托",
            "先选钻石",
            "钻石4C知识",
            "钻石其他参数",
            "钻石证书"
          ]
        ],
        [
          ["婚戒", "女士婚戒", "男士婚戒", "情侣对戒", "探索全部", ""],
          ["大小", "30分钻戒", "50分钻戒", "60分钻戒", "1克拉钻戒", ""],
          [
            "主题系列",
            "Fover永远经典款",
            "The Start 星光系列",
            "爱守护系列",
            "The Memory 铭记系列 ",
            ""
          ]
        ],
        [
          [
            "钻石",
            "30分裸钻",
            "50分裸钻",
            "70分裸钻",
            "克拉钻",
            "探索全部钻石"
          ],
          ["形状", "圆形", "心形", "水滴形", "公主方", "祖母绿"],
          [
            "定制",
            "先选钻托",
            "先选钻石",
            "钻石4C知识",
            "钻石其他参数",
            "钻石证书"
          ]
        ],
        [
          ["婚戒", "女士婚戒", "男士婚戒", "情侣对戒", "探索全部", ""],
          ["大小", "30分钻戒", "50分钻戒", "60分钻戒", "1克拉钻戒", ""],
          [
            "主题系列",
            "Fover永远经典款",
            "The Start 星光系列",
            "爱守护系列",
            "The Memory 铭记系列 ",
            ""
          ]
        ],
        [
          [
            "钻石",
            "30分裸钻",
            "50分裸钻",
            "70分裸钻",
            "克拉钻",
            "探索全部钻石"
          ],
          ["形状", "圆形", "心形", "水滴形", "公主方", "祖母绿"],
          [
            "定制",
            "先选钻托",
            "先选钻石",
            "钻石4C知识",
            "钻石其他参数",
            "钻石证书"
          ]
        ],
        [
          ["婚戒", "女士婚戒", "男士婚戒", "情侣对戒", "探索全部", ""],
          ["大小", "30分钻戒", "50分钻戒", "60分钻戒", "1克拉钻戒", ""],
          [
            "主题系列",
            "Fover永远经典款",
            "The Start 星光系列",
            "爱守护系列",
            "The Memory 铭记系列 ",
            ""
          ]
        ]
      ]
    };
  },
  methods:{
    gohome(){
      this.$router.push('/')
    }
  },
  computed:mapGetters([
    'shopnum'
  ]),
  // js实现导航栏 sticky 粘性定位
  mounted() {

    let oNav = document.querySelector(".nav");
    let mY = oNav.offsetTop;
    window.addEventListener("scroll", () => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > mY) {
        oNav.style.position = "fixed";
        document.querySelector(".logo").style.marginBottom =
          44 + "px";
      } else {
        oNav.style.position = "static";
        document.querySelector(".logo").style.marginBottom = 0;
      }
    });
    // 导航颜色切换
    let lis = document.querySelectorAll(".nav-l>ul>li");
    let menuImg = document.querySelector(".menu-img");
    let subMenu = document.querySelector(".sub-menu");
    subMenu.style.display = "none";
    lis.forEach((el, index) => {
      el.onmouseenter = () => {
        lis.forEach(el => {
          el.style.borderBottom = "none";
          el.style.color = "#000";
        });
        el.style.borderBottom = "1px solid #ca0000";
        el.style.color = "#ca0000";
        if (index > 0 && index < 7) {
          // 控制显示menu消失
          subMenu.style.display = "block";
          // 切换menu栏图片
          menuImg.setAttribute(
            "src",
            require(`../../images/menu_banner0${index}.jpg`)
          );
          // 切换menu文字内容
          this.sub_menu = this.menu_info[index - 1];
        } else {
          subMenu.style.display = "none";
        }
      };
    });

    subMenu.onmouseleave = () => {
      subMenu.style.display = "none";
    };
    
    oNav.onmouseleave = () => {
      subMenu.style.display = "none";
    };

    // end
  }
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  min-width: 1200px;
  height: 44px;
  background-color: #fff;
  line-height: 44px;
  top: 0;
  position: relative;
  z-index: 10;
  border-bottom: 1px solid #dfdfdf;
  .nav-con {
    position: relative;
    width: 1200px;
    height: 44px;
    // background-color: pink;
    margin: 0 auto;
    background-color: #fff;
  border-bottom: 1px solid #dfdfdf;
    .nav-l {
      font-size: 16px;
      ul {
        text-align: center;
        height: 44px;
        width: 1200px;
        // background-color: red;
        li {
          cursor: pointer;
          float: left;
          width: 104px;
          height: 44px;
          // position: relative;
          // &:hover {
          //   border-bottom: 1px solid #ca0000;
          //   color: #ca0000;
          // }
        }
      }
    }

    .search {
      position: absolute;
      right: 144px;
      top: 2px;
      background: #fafafa;
      border: 1px solid #e5e5e5;
      width: 208px;
      height: 30px;
      margin-top: 4px;
      input {
        width: 176px;
        background: none;
        outline: none;
        border: none;
        line-height: 28px;
        height: 28px;
        float: left;
        margin: 0px;
        font-size: 14px;
        text-indent: 8px;
        font-family: "microsoft yahei", "微软雅黑";
      }
      button {
        cursor: pointer;
        float: left;
        width: 30px;
        border: none;
        height: 28px;
        background: url(../../images/bg.png) no-repeat -22px -14px;
        &:hover {
          background-position: -22px -54px;
        }
      }
    }

    .nav-r {
      position: absolute;
      top: 0;
      right: 0px;
      width: 94px;
      height: 44px;
      // background-color: gold;
      span {
        cursor: pointer;
        display: inline-block;
        width: 38px;
        height: 38px;
        background-repeat: no-repeat;
        background-image: url(../../images/bg.png);
      }
      span {
        position: relative;
        background-position: -59px -7px;
        &:hover {
          background-position: -59px -47px;
        }
        em {
          position: absolute;
          width: 19px;
          height: 19px;
          text-align: center;
          font-size: 12px;
          line-height: 19px;
          left: 22px;
          color: #fff;
          background: #ca0000;
          border-radius: 19px;
        }
      }
      > span {
        background-position: -90px -7px;
        &:hover {
          background-position: -90px -47px;
        }
      }
    }
  }
}

.sub-menu {
  width: 100%;
  height: 320px;
  position: absolute;
  z-index: 2;
  background: #fff;
  left: 0px;
  // border-top: 1px solid #dfdfdf;
  .sub-menu-con {
    padding: 30px 0 30px 32px;
    width: 1200px;
    height: 100%;
    // background-color: pink;
    margin: 0 auto;
    position: relative;
    ul {
      float: left;
      li {
        cursor: pointer;
        width: 158px;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        font-family: "宋体";
        &:hover {
          color: #ca0000;
        }
      }
      li:nth-child(1) {
        height: 28px;
        line-height: 28px;
        font-size: 14px;
        margin-bottom: 6px;
        font-weight: bold;
        font-family: "宋体";
      }
    }
    .two-ul {
      width: 180px;
      // margin-left: 50px;
      text-align: left;
      // background: indianred;
      position: absolute;
      left: 360px;
      padding-left: 50px;
      border-left: 1px solid #dfdfdf;
      li:nth-child(2),
      li:nth-child(3) {
        margin-bottom: 6px;
        font-weight: bold;
        font-family: "宋体";
      }
    }
  }
}
</style>


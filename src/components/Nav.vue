<template>
  <div class="nav">
    <div class="nav-con">
      <!-- 导航栏 -->
      <div class="nav-l">
        <ul>
          <li>首页</li>
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
            <em>{{shopping_num}}</em>
          </span>
        </router-link>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopping_num: 0
    };
  },
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
        document.querySelector(".banner").style.marginTop =
          oNav.offsetHeight + "px";
      } else {
        oNav.style.position = "static";
        document.querySelector(".banner").style.marginTop = 0;
      }
    });
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
  z-index: 100;
  .nav-con {
    position: relative;
    width: 1200px;
    height: 44px;
    // background-color: pink;
    margin: 0 auto;
    background-color: #fff;
    .nav-l {
      font-size: 16px;
      ul {
        text-align: center;
        height: 44px;
        width: 1200px;
        li {
          cursor: pointer;
          float: left;
          width: 104px;
          height: 44px;
          &:hover {
            border-bottom: 1px solid #ca0000;
          }
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
        background: url(../images/bg.png) no-repeat -22px -14px;
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
        background-image: url(../images/bg.png);
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
</style>


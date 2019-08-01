<template>
  <div class="dia_search">
    <div class="dia_search_top">
      <!-- 1 -->
      <div style="width:1130px; padding-bottom:24px; float:left; margin-top:16px;">
        <div class="n_searc_tit" style=" padding-top:20px; background:none;">形状</div>
        <div class="shape_list">
          <a
            id="index_shape0"
            class="shape_cur0"
            onclick
            href="javascript:void(0);"
            style="margin-left:-6px;"
          >
            <i></i>圆形
          </a>
          <a id="index_shape1" class="shape1" onclick href="javascript:void(0);">
            <i></i>公主方
          </a>
          <a id="index_shape2" class="shape2" onclick href="javascript:void(0);">
            <i></i>心形
          </a>
          <a
            id="index_shape3"
            class="shape3"
            onclick
            href="javascript:void(0);"
            style="margin-left:54px;"
          >
            <i></i>梨形
          </a>
          <a
            id="index_shape4"
            class="shape4"
            onclick
            href="javascript:void(0);"
            style="margin-left:54px;"
          >
            <i></i>祖母绿
          </a>
          <a id="index_shape5" class="shape5" onclick href="javascript:void(0);">
            <i></i>椭圆形
          </a>
          <a
            id="index_shape6"
            class="shape6"
            onclick
            href="javascript:void(0);"
            style="margin-left:54px;"
          >
            <i></i>垫形
          </a>
          <a
            id="index_shape7"
            class="shape7"
            onclick
            href="javascript:void(0);"
            style="margin-left:54px;"
          >
            <i></i>雷迪恩
          </a>
          <a id="index_shape8" class="shape8" onclick href="javascript:void(0);">
            <i></i>橄榄形
          </a>
          <a id="index_shape9" class="shape9" onclick href="javascript:void(0);">
            <i></i>三角形
          </a>
        </div>
      </div>
      <!-- 2 -->
      <div style="padding-bottom:12px;float:left;">
        <div class="screen-l">
          <div class="n_searc_tit">钻重</div>
          <input type="text" class="nct" :value="ct1" />
          <div class="n_wid46">
            <span></span>
          </div>
          <input type="text" class="nct" :value="ct2" />
        </div>
        <div class="screen-l">
          <div class="n_searc_tit">价格</div>
          <input type="text" class="nct rmb" :value="rmb1" />
          <div class="n_wid46">
            <span></span>
          </div>
          <input type="text" class="nct rmb" :value="rmb2" />
        </div>
      </div>
      <!-- 3 -->
      <div style="padding-top: 12px;padding-bottom: 16px;float: left; height:60px;">
        <div id="screen-p">
          <div class="n_searc_tit">颜色</div>
          <div class="wid477 color_list">
            <ul>
              <li class="mr3">
                <a id="img_color0" href="javascript:void(0);">D</a>
              </li>
              <li class="mr3">
                <a id="img_color0" href="javascript:void(0);">E</a>
              </li>
              <li class="mr3">
                <a id="img_color0" href="javascript:void(0);">F</a>
              </li>
              <li class="mr3">
                <a id="img_color0" href="javascript:void(0);">G</a>
              </li>
              <li class="mr3">
                <a id="img_color0" href="javascript:void(0);">H</a>
              </li>
              <li class="mr3">
                <a id="img_color0" href="javascript:void(0);">I</a>
              </li>
              <li class="mr3">
                <a id="img_color0" href="javascript:void(0);">J</a>
              </li>
              <li class="mr3">
                <a id="img_color0" href="javascript:void(0);">K</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="screen-p">
          <div class="n_searc_tit">切工</div>
          <div class="wid477 color_list">
            <ul>
              <li id="mr3-2">
                <a id="img_color0" href="javascript:void(0);">EX</a>
              </li>
              <li id="mr3-2">
                <a id="img_color0" href="javascript:void(0);">VG</a>
              </li>
              <li id="mr3-2">
                <a id="img_color0" href="javascript:void(0);">GD</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 4 -->
      <div id="screen-p">
        <div class="n_searc_tit">净度</div>
        <div class="wid477 color_list">
          <ul>
            <li class="mr3">
              <a id="img_color0" href="javascript:void(0);">FL</a>
            </li>
            <li class="mr3">
              <a id="img_color0" href="javascript:void(0);">IF</a>
            </li>
            <li class="mr3">
              <a id="img_color0" href="javascript:void(0);">VVS1</a>
            </li>
            <li class="mr3">
              <a id="img_color0" href="javascript:void(0);">VVS2</a>
            </li>
            <li class="mr3">
              <a id="img_color0" href="javascript:void(0);">VS1</a>
            </li>
            <li class="mr3">
              <a id="img_color0" href="javascript:void(0);">VS2</a>
            </li>
            <li class="mr3">
              <a id="img_color0" href="javascript:void(0);">SI1</a>
            </li>
            <li class="mr3">
              <a id="img_color0" href="javascript:void(0);">SI2</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 定制裸钻 / 重新搜索 按钮 -->
      <div class="screen-l">
        <div class="search_div">
          <a href="javascript:void(0);" class="search_confirm">定制裸钻</a>
          <a href="javascript:void(0);" class="search_reset">重新搜索</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ct1: "0.30",
      ct2: "20.00",
      rmb1: "1,000",
      rmb2: "5,000,000"
    };
  }
};
</script>

<style lang="scss" scoped>
.n_searc_tit {
  width: 50px;
  height: 27px;
  float: left;
  line-height: 27px;
  margin-right: 9px;
//   display: inline;
  background: url(../../images/dia_searh_arrow.png);
  background-position: right bottom;
  background-repeat: no-repeat;
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 3px;
  font-family: "宋体";
}
.wid477 {
  text-align: center;
  width: 470px;
  float: left;
  margin-top: -4px;
  ul {
    float: left;
    li {
      width: 55px;
      float: left;
      height: 34px;
      border: 1px solid #f0f0f0;
      border-radius: 3px;
      margin-right: 3px;
      &:hover {
        background: #bba496;
        color: #fff;
      }
      a {
        width: 55px;
        float: left;
        height: 34px;
        line-height: 34px;
        font-family: "宋体";
        font-size: 14px;
        color: #000;
      }
    }
  }
}
.dia_search {
  width: 100%;
  min-width: 1200px;
  height: 360px;
//   background: red;
  .dia_search_top {
    width: 1130px;
    height: 360px;
    margin: 0 auto;
    background: #fafafa;
    padding: 24px 35px 53px 35px;
    margin-top: 9px;
    position: relative;
  }

  .shape_list {
    text-align: center;
    width: 1070px;
    height: 90px;
    float: left;
    a {
      width: 60px;
      height: 90px;
      float: left;
      margin-left: 42px;
    //   display: inline;
      font-family: "宋体";
      color: #666;
      font-size: 12px;
      i {
        background: url(../../images/shape.png);
        background-repeat: no-repeat;
        width: 60px;
        height: 60px;
        display: block;
        margin-bottom: 5px;
        float: left;
      }
    }
    .shape_cur0 i {
      background-position: -51px -64px;
    }
    .shape1 i {
      background-position: -164px 0px;
    }
    .shape2 i {
      background-position: -277px 0px;
    }
    .shape3 i {
      background-position: -392px 0px;
    }
    .shape4 i {
      background-position: -505px 0px;
    }
    .shape5 i {
      background-position: -618px 0px;
    }
    .shape6 i {
      background-position: -732px 0px;
    }
    .shape7 i {
      background-position: -846px 0px;
    }
    .shape8 i {
      background-position: -959px 0px;
    }
    .shape9 i {
      background-position: -1073px 0px;
    }
  }
  .shape_list a.shape_cur0 {
    color: #bba496;
    font-weight: bold;
  }
}
.screen-l {
  width: 530px;
  float: left;
//   display: inline;
  height: 27px;
  //   background-color: pink;

  .nct {
    box-sizing: content-box;
    background: url(../../images/ct.jpg);
    background-repeat: no-repeat;
    height: 25px;
    padding: 0px;
    width: 138px;
    border: 1px solid #f0f0f0;
    float: left;
    font-family: "宋体";
    color: #666;
    font-size: 14px;
    text-indent: 10px;
    outline: none;
    line-height: 25px;
  }
  .rmb {
    background: url(../../images/rmb.jpg);
    background-repeat: no-repeat;
  }
  .n_wid46 {
    width: 46px;
    float: left;
    span {
      width: 46px;
      display: block;
      height: 27px;
      background: url(../../images/dia_searh.jpg);
      background-position: 5px 0px;
      background-repeat: no-repeat;
    }
  }
}
.search_div {
  margin-left: 88px;
  text-align: center;
  a {
    width: 157px;
    height: 30px;
    display: block;
    float: left;
    color: #fff;
    line-height: 30px;
    border-radius: 3px;
    margin-right: 11px;
    font-family: "宋体";
    font-size: 15px;
    letter-spacing: 4px;
  }
  a:nth-child(2) {
    background: #bba496;
    float: right;
  }
  a:nth-child(1) {
    background: #dc383f;
  }
}
#screen-p {
  width: 530px;
  height: 34px;
  float: left;
//   display: inline;
}
#mr3-2 {
  width: 150px;
  float: left;
  height: 34px;
  border: 1px solid #f0f0f0;
  border-radius: 3px;
}

#mr3-2 #img_color0 {
  width: 150px;
}
</style>



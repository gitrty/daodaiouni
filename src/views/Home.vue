<template>
  <div>
    <!-- 轮播图 -->
    <toyo-Banner />
    <!-- GIA定制三部曲 -->
    <div class="gia">
      <div class="gia-con">
        <h1 class="dia_three">
          <img src="../images/gia.jpg" alt="钻石戒指定制,结婚钻戒定制" />
        </h1>
      </div>
    </div>
    <div class="gia">
      <div class="gia-con">
        <div class="zuan">
          <a href="javascript:void(0)" target="_blank">
            <img src="../images/c1.jpg" />
          </a>
        </div>
        <div class="zuan">
          <a href="javascript:void(0)" target="_blank">
            <img src="../images/c2.jpg" />
          </a>
        </div>
        <div class="zuan">
          <a href="javascript:void(0)" target="_blank">
            <img src="../images/c3.jpg" />
          </a>
        </div>
      </div>
    </div>
    <!-- 筛选搜索 -->
    <toyo-Screen />
    <!-- 系列产品 -->
    <div class="level">
      <div class="level-con">系列产品</div>
    </div>
    <toyo-Xlcp />
    <!-- 热销推荐 -->
    <toyo-Rxtj />
    <!-- 定制钻托 -->
    <toyo-Dzzt />
    <!-- 钻石知识 / 品牌故事 -->
    <toyo-Zszs />
    <!-- 资讯栏 -->
    <toyo-News />
  </div>
</template>

<script>
export default {
  mounted() {
    document.documentElement.scrollTop = 0;
  }
};
</script>

<style lang="scss" scoped>
.gia {
  width: 100%;
  height: 237px;
  min-width: 1200px;
  .gia-con {
    width: 1200px;
    height: 100%;
    //   background-color: pink;
    margin: 0 auto;
    h1 {
      text-align: center;
      padding-top: 77px;
    }
    .zuan {
      width: 360px;
      float: left;
      a {
        color: #424243;
        text-decoration: none;
        font-family: "microsoft yahei", "微软雅黑";
      }
    }
    .zuan:nth-child(2) {
      width: 480px;
    }
  }
}
.level {
  width: 100%;
  min-width: 1200px;
  height: 100px;
  .level-con {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    line-height: 100px;
    font-size: 30px;
    text-align: center;
    font-family: "宋体";
    color: #555555;
  }
}
</style>



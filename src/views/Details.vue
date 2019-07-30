<template>
  <div>
    <!-- 标题栏 -->
    <div class="de-top">
      <div class="de-top-con">
        <div class="postion">
          <a href="//www.ilovezuan.com/" title="婚戒,钻戒定制网" looyu_bound="1">首页</a>
          <span>&gt;</span>
          <a href="/nvjie/" looyu_bound="1">钻石女戒</a>
          <span>&gt;</span>
          恋人絮语/PT950铂金钻戒 30分/F-G色/SI净度/国检-forever love系列
        </div>
      </div>
    </div>
    <!-- 商品详情 / 放大镜 -->
    <Loupe />
    <!-- 商品参数 -->
    <Spcs />
    <!-- 用户评价 -->
    <Review />
  </div>
</template>

<script>
import Loupe from "../components/Loupe.vue";
import Spcs from "../components/Spcs.vue";
import Review from "../components/Review.vue";
export default {
  components: {
    Loupe,
    Spcs,
    Review
  }
};
</script>

<style lang="scss" scoped>
.de-top {
  width: 100%;
  min-width: 1200px;
  height: 52px;

  background: #f6f6f6;
  .de-top-con {
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    // background-color: pink;
    .postion {
      height: 52px;
      line-height: 52px;
      font-size: 12px;
      font-family: "microsoft yahei", "微软雅黑";
      text-align: left;
      color: #888;
      a {
        color: #424243;
      }
    }
  }
}
</style>



<template>
  <div class="zszs">
    <div class="zszs-con">
      <div class="pinpai hight_light">
        <a href="javascript:void(0)" target="_blank">
          <img
            src="../../images/pinpai1.jpg"
            alt="钻石知识"
            title="钻石知识"
            width="501"
            height="634"
          />
        </a>
      </div>
      <div class="knowledge">
        <div class="knowledge_top">
          <div class="kl_top_txt">品牌故事</div>
          <div style="text-align:center">
            <img src="../../images/zuanjia.jpg" alt="品牌故事" title="品牌故事" />
          </div>
          <div class="kl_top_desc">超值的价格 买上乘的钻石</div>
        </div>
        <span class="hight_light">
          <a href="javascript:void(0)" target="_blank">
            <img
              src="../../images/pinpai2.jpg"
              width="683"
              height="474"
              alt="超值的价格 买上乘的钻石"
              title="超值的价格 买上乘的钻石"
            />
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.zszs {
  margin-top: 40px;
  width: 100%;
  min-width: 1200px;
  height: 634px;
  .zszs-con {
    width: 1200px;
    height: 634px;
    margin: 0 auto;
    // background-color: red;
    img{
        &:hover{
            opacity: .7;
        }
    }
    .pinpai {
      width: 501px;
      height: 634px;
      float: left;
    }

    .knowledge {
      width: 683px;
      height: 634px;
      float: right;
      .knowledge_top {
        width: 683px;
        height: 160px;
        float: left;
        background: #fbfaf6;
        .kl_top_txt {
          font-size: 30px;
          text-align: center;
          line-height: 80px;
          margin-top: 5px;
          font-family: "宋体";
          letter-spacing: 3px;
          color: #000;
        }
        .kl_top_desc {
          text-align: center;
          line-height: 40px;
          font-size: 16px;
          font-family: "宋体";
          letter-spacing: 4px;
          color: #000;
        }
        .hight_light {
          float: left;
          a {
            color: #424243;
            text-decoration: none;
            font-family: "microsoft yahei", "微软雅黑";
          }
        }
      }
    }
  }
}
</style>



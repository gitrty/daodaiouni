<template>
  <div class="review">
    <div class="review-con">
      <!-- 1 -->
      <div class="rev-l">
        <div class="detail_tit"></div>
        <div class="detail_tit_txt">评价晒单</div>
      </div>
      <!-- 2 -->
      <div class="comment_top">
        <span class="comment_top_tit">用户点评</span>
        <input name="shaitu" id="shaitu" checked="checked" type="radio" />全部评论（109）
        <input name="shaitu" id="shaitu" type="radio" v-model='checked2'/>晒图（5）
      </div>
      <!-- 3 -->
      <ul id="comment_list">
        <li class="comment_item" v-for="(cont,index) in review_info" :key="index">
          <div class="cm_u_ico">
            <img src="../images/1.jpg" style="border-radius:20px;" width="40" height="40" />
          </div>
          <div class="comment_con">
            <div class="comment_con_txt">
              <p>匿名 {{cont[0]}}</p>
              <p>
                商品点评：
                <span>{{cont[1]}}</span>
              </p>
            </div>
          </div>
          <div class="cm_star">
            <div class="hpd_txt">
              <div class="cm_star_div">
                <i class="star_red"></i>
                <i class="star_red"></i>
                <i class="star_red"></i>
                <i class="star_red"></i>
                <i class="star_red"></i>
              </div>
              <p class="cm_attr">{{cont[2]}}</p>
            </div>
          </div>
        </li>
      </ul>
      <!-- end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      review_info: [
        [
          "2018-11-21",
          "戒指挺好的，戴在手上特别的好看，比实体店优惠很多，非常满意",
          "恋人絮语/18K白金钻戒 50分VS2/H/GIA-forever love"
        ],
        [
          "2018-11-21",
          "心心念念的钻戒终于收到啦，钻戒上手很漂亮，很闪很亮，带有证书，正品没错啦，快递也是非常的给力，大爱哟",
          "恋人絮语/白18K金钻戒30分/I-J色/SI净度/国检-forever love系列"
        ],
        [
          " 2018-09-10",
          "挺不错的，复检了是真的，整个购买流程很愉快，好评",
          "恋人絮语/白18K金钻戒30分/I-J色/SI净度/国检-forever love系列"
        ]
      ],
      checked2:''
    };
  },
  mounted() {
      
  }
};
</script>

<style lang="scss" scoped>
.review {
  width: 100%;
  min-width: 1200px;
  background-color: #f6f6f6;
  .review-con {
    width: 1200px;
    margin: 0 auto;
    background-color: #f6f6f6;
    padding: 48px;
    // padding-top: 48px+32px;
  }
}
.rev-l {
  text-align: center;
  height: 130px;
  position: relative;
  width: 1200px;
  .detail_tit {
    height: 65px;
    border-bottom: 1px solid #dfdfdf;
    width: 1200px;
  }
  .detail_tit_txt {
    width: 290px;
    margin: 0 auto;
    height: 65px;
    margin-top: -34px;
    background: #f6f6f6;
    font-size: 32px;
    line-height: 65px;
    color: #555;
  }
}
.comment_top {
  text-align: left;
  height: 87px;
  color: #555;
  font-size: 20px;
  .comment_top_tit {
    font-size: 30px;
    font-weight: bold;
    color: #555;
    margin-right: 36px;
  }
}
.comment_all {
  float: left;
  background: #fff;
  width: 1200px;
  padding: 48px;
  .comment_all_left {
    width: 300px;
    float: left;
    .hpd {
      font-size: 56px;
      color: #ca0000;
      height: 50px;
      float: left;
      line-height: 50px;
      line-height: 58px\9;
      vertical-align: middle;
    }
    .hpd_txt {
      height: 50px;
      font-size: 14px;
      float: left;
      margin-left: 10px;
      text-align: left;
      .hpd_txt1 {
        padding-bottom: 8px;
        width: 90px;
        padding-top: 2px;
        font-size: 14px;
      }
      .star_div {
        width: 90px;
        .star_red {
          width: 15px;
          height: 14px;
          background: url(../images/star_yellow.jpg);
          display: block;
          float: left;
          margin-right: 2px;
        }
      }
    }
  }
  .comment_cl {
    width: 118px;
    float: right;
    .hpd_txt {
      height: 50px;
      font-size: 14px;
      float: left;
      margin-left: 10px;
      text-align: left;
      .hpd_txt1 {
        padding-bottom: 8px;
        width: 90px;
        padding-top: 2px;
        font-size: 14px;
      }
      .star_div {
        width: 90px;
        .star_red {
          width: 15px;
          height: 14px;
          background: url(../images/star_yellow.jpg);
          display: block;
          float: left;
          margin-right: 2px;
        }
        .star_gray {
          width: 15px;
          height: 14px;
          background: url(../images/star_gray.jpg);
          display: block;
          float: left;
          margin-right: 2px;
        }
      }
    }
  }
}
#comment_list {
  background-color: #f6f6f6;
  height: 400px;
}
.comment_item {
  background-color: #f6f6f6;
  padding-top: 40px;
  border-top: 1px solid #dfdfdf;
  width: 1104px;
  float: left;
  padding-bottom: 40px;
  font-size: 14px;
  color: #989898;
  .cm_u_ico {
    width: 60px;
    float: left;
    text-align: left;
  }
  .comment_con {
    width: 650px;
    float: left;
    text-align: left;
  }
  .cm_star {
    width: 186px;
    float: right;
    .hpd_txt {
      height: 50px;
      font-size: 14px;
      float: left;
      margin-left: 10px;
      text-align: left;
      .cm_star_div {
        width: 186px;
        float: left;
        .star_red {
          width: 15px;
          height: 14px;
          background: url(../images/star_yellow.jpg);
          display: block;
          float: left;
          margin-right: 2px;
        }
      }
    }
  }
}
.comment_con_txt p span {
  color: #222;
}
</style>



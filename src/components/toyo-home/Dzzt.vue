<template>
  <div class="dzzt">
    <div class="dzzt-con">
      <p>定制钻托</p>
    </div>
    <div class="f_rng_focus">
      <ul style="left: 0px;">
        <li style="margin-top: 0px;">
          <a href="javascript:void(0)" target="_blank">
            <img src="./../../images/1507688715288748490.jpg" width="240" height="193" />
          </a>
        </li>
        <li style="margin-top: 0px;">
          <a href="javascript:void(0)" target="_blank">
            <img src="../../images/1500619210338338309.jpg" width="240" height="193" />
          </a>
        </li>
        <li style="margin-top: 0px;">
          <a href="javascript:void(0)" target="_blank">
            <img src="../../images/1507688993064296317.jpg" width="240" height="193" />
          </a>
        </li>
        <li style="margin-top: 0px;">
          <a href="javascript:void(0)" target="_blank">
            <img src="../../images/1507689042180246176.jpg" width="240" height="193" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let lis = document.querySelectorAll(".f_rng_focus>ul>li");
    lis.forEach(el => {
      el.onmouseenter = () => {
        this.animate_slow(el, { top: -10 });
      };
      el.onmouseleave = () => {
        this.animate_slow(el, { top: 0 });
      };
    });
  }
};
</script>

<style lang="scss" scoped>
.dzzt {
  width: 100%;
  min-width: 1200px;
  height: 48px+193px;
  margin-top: 90px;
  font-size: 30px;
  text-align: center;
  font-family: "宋体";
  color: #555555;
  margin-bottom: -20px;
  .dzzt-con {
    width: 1200px;
    height: 48px;
    margin: 0 auto;
    // background-color: pink;
  }
  .f_rng_focus {
    width: 1200px;
    overflow: hidden;
    height: 193px;
    position: relative;
    z-index: 0;
    margin: 0 auto;
    //   background-color: red;
    ul {
      position: absolute;
      top: 0;
      left: 0;
      width: 2750px;
      margin: 0;
      padding: 0;
      li {
        width: 240px;
        height: 193px;
        float: left;
        padding: 0 17px;
        margin-top: 0;
        margin-right: 26px;
        margin-left: 26px;
        transition: 0.5 all;
        position: relative;
        a {
          display: inline-block;
          margin-top: 0;
        }
      }
    }
  }
}
</style>



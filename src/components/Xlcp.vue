<template>
  <div class="xlcp">
    <div class="xlcp-con">
      <div class="xl-l">
        <a href="javascript:void(0)">
          <img src="../images/a_level_p1.jpg" width="889" height="292" alt="真爱永恒系列" title="真爱永恒系列" />
        </a>
        <div class="xl-l-l">
          <a href="javascript:void(0)">
            <img
              src="../images/a_level_p2.jpg"
              width="492"
              height="442"
              style="float: left;"
              alt="星克拉闪耀系列"
              title="星克拉闪耀系列"
            />
          </a>
          <a href="javascript:void(0)" class="f-r">
            <img src="../images/a_level_p3.jpg" width="381" height="442" alt="铭记系列" title="铭记系列" />
          </a>
        </div>
      </div>
      <div class="xl-r f-r">
        <a href="javascript:void(0)">
          <img
            src="../images/a_level_p4.jpg"
            width="295"
            height="750"
            alt="爱守护加冕系列"
            title="爱守护加冕系列"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.xlcp {
  min-width: 1200px;
  width: 100%;
  height: 750px;
  .xlcp-con {
    width: 1200px;
    height: 100%;
    // background-color: pink;
    margin: 0 auto;
    .xl-l {
      width: 889px;
      float: left;
      .xl-l-l {
        margin-top: 16px;
      }
    }
    img {
      opacity: 1;
      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>



<template>
  <div class="banner">
    <img src="../images/banner0.jpg" alt />
    <img src="../images/banner1.jpg" alt />
    <img src="../images/banner2.jpg" alt />
    <img src="../images/banner3.jpg" alt />
    <ul class="ban-min">
      <li class="current"></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <a class="prev" href="javascript:void(0)"></a>
    <a class="next" href="javascript:void(0)"></a>
  </div>
</template>

<script>
export default {
  mounted() {
    let oImgs = document.querySelectorAll(".banner>img");
    let lis = document.querySelectorAll(".ban-min>li");
    let oPrev = document.querySelector(".prev");
    let oNext = document.querySelector(".next");
    // 轮播图自动播放
    let temIndex = 0;
    let autoPaly = () => {
      temIndex++;
      if (temIndex > 3) {
        temIndex = 0;
      }
      oImgs.forEach(el => {
        this.animate_slow(el, { opacity: 0 });
      });
      this.animate_slow(oImgs[temIndex], { opacity: 1 });
      lis.forEach(el => {
        el.classList.remove("current");
      });
      lis[temIndex].classList.add("current");
    };
    window.banner = setInterval(autoPaly, 3000);
    // 点击li切换
    lis.forEach((el, index) => {
      el.onclick = () => {
        temIndex = index - 1;
        autoPaly();
      };
    });
    // 点击左右切换
    let autoPlay2 = () => {
      oImgs.forEach(el => {
        this.animate_slow(el, { opacity: 0 });
      });
      this.animate_slow(oImgs[temIndex], { opacity: 1 });
      lis.forEach(el => {
        el.classList.remove("current");
      });
      lis[temIndex].classList.add("current");
    };
    oPrev.onclick = () => {
      temIndex--;
      if (temIndex < 0) {
        temIndex = 3;
      }
      autoPlay2();
    };
    oNext.onclick = () => {
      temIndex++;
      if (temIndex > 3) {
        temIndex = 0;
      }
      autoPlay2();
    };
    // 鼠标进入停止轮播
    let banner = document.querySelector(".banner");
    banner.onmouseenter = () => {
      clearInterval(window.banner);
      oPrev.style.display = "block";
      oNext.style.display = "block";
    };
    // 鼠标移出开始轮播
    banner.onmouseleave = () => {
      window.banner = setInterval(autoPaly, 3000);
      oPrev.style.display = "none";
      oNext.style.display = "none";
    };
  }
};
</script>

<style lang="scss" scoped>
.banner {
  border-top: 1px solid #dfdfdf;
  cursor: pointer;
  height: 580px;
  min-width: 1200px;
  width: 100%;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    width: 1920px;
    height: 580px;
    left: 50%;
    margin-left: -960px;
  }
  img:nth-child(1) {
    z-index: 1;
  }
  ul {
    display: inline-block;
    width: 300px;
    height: 25px;
    z-index: 2;
    left: 50%;
    margin-left: -150px;
    text-align: center;
    bottom: 15px;
    position: absolute;
    li {
      width: 14px;
      height: 14px;
      margin-right: 9px;
      cursor: pointer;
      display: inline-block;
      border-radius: 50%;
      background-color: #555;
    }
    li.current {
      background-color: #ff8a81;
    }
  }
  .prev,
  .next {
    width: 45px;
    height: 70px;
    position: absolute;
    left: 50%;
    top: 259px;
    z-index: 3;
    cursor: pointer;
    display: none;
  }
  .next {
    margin-left: 482px;
    background: url(../images/next_54.png) no-repeat left top;
    &:hover {
      background-position: right top;
    }
  }
  .prev {
    margin-left: -527px;
    background: url(../images/prev_54.png) no-repeat left top;
    &:hover {
      background-position: right top;
    }
  }
}
</style>



<template>
  <div class="logo" id="logo">
    <div class="logo-con">
      <!-- Home 路由 -->
        <router-link to='/'><img src="../../images/logo.jpg"></router-link>
        <img src="../../images/other.jpg">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  height: 74px;
  width: 100%;
  min-width: 1200px;
  .logo-con {
      height: 100%;
      width: 1200px;
      margin: 0 auto;
      position: relative;
      img{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          cursor: pointer;
      }
      >img{
          position: absolute;
          top: 50%;
          left: 60%;
          transform: translate(0,-30%);
      }
  }
}
</style>


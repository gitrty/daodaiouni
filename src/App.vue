<template>
  <div id="box">
      <!-- 顶部 -->
    <toyo-Header />
    <!-- 右边悬框 -->
    <toyo-Float />
    <!-- logo栏 -->
    <toyo-Logo />
    <!-- 导航栏 -->
    <toyo-Nav />
    <!-- vue路由 Home/Shopping/... 组件-->
    <div>
      <router-view />
    </div>
    <!-- 底部 -->
    <toyo-Footer />
  </div>
</template>




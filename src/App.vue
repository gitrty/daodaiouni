<template>
  <div class="box">
      <!-- 顶部 -->
    <Header />
    <!-- logo栏 -->
    <Logo />
    <!-- 导航栏 -->
    <Nav />
    <!-- vue路由 Home/Shopping 组件-->
    <div>
      <router-view />
    </div>
    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Logo from "./components/Logo.vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue"
export default {
  components: {
    Header,
    Logo,
    Nav,
    Footer
  }
};
</script>

<style scoped>

</style>




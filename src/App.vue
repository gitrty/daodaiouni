<template>
  <div class="box">
      <!-- 顶部 -->
    <Header />
    <!-- 右边悬框 -->
    <Float />
    <!-- logo栏 -->
    <Logo />
    <!-- 导航栏 -->
    <!-- <Nav /> -->
    <!-- vue路由 Home/Shopping/ 组件-->
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
import Float from "./components/Float.vue";
export default {
  components: {
    Header,
    Logo,
    Nav,
    Footer,
    Float
  }
};
</script>

<style scoped>

</style>




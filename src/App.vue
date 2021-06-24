<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
    </div>
    <div id="footer">
      <!-- 需求：Footer组件在登录&注册不显示
      解决：
        判断当前是否在登录或注册？ -->
      
    </div>

    <router-view />
    <Footer
        v-if="$route.path !== '/login' && $route.path !== '/register'"
      ></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>

<template>
  <el-container direction="vertical" class="app">
    <Header/>
    <el-container class="app-container" >
      <Aside/>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <Footer/>
  </el-container>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Aside
  }
};
</script>

<style lang="less">
body {
  // reset css
  margin: 0;
}

.app {
  height: 100vh;
  width: 100vw;
}

.app-container {
  margin-top: 50px;
}
</style>

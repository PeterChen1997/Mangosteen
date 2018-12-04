<template>
  <el-header class="header">
    <img src="@/assets/mangosteen.png" alt="logo" class="logo">
    <el-menu mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2">处理</el-menu-item>
      <el-menu-item index="3">消息中心</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    handleSelect(e) {
      console.log(e);
    }
  }
};
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.logo {
  height: 60px;
}
</style>
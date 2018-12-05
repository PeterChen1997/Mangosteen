<template>
  <el-aside width="200px">
    <el-menu
      :default-active="this.currentAsideIndex"
      class="el-menu-vertical-demo"
      :router="true"
    >
      <el-menu-item
        v-for="menuItem in this.menu"
        :key="menuItem.index"
        :index="menuItem.index"
        :route="menuItem.route"
      >
        <i :class="menuItem.icon"></i>
        <span>{{menuItem.title}}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
import asideItemList from "@/config/aside.js";

export default {
  name: "Aside",
  data() {
    return {
      currentAsideIndex: "1",
      menu: asideItemList
    };
  },
  mounted() {
    // adjust currentAsideIndex
    asideItemList.map(item => {
      if (item.route === window.location.pathname) {
        this.currentAsideIndex = item.index;
      }
    });
  },
  methods: {
  }
};
</script>
<template>
  <el-aside width='auto'>
    <el-menu
      :default-active="this.currentAsideIndex"
      class="el-menu-vertical-demo"
      :router="true"
      :collapse="!this.isAsideMenuOpen"
      @select="handleSelect"
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
import { mapState, mapMutations } from 'vuex'

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
    const navArr = window.location.pathname.split('/')
    asideItemList.map(item => {
      if (item.route.slice(1) === navArr[1]) {
        this.currentAsideIndex = item.index;
        if (navArr[2] === 'addService') {
          this.changeAsideOpenStatus(false)
        }
      }
    });
  },
  computed: {
    ...mapState([ 'isAsideMenuOpen' ])
  },
  methods: {
    ...mapMutations([ 'changeAsideOpenStatus' ]),
    handleSelect() {
      this.changeAsideOpenStatus(true)
    }
  }
};
</script>


<style>
/* add for good animation */
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

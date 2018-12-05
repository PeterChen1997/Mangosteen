<template>
  <el-footer class="footer">
    <div class="desc">
      <p>Copyright © Peter Chen 2018
        <!-- <br>Developed by <a target="_blank" rel="noopener noreferrer" href="https://github.com/PeterChen1997">PeterChen</a> |
      <iframe
        class="git-iframe"
        title="git-star"
        id="iframe"
        frameborder="0"
        scrolling="0"
        width="80px"
        height="20px"
        src="https://ghbtns.com/github-btn.html?user=PeterChen1997&repo=Mangosteen&type=star&count=true"
      ></iframe> -->
      </p>

    </div>
  </el-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer {
  color: #898989;
  display: flex;
  justify-content: center;
  align-items: center;
}

.git-iframe {
    margin-bottom: -5px;
}

.desc {
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

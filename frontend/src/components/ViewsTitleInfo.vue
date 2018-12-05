<template>
    <div class="info">
      <h2>{{this.title}}</h2>
      <p>{{this.detail}}</p>
    </div>
</template>

<script>
export default {
  name: "viewsTitleInfo",
  props: ["title", "detail"],
};
</script>

<style>
.info h2 {
  font-weight: 400;
  color: #1f2f3d;
  font-size: 28px;
  margin: 0;
}

.info p {
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
</style>

<template>
  <div class="page-home">
    <div class="left"></div>
    <div class="right">
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.page-home {
  display: flex;
  align-items: center;
  .left {
    width: 500px;
    height: 10000px;
    background-color: aqua;
  }
  .right {
    flex: 1;
  }
}
</style>

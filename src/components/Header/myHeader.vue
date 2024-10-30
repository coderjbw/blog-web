<template>
  <div class="page-header">
    <div class="page-header-contain">
      <div>首页</div>
      <div>个人介绍</div>
      <div>文章</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.page-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  .page-header-contain {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      margin-right: 10px;
      cursor: pointer;
    }
  }
}
</style>

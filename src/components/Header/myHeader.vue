<template>
  <div class="page-header">
    <div class="page-header-contain">
      <div @click="goToHome">首页</div>
      <div @click="goToArticle">个人介绍</div>
      <div @click="goToArticle">文章</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
// const route = useRoute()

function goToHome() {
  router.push('/home')
}

function goToArticle() {
  router.push('/article')
}
</script>

<style lang="less" scoped>
.page-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 500px;
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

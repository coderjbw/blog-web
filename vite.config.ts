import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
          // 这部分可以添加全局的Less变量、函数等
          // additionalData: `@import "@/styles/variables.less";`,
          // 根据你的实际需求修改路径
      }
    }
  }
})

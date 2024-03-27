import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7100', // 需要代理的目标地址
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''), // 将请求路径中的 '/api' 替换为空字符串
      },
    },
  },
})

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    host : true,
    historyApiFallback : true
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://lovecar.autos',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

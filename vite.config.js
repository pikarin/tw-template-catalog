import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/theme-catalog/',
  build: {
    outDir: 'docs',
  },
  plugins: [vue()]
})

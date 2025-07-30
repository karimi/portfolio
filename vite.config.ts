import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // base: '/portfolio/', //For serving from karimi.github.io/portfolio
  base: '/', // Use root for custom domain
  plugins: [vue()],
})

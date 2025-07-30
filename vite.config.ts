import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // base: '/portfolio/', //Needed if directly serving from githib pages without custom domain
  plugins: [vue()],
})

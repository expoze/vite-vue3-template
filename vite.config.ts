import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import resolve from '@rollup/plugin-node-resolve'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    // resolve({
    //   extensions: ['.js', '.ts'],
    // }),
  ],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@src':path.resolve(__dirname, './src/'),
      pages:path.resolve(__dirname, './src/pages'),
      components:path.resolve(__dirname, './src/components'),
      configs:path.resolve(__dirname, './src/config/')
    }
  },
  envDir:'./envDir',
  server:{
    proxy:{
      '/shop':{
        target:'http://apishop.soft.taoyuer.com',//'https://kaimen.taoyuer.com',
        changeOrigin: true,
      }
    }
  },
  
})


/// <reference types="vite-ssg" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { includedRoutes, writeSitemap } from './ssg.config'

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2019',
  },
  // vite-ssg: tiap route jadi <route>/index.html berisi HTML yang sudah ter-render
  ssgOptions: {
    dirStyle: 'nested',
    includedRoutes: (paths) => includedRoutes(paths, __dirname),
    onFinished: () => writeSitemap(__dirname, path.resolve(__dirname, 'dist')),
  },
})

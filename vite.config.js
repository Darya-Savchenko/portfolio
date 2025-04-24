import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',
  plugins: [
    react()
  ],
  build: {
    // Мінімізувати код через esbuild
    minify: 'esbuild',

    // Розбиття великих бандлів
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
        // Хешовані імена файлів
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(css)$/.test(name ?? '')) {
            return 'assets/css/[name].[hash].[ext]'
          }
          if (/\.(png|jpe?g|webp|avif|svg)$/.test(name ?? '')) {
            return 'assets/images/[name].[hash].[ext]'
          }
          return 'assets/[name].[hash].[ext]'
        }
      }
    },

    // Виводити розміри бандлів після збірки
    reportCompressedSize: true
  }
})

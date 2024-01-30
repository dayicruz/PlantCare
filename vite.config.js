import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://trefle.io/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      // This creates an alias for the 'src' directory as '@/'
      '@components': '/src/components',
      '@assets': '/src/assets',
    },
  },
})

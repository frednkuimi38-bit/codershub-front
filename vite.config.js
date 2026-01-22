import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimisation du build
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            if (id.includes('react-router')) {
              return 'router';
            }
            if (id.includes('framer-motion')) {
              return 'animation';
            }
            if (id.includes('lucide')) {
              return 'icons';
            }
            if (id.includes('helmet') || id.includes('intersection')) {
              return 'utils';
            }
          }
        }
      }
    },
    // Activer la compression gzip
    chunkSizeWarningLimit: 1000,
    // Minification agressive
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Optimisation du développement
  server: {
    port: 3000,
    host: true,
    open: false
  },
  // Préchargement des dépendances
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion']
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': { // Ruta que quieres interceptar
        target: 'http://localhost:8080', // URL del backend
        changeOrigin: true, // Necesario para CORS
        rewrite: (path) => path.replace(/^\/api/, ''), // Opcional: Elimina el prefijo /api
      },
    },
  },
});

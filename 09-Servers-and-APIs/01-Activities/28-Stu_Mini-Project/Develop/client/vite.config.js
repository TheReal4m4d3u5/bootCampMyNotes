import { defineConfig } from 'vite';

// https://vitejs.dev/config/

//how the client talk to the server 
export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (['react', 'react-dom', 'react-router-dom'].some(pkg => id.includes(`/node_modules/${pkg}/`))) {
            return 'vendor';
          }
          if (['@reduxjs/toolkit', 'react-redux', 'redux-persist'].some(pkg => id.includes(`/node_modules/${pkg}/`))) {
            return 'redux';
          }
          if (['@mui/material', '@emotion/react', '@emotion/styled', 'react-bootstrap', 'bootstrap'].some(pkg => id.includes(`/node_modules/${pkg}/`))) {
            return 'ui';
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  define: {
    'process.env': {},
  },
});

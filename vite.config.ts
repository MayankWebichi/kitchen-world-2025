import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/kitchen-design-/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

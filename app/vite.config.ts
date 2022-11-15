import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // @xxx Vite issue https://github.com/btd/rollup-plugin-visualizer/issues/124#issuecomment-1221295477
  plugins: [react()],
  server: { port: 8080 },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: 'src/renderer',
  plugins: [react()],
  resolve: {
    alias: {
      'shared': path.resolve(__dirname, '../../../packages/shared/src')
    }
  },
  build: {
    outDir: '../../../dist/desktop/renderer'
  },
  server: {
    port: 4000
  }
});

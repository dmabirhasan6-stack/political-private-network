import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: '/political-private-network/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'next/link': path.resolve(__dirname, './src/lib/next-link.tsx'),
      'next/navigation': path.resolve(__dirname, './src/lib/next-navigation.ts'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});

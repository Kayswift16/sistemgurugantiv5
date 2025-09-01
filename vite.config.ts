import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Explicitly set the entry point for the build to index.html in the root.
  // This overrides any implicit behavior from the build environment that
  // might be incorrectly trying to use index.tsx as the entry point.
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  }
});

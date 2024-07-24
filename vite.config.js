
// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path';


export default defineConfig({
  // base: '/point-shooter/', // set the base path
  // other configurations
  clearScreen: false,
  envPrefix: ['VITE_', 'TAURI_PLATFORM', 'TAURI_ARCH', 'TAURI_FAMILY', 'TAURI_PLATFORM_VERSION', 'TAURI_PLATFORM_TYPE', 'TAURI_DEBUG'],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/assets'),
    },
    extensions: ['.js', '.ts'],
  },
  
  esbuild: {
    loader: 'js', // using 'js' loader for JavaScript
    include: [
      // include all .js, .ts files
      'src/**/*.js',

      // 'src/**/*.ts',
    ],
  },
  build: {
        // Tauri uses Chromium on Windows and WebKit on macOS and Linux
    target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
        // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
        // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),

      }
    }
  },
  server: {
    port: 5173,
    strictPort: true,
  },
});

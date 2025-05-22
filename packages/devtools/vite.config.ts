import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import Tauri from '@stacksjs/vite-plugin-tauri'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    Tauri({
      // System tray configuration
      systemTray: {
        enabled: true, // Enable system tray support
        menuOnLeftClick: true, // Show menu on left click (default: true)
        useAppIcon: true // Use the app icon as the tray icon (default: true)
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})

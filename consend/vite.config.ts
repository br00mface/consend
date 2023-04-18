import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import checker from 'vite-plugin-checker'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    //checker({typescript: true}),
    tsconfigPaths(),
    vue(),     
    VitePWA({
    mode: "development",
    base: "/",
    srcDir: "src",
    filename: "sw.ts",
    includeAssets: ["/favicon.png"],
    strategies: "injectManifest",
    registerType: 'autoUpdate',
    manifest: {
      name: "Test Project",
      short_name: "Test",
      theme_color: "#ffffff",
      start_url: "/",
      display: "standalone",
      background_color: "#ffffff",
      icons: [
        {
          src: "icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "icon-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
  }),
],
});

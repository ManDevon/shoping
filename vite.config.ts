import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/store": path.resolve(__dirname, "./src/store"),
      "@/router": path.resolve(__dirname, "./src/router"),
      "@/request": path.resolve(__dirname, "./src/reqeust"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/interface": path.resolve(__dirname, "./src/interface"),
    },
  },
});

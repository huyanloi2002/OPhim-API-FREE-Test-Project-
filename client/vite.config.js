import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        secure: true,
      },
      "/youtube": {
        target: "https://www.youtube.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/youtube/, ""),
      },
    },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@public": path.resolve(__dirname, "./public"),
      "@global": path.resolve(__dirname, "./src/global"),
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@providers": path.resolve(__dirname, "./src/providers"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
});

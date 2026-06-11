import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    host: true,
    port: mode === "fitness" ? 5174 : 5173
  },
  build: {
    outDir: mode === "fitness" ? "dist/fitness" : "dist/tech"
  }
}));

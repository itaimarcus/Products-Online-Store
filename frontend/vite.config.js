import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //If someone asks me (Vite) for a path starting with /api, forward that request to Express on 5000, then send Express’s answer back
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
});

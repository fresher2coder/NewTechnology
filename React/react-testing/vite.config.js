/// vitest.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables using global test methods like `test` and `expect`
    environment: "jsdom", // Simulates a browser environment
    setupFiles: "./setupTests.js", // Path to test setup file (optional)
  },
});

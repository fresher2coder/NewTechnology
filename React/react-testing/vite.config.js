import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global test functions like `test`, `describe`
    environment: "jsdom", // Simulates browser environment
    setupFiles: "./setupTests.js", // Add this line
  },
});

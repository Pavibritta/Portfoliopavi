import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfoliopavi/", // Set this to your GitHub repo name
  plugins: [react()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Replace with your GitHub repo name if deploying to GitHub Pages
const repoName = "Tech-Path-Navigator";

export default defineConfig(({ mode }) => ({
  base: `/${repoName}/`,
  server: {
    host: "localhost",
    port: 8080,
  },
  plugins: [
    react(),
    ...(mode === "development" ? [componentTagger()] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
}));








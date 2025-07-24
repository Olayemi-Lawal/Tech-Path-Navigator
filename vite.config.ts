import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// ✅ Only the repo name is needed here
const repoName = 'Tech-Path-Navigator';

export default defineConfig(({ mode }) => ({
  base: `/${repoName}/`, // ✅ Correct use of the variable
  server: {
    host: "localhost",
    port: 8080,
  },
  plugins: [
    react(),
    ...(mode === 'development' ? [componentTagger()] : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
}));






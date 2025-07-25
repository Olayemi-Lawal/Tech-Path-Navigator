import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// ✅ ONLY slashes around repoName here
const repoName = 'Tech-Path-Navigator'

export default defineConfig({
  base: `/${repoName}/`, // GitHub Pages needs this
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})








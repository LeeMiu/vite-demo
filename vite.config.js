import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({targets: ['defaults', 'not IE 11']})
  ],
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  server: {
    open: 'index.html'
  }
})

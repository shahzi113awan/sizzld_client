import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
 
  build: {
    outDir: "../server/dist",
    
    
  },
  
 

  define: {global: 'window'}
});

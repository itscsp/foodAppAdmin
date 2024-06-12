import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
dotenv.config(); // load env vars from .env


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __BASE_URL__: `"${process.env.BASE_URL}"`,
  },
})

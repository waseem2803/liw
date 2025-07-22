import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Set the base path for the application
  server: {
    host: '0.0.0.0',   // Bind to all interfaces (LAN)
    port: 5173,  
           // Or any port you want
  }

})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // Bind to all interfaces (LAN)
    port: 5173,  
    base: '/liw_page/'       // Or any port you want
  }

})

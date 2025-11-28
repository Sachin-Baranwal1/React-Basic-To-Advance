import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
   server: {
    host: true,
    allowedHosts: [
      '.ngrok-free.dev', // Allows any ngrok-free.dev subdomain
      '.ngrok.io'        // For legacy ngrok domains
    ]
  }
})



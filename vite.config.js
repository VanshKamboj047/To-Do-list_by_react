import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/1-todo-app-version-1/' // 👈 Use your GitHub repo name here
})

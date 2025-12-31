import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  console.log('VITE_CI:', env.VITE_CI)
  return {
    plugins: [react()],
    server: {
      open: !env.VITE_CI,
    },
  }
})

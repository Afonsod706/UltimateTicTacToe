import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/UltimateTicTacToe/', // Nome exato do repositório, com maiúsculas e minúsculas
  plugins: [react()],
})


import { defineConfig } from 'vite'
import * as reactPlugin from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Resuelve la función internamente sin romper VS Code ni Vite
const react = reactPlugin.default || reactPlugin

export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    resolve: {
        alias: {
        '@': path.resolve(__dirname, './src'),
        },
    },
})
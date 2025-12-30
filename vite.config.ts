import removeConsole from 'vite-plugin-remove-console'
import webfontDownload from 'vite-plugin-webfont-dl'
import tsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import * as dotenv from 'dotenv'

dotenv.config({ path: `${__dirname}/.env` })

export default defineConfig({
    plugins: [react(), tsconfigPaths(), removeConsole(), webfontDownload()],
    build: {
        target: 'esNext',
        outDir: 'landing',
        assetsDir: 'landing-assets',
        chunkSizeWarningLimit: 1000000
        // minify: 'terser'
    },
    define: {
        __DOMAIN_BACKEND__: JSON.stringify(process.env.DOMAIN_BACKEND || 'example.com').trim(),
        __NODE_ENV__: JSON.stringify(process.env.NODE_ENV).trim(),
        __DOMAIN_OVERRIDE__: JSON.stringify(process.env.DOMAIN_OVERRIDE || '0').trim()
    },
    server: {
        host: '0.0.0.0',
        port: 80,
        cors: false,
        strictPort: true,
        allowedHosts: true
    },
    resolve: {
        alias: [
            {
                find: '@entities',
                replacement: fileURLToPath(new URL('./src/entities', import.meta.url))
            },
            {
                find: '@features',
                replacement: fileURLToPath(new URL('./src/features', import.meta.url))
            },
            { find: '@pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
            {
                find: '@widgets',
                replacement: fileURLToPath(new URL('./src/widgets', import.meta.url))
            },
            { find: '@public', replacement: fileURLToPath(new URL('./public', import.meta.url)) },
            {
                find: '@shared',
                replacement: fileURLToPath(new URL('./src/shared', import.meta.url))
            }
        ]
    }
})

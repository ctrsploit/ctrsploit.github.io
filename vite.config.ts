import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import Markdown from 'unplugin-vue-markdown/vite'
import {full as emoji} from "markdown-it-emoji";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue({
            include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
        }),
        Markdown({
            markdownItSetup(md) {
                md.use(emoji)
            }
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})

import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import viteCompression from "vite-plugin-compression";
import VueSetupExtend from "vite-plugin-vue-setup-extend";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src")
        }
    },
    plugins: [
        vue(),
        createHtmlPlugin({
            inject: {
                data: {
                    title: "dev-tools"
                }
            }
        }),
        // * 使用 svg 图标
        createSvgIconsPlugin({
            iconDirs: [resolve(process.cwd(), "src/assets/icons")],
            symbolId: "icon-[dir]-[name]"
        }),
        // * EsLint 报错信息显示在浏览器界面上
        eslintPlugin(),
        // * name 可以写在 script 标签上
        VueSetupExtend(),
        // * gzip compress
        viteCompression({
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: "gzip",
            ext: ".gz"
        }),
    ]
})

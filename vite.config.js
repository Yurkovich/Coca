import { defineConfig } from "vite";

export default  defineConfig ({
    root: "./src",
    sever: {
        port: 3004,
        open: true
    },
    build: {
        outDir: "../dist"
    }
})
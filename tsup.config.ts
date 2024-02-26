import {defineConfig} from "tsup"

export default defineConfig({
    bundle: true,
    clean: true,
    dts: true,
    entryPoints: [
        "src/index.ts"
    ]
})
import { defineConfig } from 'tsup'

export default defineConfig({
  bundle: true,
  clean: true,
  minify: true,
  dts: true,
  target: ['es2021'],
  format: ['cjs', 'esm'],
  entryPoints: ['src/index.ts'],
})

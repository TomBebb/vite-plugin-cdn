import { defineConfig } from 'vite'
import cdn from 'vite-plugin-cdn'

export default defineConfig({
  plugins: [
    cdn(),
  ],
  build: {
    target: "esnext",
    rollupOptions: {
      external: ['loadsh'],
    },
  },
  resolve: {
    // alias: {
    //   lodash: 'lodash',
    // },
  },
  // optimizeDeps: {
  //   exclude: ['lodash'],
  // },
})

import { defineConfig } from 'tsup'

export default defineConfig({
  format: 'esm',
  minify: true,
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
})

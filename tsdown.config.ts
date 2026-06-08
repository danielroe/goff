import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/cli.ts'],
  dts: { oxc: true },
  exports: { devExports: true },
})

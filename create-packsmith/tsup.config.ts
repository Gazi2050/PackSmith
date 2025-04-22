import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/**/*.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    shims: true,
    clean: true,
    skipNodeModulesBundle: true,
    target: 'node18'
});

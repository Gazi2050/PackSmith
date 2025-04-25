import { defineConfig } from "vitest/config";
import tsconfigPaths from 'vite-tsconfig-paths'
export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        environment: "node",
        include: ["test/**/*.test.ts"],
        coverage: {
            provider: "v8",
            reportsDirectory: "coverage",
            reporter: ["json", "lcov", "text", "clover"],
        },
        globals: true,
        passWithNoTests: false,
        watch: false,
    },
});
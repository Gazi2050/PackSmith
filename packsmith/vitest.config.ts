import { defineConfig } from "vitest/config";

export default defineConfig({
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
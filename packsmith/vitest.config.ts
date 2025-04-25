import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        environment: "node",
        include: ["test/**/*.test.ts"],
        globals: true,
        watch: false,
        passWithNoTests: false,
        coverage: {
            provider: "v8",
            reporter: ["json", "lcov", "text", "clover"],
            reportsDirectory: "./coverage",
        },
    },
});

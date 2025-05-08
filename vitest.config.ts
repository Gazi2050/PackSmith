import type { ViteUserConfig } from "vitest/config";

export default async function (): Promise<ViteUserConfig> {
    const tsconfigPaths = (await import("vite-tsconfig-paths")).default;

    return {
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
    };
}

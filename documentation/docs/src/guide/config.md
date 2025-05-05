# ⚙️ Configuration Overview

PackSmith provides a **preconfigured, production-ready setup** so you can hit the ground running without spending time on boilerplate configurations. It includes all the tools you need for building modern JavaScript and TypeScript packages with minimal effort:

* ✅ [**TypeScript**](#📄-tsconfig-json-–-typescript-configuration) — Type-safe JavaScript development with excellent IDE support
* ✅ [**ESLint**](#📄-eslint-config-mjs-–-eslint-configuration) — Automatic error detection and consistent code style enforcement
* ✅ [**Vitest**](#🧪-vitest-config-ts-–-test-configuration) — Lightweight and powerful testing framework, ready to go
* ✅ [**Tsup**](#📦-tsup-config-ts-–-build-configuration) — Fast, zero-config TypeScript bundler for building clean JavaScript
* ✅ [**Predefined Scripts in `package.json`**](#📄-package-json-–-project-metadata-scripts) — Built-in commands for testing, building, and linting

These tools are selected for **performance**, **simplicity**, and **modern standards**. All the configuration files are included and version-controlled, ensuring that your whole team works in the same environment, eliminating friction.

PackSmith helps you build and publish packages with:

* No extra setup
* No unnecessary dependencies
* No bloated scaffolding
* Just the essentials to ship high-quality code

## 📄 `tsconfig.json` – TypeScript Configuration

This file configures TypeScript to compile clean, modern JavaScript with strict type-checking. It includes support for Vitest and ensures compatibility with Node.js or browser-like environments.

### Default Code:

```json
{
    "compilerOptions": {
        "types": [
            "vitest"
        ],
        "target": "ESNext",
        "module": "ESNext",
        "moduleResolution": "Node",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "declaration": true,
        "outDir": "dist",
        "allowJs": true,
    },
    "include": [
        "src",
        "test"
    ]
}
```

### Customization:

* Modify `target` to `ES6` for compatibility with older environments.
* Change `moduleResolution` to `classic` for non-Node.js environments.

---

## 📄 `eslint.config.mjs` – ESLint Configuration

PackSmith uses a modern ESLint setup with flat config for automatic linting and consistent coding practices. It includes TypeScript support and can be extended for additional integrations like Prettier.

### Default Code:

```js
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        ignores: ["dist/**"],
        plugins: { js },
        extends: ["js/recommended"],
    },
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: { globals: globals.browser },
    },
    tseslint.configs.recommended,
]);
```

### Customization:

* Modify `globals` to `globals.node` for Node.js environments.
* Replace `tseslint.configs.recommended` with `tseslint.configs.strict` for stricter linting.

---

## 🧪 `vitest.config.ts` – Test Configuration

Vitest is preconfigured for efficient TypeScript testing with a focus on Node.js environments. It supports global test functions and coverage reporting, ensuring fast and simple testing.

### Default Code:

```ts
import type { ViteUserConfig } from "vitest/config";

export default async function (): Promise<ViteUserConfig> {

    return {
        plugins: [],
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
```

### Customization:

* Set `test.environment: "jsdom"` for browser-like testing.
* Modify `include` to include additional test file patterns, such as `.spec.ts`.

---

## 📦 `tsup.config.ts` – Build Configuration

Tsup handles bundling, minification, and TypeScript declaration generation for your project. The default configuration ensures optimized builds with minimal effort and fast performance.

### Default Code:

```ts
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
```

### Customization:

* Modify `format` to generate only the necessary output formats, such as just `esm`.
* Customize `minify` and `clean` based on the project needs (e.g., disable `minify` for debugging).

---

## 📄 `package.json` – Project Metadata & Scripts

The `package.json` contains essential project metadata and predefined scripts for common tasks like building, testing, and linting. It simplifies development by integrating core tools and automating workflows.

### Default Code:

```json
{
    "name": "my-awesome-package",
    "version": "0.0.1",
    "main": "dist/index.js",
    "types": "dist/index.d.ts",
    "scripts": {
        "build": "tsup",
        "lint": "eslint . --ext .ts --ignore-pattern dist/",
        "test": "vitest"
    },
    "dependencies": {
        "packsmith": "^0.0.4"
    },
    "devDependencies": {
        "@eslint/js": "^9.26.0",
        "eslint": "^9.26.0",
        "globals": "^16.0.0",
        "ts-node": "^10.9.2",
        "tsup": "^8.4.0",
        "typescript": "^5.8.3",
        "typescript-eslint": "^8.31.1",
        "vitest": "^3.1.2"
    }
}
```

### Customization:

* Modify `name` and `version` for your specific project.
* Add or remove dependencies in `dependencies` and `devDependencies` based on your project requirements.

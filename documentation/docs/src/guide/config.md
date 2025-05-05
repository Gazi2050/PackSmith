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
    "types": [                // Include global types for the Vitest testing framework
      "vitest"
    ],
    "target": "ESNext",       // Use the latest ECMAScript version for output
    "module": "ESNext",       // Use native ECMAScript modules
    "moduleResolution": "Node", // Resolve modules using Node.js logic
    "strict": true,           // Enable all strict type-checking options
    "esModuleInterop": true,  // Enable compatibility with CommonJS-style default imports
    "skipLibCheck": true,     // Skip type checking of all declaration files (*.d.ts)
    "declaration": true,      // Generate .d.ts declaration files
    "outDir": "dist",         // Redirect output structure to the "dist" directory
    "allowJs": true,           // Allow JavaScript files to be compiled
  },
  "include": [
    "src",                    // Include the "src" folder (main source files)
    "test"                    // Include the "test" folder (unit tests)
  ]
}
```

### Customization:

* Modify `target` to `ES6` for compatibility with older environments.
* Change `moduleResolution` to `classic` for non-Node.js environments.

## 📄 `eslint.config.mjs` – ESLint Configuration

PackSmith uses a modern ESLint setup with flat config for automatic linting and consistent coding practices. It includes TypeScript support and can be extended for additional integrations like Prettier.

### Default Code:

```js
import js from "@eslint/js";                    // Import ESLint's base JavaScript rules plugin
import globals from "globals";                  // Import a list of predefined global variables
import tseslint from "typescript-eslint";       // Import TypeScript ESLint plugin/config
import { defineConfig } from "eslint/config";   // Import defineConfig helper for ESLint configuration

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts}"],        // Apply this config to JS/TS files
        ignores: ["dist/**"],                   // Ignore compiled output directory
        plugins: { js },                        // Use ESLint's JavaScript rules plugin
        extends: ["js/recommended"],            // Extend recommended JavaScript linting rules
    },
    {
        files: ["**/*.{js,mjs,cjs,ts}"],        // Again, target JS/TS files
        languageOptions: { globals: globals.browser }, // Set global variables to browser environment
    },
    tseslint.configs.recommended,               // Add recommended rules for TypeScript
]);
```

### Customization:

* Modify `globals` to `globals.node` for Node.js environments.
* Replace `tseslint.configs.recommended` with `tseslint.configs.strict` for stricter linting.

## 🧪 `vitest.config.ts` – Test Configuration

Vitest is preconfigured for efficient TypeScript testing with a focus on Node.js environments. It supports global test functions and coverage reporting, ensuring fast and simple testing.

### Default Code:

```ts
import type { ViteUserConfig } from "vitest/config"; // Import the type for Vite's user config used by Vitest

export default async function (): Promise<ViteUserConfig> {

    return {
        plugins: [], // No Vite plugins are added for this config
        test: {
            environment: "node",               // Use Node.js environment for testing
            include: ["test/**/*.test.ts"],    // Include test files matching this glob pattern
            globals: true,                     // Enable global test functions (e.g., describe, it)
            watch: false,                      // Disable watching files for changes
            passWithNoTests: false,            // Fail if no tests are found
            coverage: {
                provider: "v8",                // Use V8 engine for coverage collection
                reporter: ["json", "lcov", "text", "clover"], // Output coverage in multiple formats
                reportsDirectory: "./coverage", // Output directory for coverage reports
            },
        },
    };
}
```

### Customization:

* Set `test.environment: "jsdom"` for browser-like testing.
* Modify `include` to include additional test file patterns, such as `.spec.ts`.

## 📦 `tsup.config.ts` – Build Configuration

Tsup handles bundling, minification, and TypeScript declaration generation for your project. The default configuration ensures optimized builds with minimal effort and fast performance.

### Default Code:

```ts
import { defineConfig } from 'tsup'; // Import the config helper from tsup

export default defineConfig({
    entry: ['src/**/*.ts'],             // Entry point(s): all TypeScript files in src/
    format: ['esm', 'cjs'],             // Output both ES module and CommonJS formats
    dts: true,                          // Generate TypeScript declaration files (.d.ts)
    shims: true,                        // Include shims for Node.js globals like __dirname
    clean: true,                        // Clean the output directory before building
    skipNodeModulesBundle: true,        // Exclude node_modules from bundling
    target: 'node18'                    // Set the build target environment to Node.js v18
});

```

### Customization:

* Modify `format` to generate only the necessary output formats, such as just `esm`.
* Customize `minify` and `clean` based on the project needs (e.g., disable `minify` for debugging).

## 📄 `package.json` – Project Metadata & Scripts

The `package.json` contains essential project metadata and predefined scripts for common tasks like building, testing, and linting. It simplifies development by integrating core tools and automating workflows.

### Default Code:

```json
{
    "name": "my-package",                    // Name of your package
    "version": "0.0.1",                      // Initial version of your package
    "main": "dist/index.js",                 // Main entry point for CommonJS consumers
    "types": "dist/index.d.ts",              // Path to TypeScript declaration file

    "scripts": {
        "build": "tsup",                     // Build command using tsup
        "lint": "eslint . --ext .ts --ignore-pattern dist/", // Lint all .ts files, ignore dist/
        "test": "vitest"                     // Run tests using Vitest
    },

    "dependencies": {
        "packsmith": "^0.0.4"                // Runtime dependency for your package
    },

    "devDependencies": {
        "@eslint/js": "^9.26.0",             // ESLint's built-in JS config plugin
        "eslint": "^9.26.0",                 // Core ESLint engine
        "globals": "^16.0.0",                // List of global variables for different environments
        "ts-node": "^10.9.2",                // Run TypeScript directly in Node
        "tsup": "^8.4.0",                    // Zero-config TypeScript bundler
        "typescript": "^5.8.3",              // TypeScript language and compiler
        "typescript-eslint": "^8.31.1",      // ESLint plugin for TypeScript support
        "vitest": "^3.1.3"                   // Unit testing framework
    }
}
```

### Customization:

* Modify `name`,`version` and `scripts` for your specific project.
* Add or remove dependencies in `dependencies` and `devDependencies` based on your project requirements.

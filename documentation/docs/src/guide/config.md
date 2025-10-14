# ⚙️ Configuration Overview

**PackSmith** is a preconfigured toolkit for building modern JavaScript/TypeScript packages. It includes TypeScript, ESLint, Vitest, and Tsup—all wired together so you can start building immediately with zero setup.

| File                                               | Purpose                                                |
| -------------------------------------------------- | ------------------------------------------------------ |
| [`tsconfig.json`](#📄-tsconfig-json-—-typescript)      | TypeScript config for strict typing and fast builds    |
| [`eslint.config.mjs`](#📄-eslint-config-mjs-—-eslint)   | ESLint rules using flat config with TypeScript support |
| [`vitest.config.ts`](#🧪-vitest-config-ts-—-testing)    | Vitest setup for fast Node-based tests with coverage   |
| [`tsup.config.ts`](#📦-tsup-config-ts-—-build)          | Bundler configuration with ESM, CJS, and declarations  |
| [`package.json`](#📄-package-json-—-scripts-metadata) | Project metadata and preconfigured scripts             |

This setup focuses on:

* ✅ Speed and simplicity
* ✅ Strong defaults and clean output
* ✅ No clutter or overengineering

## 📄 `tsconfig.json` — TypeScript

TypeScript is preconfigured with strict settings, Node.js compatibility, and test support via Vitest. Build reliable and type-safe code easily.

```json
{
  "compilerOptions": {
    "types": ["vitest"],
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "declaration": true,
    "outDir": "dist",
    "allowJs": true
  },
  "include": ["src", "test"]
}
```

**🔧 Customization Tips:**

* For older environments, change `"target"` to `"ES6"`.
* Remove `"allowJs"` if you don't want to compile `.js` files.

👉 [Read more on TypeScript config](https://www.typescriptlang.org/tsconfig)

## 📄 `eslint.config.mjs` — ESLint

Modern ESLint with flat config and TypeScript support. Enforces consistent code style while catching potential issues early.

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

**🔧 Customization Tips:**

* Change `globals.browser` to `globals.node` for Node.js projects.
* Swap `tseslint.configs.recommended` with `tseslint.configs.strict` for stricter rules.

👉 [ESLint Flat Config Guide](https://eslint.org/docs/latest/use/configure/configuration-files-new)

## 🧪 `vitest.config.ts` — Testing

Vitest is set up for fast and simple testing in a Node environment. Includes global test functions and built-in coverage reporting.

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
        reportsDirectory: "./coverage"
      }
    }
  };
}
```

**🔧 Customization Tips:**

* Change `environment` to `"jsdom"` for browser-like test environments.
* Add `.spec.ts` to `include` if you use that naming convention.

👉 [Vitest Configuration Docs](https://vitest.dev/config/)

## 📦 `tsup.config.ts` — Build

Tsup builds your code into ESM and CJS formats, generates `.d.ts` files, and ensures compatibility with Node.js—all with minimal config.

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

**🔧 Customization Tips:**

* Use `format: ['esm']` if you don't need CommonJS output.
* Set `minify: true` for smaller production builds.

👉 [Tsup Configuration Guide](https://tsup.egoist.dev/#configuration)

## 📄 `package.json` — Scripts & Metadata

Project metadata with scripts for build, lint, and test. Includes only what you need—nothing more.

```json
{
  "name": "my-package",
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
    "vitest": "^3.1.3"
  }
}
```

**🔧 Customization Tips:**

* Rename your package and set `author`, `license`, etc.
* Add custom scripts for publish, clean, or format commands.

👉 [npm package.json reference](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)

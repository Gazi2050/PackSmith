# ❓ What is PackSmith

**PackSmith** is a minimal, opinionated library for creating clean, reusable JavaScript/TypeScript packages — without framework lock-in or repetitive setup.

It’s designed specifically for developers who want to publish framework-agnostic libraries: utilities, helpers, core logic modules, or SDKs that should work across any JavaScript environment — frontend or backend.

## Why Do You Need PackSmith?

Creating a reusable JS/TS package **sounds simple**, but in practice, it often turns into a mess of setup work. You don’t want to spend time configuring TypeScript, linters, test runners, and bundlers every time you start a new library — you just want to write your code.

**PackSmith removes that setup burden.**

With a single command:

```bash
npx create-packsmith <project-name>
```

## How the Ecosystem Handles Package Creation

While the JavaScript ecosystem provides powerful tools, they are typically built for **apps**, not reusable packages. Frameworks like **Vue**, **Svelte**, and **React** offer CLIs to scaffold projects — but only **within their own ecosystem**.

These tools work great for building apps and components tied to a specific framework, but **they’re not designed for standalone libraries or utilities** that are framework-agnostic.

Here’s how each one works:

| Framework  | CLI Command                                         | Ideal For                                     |
| ---------- | --------------------------------------------------- | --------------------------------------------- |
| **React**  | `npm create vite@latest my-app -- --template react` | React apps and React-specific packages       |
| **Vue**    | `npm create vue@latest`                             | Vue apps and Vue-specific packages  |
| **Svelte** | `npx sv create`                                     | Svelte apps and Svelte-specific packages         |


But what if you're building something that works **outside** of a specific framework — like a shared utility, core module, or cross-platform tool? These ecosystem-specific tools won’t help you. They don't offer the structure or setup needed for creating a **framework-agnostic package**.

## Non-Ecosystem Package Creation Today

When building a **framework-agnostic** library, like:

* **Moment.js** (date manipulation)
* **bcrypt** (encryption)
* **Axios** (HTTP requests)

You typically start from scratch:

* Set up `package.json` manually
* Install TypeScript, ESLint, testing tools (e.g., `vitest`, `jest`)
* Configure bundlers like `tsup` or `rollup`
* Write dev/test/build scripts
* Organize your folder structure (often redoing it from previous projects)
* Reinstall utility libraries like `lodash` for common helpers

This process is **repetitive**, **error-prone**, and time-consuming, especially for smaller utilities that don’t need all the overhead.

## The Core Problem

There’s **no standard, minimal setup** for framework-agnostic packages.

You're stuck redoing the same manual steps or scavenging configs from old repos. Even worse, you end up with inconsistencies between projects — different setups, missing tools, unclear structures.

You spend time setting up instead of shipping.

## How PackSmith Solves It
**PackSmith** is designed to eliminate the repetitive setup process and streamline package creation.

With a single command, you get:

- ✅ A clean, organized folder structure
- ✅ Preconfigured tools: TypeScript, ESLint, Vitest, and Tsup
- ✅ Ready-to-use scripts for building, testing, and linting
- ✅ A `src/` directory prepared for your code
- ✅ A `test/` directory for isolated, easy-to-manage tests
- ✅ Centralized utility functions (no need for external dependencies like `lodash` or `date-fns`)

**PackSmith** provides a **minimal**, **production-ready**, and **framework-agnostic** foundation, designed to get you coding faster without unnecessary complexity. No framework-specific assumptions. Just a clean, reusable scaffold for any JS/TS package.

## Built-in Utilities = Less Bloat

A standout feature of **PackSmith** is its collection of built-in utility functions, which eliminates the need for extra dependencies. These utilities include:

* `Check Utilities`
* `Date Utilities`
* `String Utilities`
* `Array Utilities`
* `Number Utilities`
* `Math Utilities`

By including these core utilities, you avoid the hassle of pulling in multiple third-party micro-libraries for every small task. This results in:

* **Faster development** — no need to search for and install helpers
* **Lower dependencies** — fewer packages to manage and keep up to date
* **Better portability and compatibility** — fewer chances for version conflicts

This approach is especially valuable for published packages, where **bundle size** and **portability** are crucial for ensuring your package works seamlessly in any environment.

## Why the Folder Structure Matters

PackSmith uses a simple, intentional folder layout:

```bash
my-package/
├── .gitignore            # Git ignore rules
├── .npmignore            # Controls which files are published
├── eslint.config.mjs     # ESLint configuration
├── node_modules/         # Installed dependencies (auto-generated)
├── package-lock.json     # npm lockfile
├── package.json          # Project metadata and scripts
├── README.md             # Project documentation
├── src/                  # Source code lives here
│   └── index.ts          # Entry point of your package
├── test/                 # Unit tests
│   └── index.test.ts     # Example test with Vitest
├── dist/                 # Auto-generated build output (by Tsup)
├── tsconfig.json         # TypeScript configuration
├── tsup.config.ts        # Build configuration (Tsup)
└── vitest.config.ts      # Testing configuration

```

This layout encourages:

* **Separation of concerns** (source vs. tests vs. build output)
* **Simplicity** (nothing extra, nothing hidden)
* **Maintainability** (easy to understand across teams)

Every part is there for a reason — no fluff, no mystery files.

## Summary

**PackSmith** isn't just another framework CLI. It’s a streamlined, purpose-built tool designed to fill a gap in the ecosystem:

> **Build framework-independent, reusable packages effortlessly, with zero setup friction.**

Whether you’re crafting a public utility for npm or a core module for internal use, **PackSmith** provides a polished, ready-to-go foundation. Spend less time on configuration and more time building what matters.

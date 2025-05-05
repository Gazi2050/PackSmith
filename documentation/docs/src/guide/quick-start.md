# 🔥 Getting Started
## Installation
To create a new package using `create-packsmith`, simply run the following command in your terminal:
```bash
npx create-packsmith <project-name>
```
This will generate a fully structured project with all necessary tools pre-configured, so you can start coding right away.
### What to Expect in the CLI
```bash
npx create-packsmith my-package
🚀 Creating my-package...
📦 Installing PackSmith...
🛠 Installing dev dependencies...

✅ Project "my-package" is ready!

📂 cd my-package
📦 npm install
```
## Folder Structure
After installation, your project will be structured like this:
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
├── tsconfig.json         # TypeScript configuration
├── tsup.config.ts        # Build configuration (Tsup)
└── vitest.config.ts      # Testing configuration
```
This structure is designed to be simple, readable, and ready for immediate development with everything in place to write, test, and bundle your package.
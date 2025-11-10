
export const filesToGenerate = [
    { template: 'packageJson.ejs', output: 'package.json' },
    { template: 'tsconfig.json.ejs', output: 'tsconfig.json' },
    { template: 'tsup.config.ts.ejs', output: 'tsup.config.ts' },
    { template: 'vitest.config.ts.ejs', output: 'vitest.config.ts' },
    { template: 'eslint.config.mjs.ejs', output: 'eslint.config.mjs' },
    { template: 'README.md.ejs', output: 'README.md' },
    { template: 'npmignore.ejs', output: '.npmignore' },
    { template: 'gitignore.ejs', output: '.gitignore' },
];

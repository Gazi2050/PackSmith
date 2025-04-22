
export const filesToGenerate = [
    { template: 'packageJson.ejs', output: 'package.json' },
    { template: 'tsconfig.json.ejs', output: 'tsconfig.json' },
    { template: 'tsupConfig.ts.ejs', output: 'tsup.config.ts' },
    { template: 'vitestConfig.ts.ejs', output: 'vitest.config.ts' },
    { template: 'eslint.config.mjs.ejs', output: 'eslint.config.mjs' },
];

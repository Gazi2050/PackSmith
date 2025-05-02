#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import ejs from 'ejs';
import { execSync } from 'child_process';
import { filesToGenerate } from '@constants/filesToGenerate';

// Templates directory
const templatesDir = path.join(__dirname, 'templates');
const program = new Command();

program
    .name('create-packsmith')
    .description('Create a TypeScript utility library with PackSmith')
    .argument('<project-name>', 'Name of the project')
    .action(async (projectName: string) => {
        const projectPath = path.resolve(process.cwd(), projectName);

        if (await fs.pathExists(projectPath)) {
            console.log(chalk.red(`❌ Folder "${projectName}" already exists.`));
            process.exit(1);
        }

        console.log(chalk.blue(`🚀 Creating ${projectName}...`));

        try {
            await fs.mkdirp(path.join(projectPath, 'src'));
            await fs.mkdirp(path.join(projectPath, 'test'));

            const templateData = { projectName };

            // Dynamically generate files using the templates
            for (const { template, output } of filesToGenerate) {
                const templateContent = await fs.readFile(path.join(templatesDir, template), 'utf-8');
                const renderedContent = ejs.render(templateContent, templateData);
                await fs.writeFile(path.join(projectPath, output), renderedContent);
            }

            // Create src/index.ts using EJS template
            const srcIndexTemplate = await fs.readFile(path.join(templatesDir, 'index.ts.ejs'), 'utf-8');
            const srcIndexContent = ejs.render(srcIndexTemplate, templateData);
            await fs.writeFile(path.join(projectPath, 'src', 'index.ts'), srcIndexContent);

            // Create test/index.test.ts using EJS template
            const testIndexTemplate = await fs.readFile(path.join(templatesDir, 'index.test.ts.ejs'), 'utf-8');
            const testIndexContent = ejs.render(testIndexTemplate, templateData);
            await fs.writeFile(path.join(projectPath, 'test', 'index.test.ts'), testIndexContent);

            console.log(chalk.blue(`📦 Installing PackSmith...`));
            execSync(`npm install packsmith`, {
                cwd: projectPath,
                stdio: 'ignore'
            });

            console.log(chalk.blue(`🛠 Installing dev dependencies...`));
            execSync(
                `npm install -D typescript tsup ts-node vitest eslint typescript-eslint @eslint/js globals`,
                { cwd: projectPath, stdio: 'ignore' }
            );

            console.log(chalk.green(`\n✅ Project "${projectName}" is ready!`));
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error(chalk.red(`❌ Error: ${error.message}`));
            } else {
                console.error(chalk.red(`❌ Unknown error occurred.`));
            }
            process.exit(1);
        }

        console.log(chalk.cyan(`\n📂 cd ${projectName}`));
        console.log(chalk.cyan(`📦 npm install\n`));
    });

program.parse(process.argv);

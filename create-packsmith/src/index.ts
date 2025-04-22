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
        await fs.mkdirp(path.join(projectPath, 'src'));
        await fs.mkdirp(path.join(projectPath, 'test'));

        const templateData = {
            projectName,
        };

        // Dynamically generate files using the templates
        for (const { template, output } of filesToGenerate) {
            const templateContent = await fs.readFile(path.join(templatesDir, template), 'utf-8');
            const renderedContent = ejs.render(templateContent, templateData);
            await fs.writeFile(path.join(projectPath, output), renderedContent);
        }

        // Create src/index.ts
        const srcIndexContent = `console.log("Hello PackSmith");\n`;
        await fs.writeFile(path.join(projectPath, 'src', 'index.ts'), srcIndexContent);

        // Create test/index.test.ts with a basic console log for testing
        const testIndexContent = `console.log("Hello PackSmith-test");\n`;
        await fs.writeFile(path.join(projectPath, 'test', 'index.test.ts'), testIndexContent);

        // Install dependencies
        console.log(chalk.blue('\n📦 Installing dependencies...\n'));
        execSync(
            `npm install -D typescript tsup ts-node vitest eslint typescript-eslint @eslint/js globals`,
            { cwd: projectPath, stdio: 'inherit' }
        );

        console.log(chalk.green(`\n✅ Project "${projectName}" is ready!`));
        console.log(chalk.cyan(`\n👉 cd ${projectName}`));
        console.log(chalk.cyan(`👉 npm install\n`));
    });

program.parse(process.argv);

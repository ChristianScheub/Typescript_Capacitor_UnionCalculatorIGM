#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = process.cwd();
const srcDir = path.join(projectRoot, 'src');

// Helper function to recursively walk through directories
function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else {
      callback(filePath);
    }
  });
}

console.log('\n\x1b[36m🔍 Running Pre-Build Checks...\x1b[0m\n');

const violations = [];

// 1. FileName Check - views folder (View.tsx, ViewProps.tsx, or .css)
console.log('Checking views folder naming convention...');
const viewsDir = path.join(srcDir, 'views');
if (fs.existsSync(viewsDir)) {
  walkDir(viewsDir, (file) => {
    const fileName = path.basename(file);
    // Skip directories and allow only specific extensions
    if (
      !file.endsWith('.tsx') &&
      !file.endsWith('.css') &&
      !file.endsWith('.ts')
    ) {
      return;
    }
    // Check naming convention
    const isValid =
      fileName.endsWith('View.tsx') ||
      fileName.endsWith('ViewProps.tsx') ||
      fileName.endsWith('.css');

    if (!isValid) {
      violations.push(
        `FileName Check (views): File '${path.relative(projectRoot, file)}' does not match naming convention. ` +
          `Expected: *View.tsx, *ViewProps.tsx, or *.css`
      );
    }
  });
}

// 2. FileName Check - components folder (Container.tsx)
console.log('Checking components folder naming convention...');
const componentsDir = path.join(srcDir, 'components');
if (fs.existsSync(componentsDir)) {
  walkDir(componentsDir, (file) => {
    const fileName = path.basename(file);
    // Only check .tsx files
    if (!fileName.endsWith('.tsx')) {
      return;
    }
    // Check naming convention
    const isValid = fileName.endsWith('Container.tsx');

    if (!isValid) {
      violations.push(
        `FileName Check (components): File '${path.relative(projectRoot, file)}' does not match naming convention. ` +
          `Expected: *Container.tsx`
      );
    }
  });
}

// 3. FileName Check - ui folder (.tsx or .css)
console.log('Checking ui folder naming convention...');
const uiDir = path.join(srcDir, 'ui');
if (fs.existsSync(uiDir)) {
  walkDir(uiDir, (file) => {
    const fileName = path.basename(file);
    // Check if it's a .tsx or .css file
    const isValid = fileName.endsWith('.tsx') || fileName.endsWith('.css');

    if (!isValid) {
      violations.push(
        `FileName Check (ui): File '${path.relative(projectRoot, file)}' does not match naming convention. ` +
          `Expected: *.tsx or *.css`
      );
    }
  });
}

// 4. Console Log Check
console.log('Checking for console.log violations...');
const consoleLogViolations = [];
walkDir(srcDir, (file) => {
  if (
    file.includes(`${path.sep}scripts${path.sep}`) ||
    file.includes(`${path.sep}workers${path.sep}`) ||
    file.includes('.test.') || // Allow console.log in .test. files
    file.endsWith('logger.ts') // Allow console.log in logger.ts
  ) {
    return;
  }
  if (!file.endsWith('.ts') && !file.endsWith('.tsx')) return;
  const content = fs.readFileSync(file, 'utf8');
  if (/console\.log\(/.test(content)) {
    consoleLogViolations.push(
      `Console Log Check: Found 'console.log' in file ${path.relative(projectRoot, file)}.`
    );
  }
});

if (consoleLogViolations.length > 0) {
  violations.push(...consoleLogViolations);
}

// Output results
if (violations.length > 0) {
  console.error('\n\x1b[31m❌ Pre-Build Checks failed!\x1b[0m\n');
  violations.forEach((msg) => console.error('- ' + msg));
  console.error('\n\x1b[33mPlease fix the violations above before building.\x1b[0m\n');
  process.exit(1);
}

// 5. Run Tests
console.log('Running tests...');
try {
  execSync('npm test -- --run', { stdio: 'inherit' });
  console.log('\n\x1b[32m✅ All tests passed!\x1b[0m\n');
} catch (error) {
  console.error('\n\x1b[31m❌ Tests failed!\x1b[0m\n');
  console.error('\x1b[33mPlease fix the test failures above before building.\x1b[0m\n');
  process.exit(1);
}

console.log('\n\x1b[32m✅ All Pre-Build Checks passed!\x1b[0m\n');
process.exit(0);

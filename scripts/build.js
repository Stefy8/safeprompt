#!/usr/bin/env node

/**
 * SafePrompt Build Script
 * Copies only extension files to dist/ for Chrome Web Store submission.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const INCLUDE = [
  'manifest.json',
  'src/',
  'LICENSE',
  'PRIVACY_POLICY.md',
];

const EXCLUDE_PATTERNS = [
  'node_modules', 'tests', 'scripts', '.github', '.git',
  'package.json', 'package-lock.json', 'CONTRIBUTING.md',
  'CODE_OF_CONDUCT.md', 'SECURITY.md', 'TRADEMARK.md',
  'README.md', 'PROJECT_PLAN.md', 'COMPETITOR_ANALYSIS.md',
  '.gitignore', '.eslintrc',
];

function cleanDist() {
  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true });
  }
  fs.mkdirSync(DIST, { recursive: true });
}

function copyFile(src, dest) {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function build() {
  console.log('Building SafePrompt for Chrome Web Store...\n');

  cleanDist();

  for (const item of INCLUDE) {
    const srcPath = path.join(ROOT, item);
    const destPath = path.join(DIST, item);

    if (!fs.existsSync(srcPath)) {
      console.warn(`  SKIP: ${item} (not found)`);
      continue;
    }

    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) {
      copyDir(srcPath, destPath);
      console.log(`  COPY: ${item} (directory)`);
    } else {
      copyFile(srcPath, destPath);
      console.log(`  COPY: ${item}`);
    }
  }

  // Count files
  let count = 0;
  function countFiles(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) countFiles(path.join(dir, entry.name));
      else count++;
    }
  }
  countFiles(DIST);

  console.log(`\nBuild complete: ${count} files in dist/`);
}

build();

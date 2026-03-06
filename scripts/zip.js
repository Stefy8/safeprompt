#!/usr/bin/env node

/**
 * SafePrompt Zip Script
 * Creates a .zip file from dist/ for Chrome Web Store upload.
 * Runs build first if dist/ doesn't exist.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { createWriteStream } = require('fs');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

// Read version from manifest
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'manifest.json'), 'utf8'));
const version = manifest.version;
const zipName = `safeprompt-v${version}.zip`;
const zipPath = path.join(ROOT, zipName);

// Run build if dist/ doesn't exist
if (!fs.existsSync(DIST)) {
  console.log('dist/ not found, running build first...\n');
  execSync('node scripts/build.js', { cwd: ROOT, stdio: 'inherit' });
}

// Remove old zip if exists
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

// Create zip using system zip command
try {
  execSync(`cd "${DIST}" && zip -r "${zipPath}" .`, { stdio: 'inherit' });
  const stats = fs.statSync(zipPath);
  const sizeKB = (stats.size / 1024).toFixed(1);
  console.log(`\nCreated: ${zipName} (${sizeKB} KB)`);
  console.log('Ready for Chrome Web Store upload!');
} catch (e) {
  // Fallback: if zip command not available, use tar
  console.log('zip command not found, trying tar...');
  execSync(`cd "${DIST}" && tar -czf "${zipPath.replace('.zip', '.tar.gz')}" .`, { stdio: 'inherit' });
  console.log(`Created: ${zipName.replace('.zip', '.tar.gz')}`);
  console.log('Note: Chrome Web Store requires .zip format. Please convert or install zip.');
}

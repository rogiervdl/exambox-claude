const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
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

const root = path.join(__dirname, '..');
const vendorDir = path.join(root, 'public', 'vendor');

// Copy Monaco Editor (min folder — AMD loader + workers)
const monacoSrc = path.join(root, 'node_modules', 'monaco-editor', 'min');
const monacoDest = path.join(vendorDir, 'monaco-editor', 'min');
console.log('Kopieer Monaco Editor...');
copyDir(monacoSrc, monacoDest);

// Copy Monaco vs/base/worker (needed for web workers)
const monacoVsSrc = path.join(root, 'node_modules', 'monaco-editor', 'min-maps');
// min-maps is optional, skip if not present

// Copy JSZip
const jszipSrc = path.join(root, 'node_modules', 'jszip', 'dist', 'jszip.min.js');
const jszipDest = path.join(vendorDir, 'jszip.min.js');
console.log('Kopieer JSZip...');
fs.mkdirSync(vendorDir, { recursive: true });
fs.copyFileSync(jszipSrc, jszipDest);

console.log('Klaar! Vendor bestanden gekopieerd naar public/vendor/');

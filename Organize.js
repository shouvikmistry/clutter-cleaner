// Import required modules
import fs from 'fs';
import fsPro from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

/*
  Why do we need this setup?
  - In CommonJS (require), __dirname is available by default.
  - In ES Modules (import), __dirname is NOT available, so we must construct it manually.
  - We use import.meta.url to get the file URL of the current module, then convert it to a file path.
*/

// Get the directory name of the current module (equivalent to __dirname in CommonJS)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Helper function to check if a file should be ignored
function isIgnoredFile(file) {
  return file === 'Organize.js' || file === 'package-lock.json' || file === 'package.json' || file === 'README.md' || file === 'node_modules' || file === '.git' || file.startsWith('.');
}

// Async function to organize files by their extension
async function getFiles() {
  let files = await fsPro.readdir(__dirname);
  for (let file of files) {
    // Skip ignored files
    if (isIgnoredFile(file)) continue;

    // Get the file extension (without the dot)
    const ext = path.extname(file).slice(1);
    if (ext === '') continue; // Skip files without an extension

    // Build the absolute path for the extension directory
    const dirPath = path.join(__dirname, ext);

    // Create the directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      console.log(`Directory '${ext}' does not exist. Creating it...`);
      fs.mkdirSync(dirPath);
      console.log(`Directory '${ext}' created.`);
    }

    // Move the file into its extension directory
    const oldPath = path.join(__dirname, file);
    const newPath = path.join(dirPath, file);
    fs.renameSync(oldPath, newPath);
    console.log(`Moved '${file}' to directory '${ext}'`);
  }
}

// Run the function and handle any errors
getFiles().catch(console.error);




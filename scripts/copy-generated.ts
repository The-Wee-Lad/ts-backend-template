import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Always resolve paths from the project root, not current working directory
console.log(__dirname);
const source = path.resolve(__dirname, '../generated');
const destination = path.resolve(__dirname, '../dist/generated');

// Log to verify
console.log('Copying from:', source);
console.log('Copying to:', destination);

// Synchronously copy the folder
fs.copySync(source, destination);
console.log('✅ Copy complete');

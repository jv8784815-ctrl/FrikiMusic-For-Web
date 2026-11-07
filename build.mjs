import { cp, copyFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, 'dist');
await mkdir(output, { recursive: true });
await Promise.all(['index.html', 'styles.css', 'app.js'].map((file) => copyFile(path.join(root, file), path.join(output, file))));
await cp(path.join(root, 'assets'), path.join(output, 'assets'), { recursive: true });
await writeFile(path.join(output, 'config.js'), `window.FRIKIMUSIC_API_URL = ${JSON.stringify(process.env.FRIKIMUSIC_API_URL || '')};\n`);
console.log('FrikiMusic Web preparado en dist/.');

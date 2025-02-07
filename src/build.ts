import { build } from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

build({
  entryPoints: {
    frourio: path.resolve(__dirname, 'frourio/index.ts'),
    'frourio-express': path.resolve(__dirname, 'frourio-express/index.ts'),
  },
  outdir: path.resolve(__dirname, '../benchmarks'),
  format: 'cjs',
  outExtension: { '.js': '.cjs' },
  platform: 'node',
  target: 'node20',
  bundle: true,
  plugins: [nodeExternalsPlugin()],
  define: { 'process.env.NODE_ENV': `"production"` },
}).catch(() => process.exit(1));

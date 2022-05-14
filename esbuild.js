const { build } = require('esbuild');

const sharedConfig = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  minify: true,
};
build({
  ...sharedConfig,
  platform: 'node', // for CJS
  outfile: 'lib/index.js',
});
build({
  ...sharedConfig,
  outfile: 'lib/index.esm.js',
  platform: 'neutral', // for ESM
  format: 'esm',
});

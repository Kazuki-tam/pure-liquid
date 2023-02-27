
const esbuild = require('esbuild')
const path = require('path')

const distAssetsPath = path.resolve(__dirname, '../dist/assets/js');
const srcAssetsPath = path.resolve(__dirname, '../src/assets/ts/');

// Set production or development via NODE_ENV
const MODE = process.env.NODE_ENV;
const config = {
  define: { 'process.env.NODE_ENV': `"${MODE}"` },
  target: 'es2016',
  entryPoints: {
    'main': path.join(
      srcAssetsPath,
      'main.ts',
    ),
  },
  sourcemap: MODE === 'development',
  minify: MODE === 'production',
  bundle: true,
  outdir: distAssetsPath,
  tsconfig: path.resolve(__dirname, '../tsconfig.json'),
}

esbuild.build(config);


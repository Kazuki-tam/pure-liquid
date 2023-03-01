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

async function build() {
  await esbuild.build(config);
}

async function watch() {
  let ctx = await esbuild.context(config);
  await ctx.watch();
}

// Check if command line argument is "build" or "watch"
const command = process.argv[2];
if (command === 'build') {
  build();
} else if (command === 'watch') {
  watch();
} else {
  console.error(`Invalid command '${command}'. Use 'build' or 'watch'.`);
}

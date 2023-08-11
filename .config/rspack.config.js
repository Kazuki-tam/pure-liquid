const path = require('path');
const assetsPath = path.resolve(__dirname, '../dist/assets/js');
const environment = process.env.NODE_ENV || 'development';
const isProduction = environment === 'production';

module.exports = {
  mode: environment,
  // Entry files
  entry: './src/assets/ts/main.ts',

  // Output files
  output: {
    path: assetsPath,
    filename: '[name].js',
  },
  devtool: isProduction ? 'source-map' : 'eval-source-map',
};

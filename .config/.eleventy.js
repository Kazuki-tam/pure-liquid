const htmlmin = require("html-minifier");
const format = require('date-fns/format');
const MODE = process.env.NODE_ENV;

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/assets/');
  eleventyConfig.addLiquidFilter("toUTCString", function(date) {
    return format(date, "yyyy-MM-dd");
  });
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if(MODE === "production" && outputPath && outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });
  // Return your Object options:
  return {
    templateFormats: ['liquid'],
    htmlTemplateEngine: 'liquid',
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
    },
  };
};

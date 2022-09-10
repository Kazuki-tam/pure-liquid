module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/assets/');
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

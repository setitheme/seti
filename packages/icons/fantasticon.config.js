module.exports = {
  name: 'seti-icons',
  inputDir: './src/svg',
  outputDir: './static/seti-icons',
  fontTypes: ['eot', 'ttf', 'woff', 'woff2'],
  assetTypes: ['css', 'json', 'html', 'scss'],
  normalize: true,
  prefix: 'seti-icons',
  tag: 'i',
  fontsUrl: '/seti-icons',
  formatOptions: {
    json: {
      indent: 2
    }
  },
  // Use a custom Handlebars template
  templates: {
    css: './examples/fantasticon/templates/css.hbs',
    html: './examples/fantasticon/templates/html.hbs',
    scss: './examples/fantasticon/templates/scss.hbs'
  },
  pathOptions: {
    json: './lib/icon-list.json',
  }
};

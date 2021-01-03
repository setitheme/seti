/** @type { import('snowpack').SnowpackUserConfig } */
module.exports = {
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv'
  ],
  mount: {
    lib: {
      url: '/lib',
      static: false
    },
    static: {
      url: '/',
      static: true
    },
    svg: {
      url: '/svg',
      static: true
    },
    examples: {
      url: '/examples',
      static: false
    },
    src: {
      url: '/src',
      static: false
    },
  },
  install: [
    /* ... */
  ],
  installOptions: {
    polyfillNode: true,
    rollup: {
      plugins: [require('rollup-plugin-node-polyfills')({crypto: true })],
    },
  },
  devOptions: {
    port: 3000,
    open: 'false',
    // output: 'stream' // useful when Snowpack is run in parallel with other commands
    secure: false
  },
  buildOptions: {
    out: '_build',
    sourceMaps: true
  },
  alias: {
    '@lib': './lib',
    '@react': './react',
    '@src': './src',
    '@svg': './svg',
    '@vue': './vue',
    '@web-components': './web-components',
  },
  experiments: {
    routes: [
      {
        src: 'examples/react',
        dest: '/examples/react/index.html',
        match: 'routes'
      },
      {
        src: '/',
        dest: '/index.html',
        match: 'routes'
      }
    ]
  }
};

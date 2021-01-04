/** @type { import('snowpack').SnowpackUserConfig } */
module.exports = {
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-sass',
      {
        compilerOptions: {
          loadPath: 'node_modules'
        }
      },
    ],
  ],
  mount: {
    examples: {
      url: '/examples',
      static: false
    },
    lib: {
      url: '/lib',
      static: false
    },
    src: {
      url: '/src',
      static: false
    },
    static: {
      url: '/',
      static: true
    },
    styles: {
      url: '/styles',
      static: false
    },
    svg: {
      url: '/svg',
      static: true
    }
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
    out: 'build',
    sourceMaps: true
  },
  alias: {
    '@lib': './lib',
    '@react': './react',
    '@src': './src',
    '@styles': './styles',
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

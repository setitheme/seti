// Rollup Plugins
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/seti.core.ts', // our source file
  output: [
    {
      file: 'build/seti.core.js',
      format: 'es',
    },
    {
      file: 'build/seti.core.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    scss({
      output: 'build/seti.css',
      include: ['styles/seti.scss'],
    }),
    terser(), // minifies generated bundles
  ],
};

// Third-Part
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
 input: 'src/seti.core.ts', // our source file
 output: [
  {
    file: 'build/seti.core.js',
    format: 'es'
  },
  {
    file: 'build/seti.core.cjs.js',
    format: 'cjs'
  }
 ],
 plugins: [
  typescript({
   typescript: require('typescript'),
  }),
  // terser() // minifies generated bundles
 ]
};

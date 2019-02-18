import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const input = './lib/index.js';

// const external = id => !id.startsWith('.') && !id.startsWith('/');

export default [
  {
    input,
    output: [{
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    },
    ],
    external: [...Object.keys(pkg.dependencies)],
    plugins: [
      babel({
        runtimeHelpers: true,
        plugins: ['@babel/transform-runtime'],
        exclude: 'node_modules/**',
      }),
      nodeResolve(),
      commonjs()
    ]
  }
];

/*
 * modified from https://www.npmjs.com/package/tsconfig-paths#bootstraping-with-explicit-params
 *
 * Resolve tsconfig path mappings in outDir
 *
 */

const tsConfigPaths = require('tsconfig-paths');

const { compilerOptions } = require('./tsconfig.json');

const { baseUrl, outDir, paths: oldPaths } = compilerOptions;

const paths = Object.keys(oldPaths).reduce((acc, key) => {
  return {
    ...acc,
    [key]: oldPaths[key].map((path) => path.replace(baseUrl, outDir)),
  };
}, {});

tsConfigPaths.register({ baseUrl: outDir, paths });

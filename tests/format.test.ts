import { format } from '../src/format';

describe('Test format', () => {
  test('', () => {
    const actual = JSON.stringify(
      format({
        overrides: {
          b: {
            c: {
              d: '1.0.0',
              e: '1.0.0'
            }
          },
          a: '1.0.0'
        },
        devDependencies: {
          'typescript': '0.0.0',
          'jest': '0.0.0',
          '@types/jest': '0.0.0'
        },
        bundleDependencies: true,
        optionalDependencies: {
          'typescript': '0.0.0',
          'jest': '0.0.0',
          '@types/jest': '0.0.0'
        },
        peerDependenciesMeta: {},
        peerDependencies: {
          'typescript': '0.0.0',
          'jest': '0.0.0',
          '@types/jest': '0.0.0'
        },
        dependencies: {
          'typescript': '0.0.0',
          'jest': '0.0.0',
          '@types/jest': '0.0.0'
        },
        scripts: {},
        files: ['dist'],
        bin: './dist/cli.js',
        types: './dist/index.d.ts',
        module: './dist/index.mjs',
        main: './dist/index.js',
        exports: { lib: './lib/index.js' },
        type: 'module',
        bugs: 'www.bugs.com',
        repository: 'www.repository.com',
        homepage: 'www.homepage.com',
        funding: { type: 'patreon', url: 'prettypkg' },
        contributors: ['Jane Doe'],
        author: 'John Doe',
        license: 'MIT',
        keywords: ['pretty', 'package'],
        description: 'Description of prettypkg.',
        version: '0.0.0',
        name: 'prettypkg',
        private: false,
        config: {}
      })
    );

    expect(actual).toEqual(
      JSON.stringify({
        name: 'prettypkg',
        version: '0.0.0',
        description: 'Description of prettypkg.',
        keywords: ['pretty', 'package'],
        license: 'MIT',
        author: 'John Doe',
        contributors: ['Jane Doe'],
        funding: { type: 'patreon', url: 'prettypkg' },
        homepage: 'www.homepage.com',
        repository: 'www.repository.com',
        bugs: 'www.bugs.com',
        type: 'module',
        exports: { lib: './lib/index.js' },
        main: './dist/index.js',
        module: './dist/index.mjs',
        types: './dist/index.d.ts',
        bin: './dist/cli.js',
        files: ['dist'],
        scripts: {},
        dependencies: {
          '@types/jest': '0.0.0',
          'jest': '0.0.0',
          'typescript': '0.0.0'
        },
        peerDependencies: {
          '@types/jest': '0.0.0',
          'jest': '0.0.0',
          'typescript': '0.0.0'
        },
        peerDependenciesMeta: {},
        optionalDependencies: {
          '@types/jest': '0.0.0',
          'jest': '0.0.0',
          'typescript': '0.0.0'
        },
        bundleDependencies: true,
        devDependencies: {
          '@types/jest': '0.0.0',
          'jest': '0.0.0',
          'typescript': '0.0.0'
        },
        overrides: {
          a: '1.0.0',
          b: {
            c: {
              d: '1.0.0',
              e: '1.0.0'
            }
          }
        },
        config: {}
      })
    );
  });
});

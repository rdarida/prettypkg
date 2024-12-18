import { format } from '../src/format';

describe('Test format', () => {
  test('', () => {
    const actual = JSON.stringify(
      format({
        overrides: {},
        devDependencies: {},
        bundleDependencies: true,
        optionalDependencies: {},
        peerDependenciesMeta: {},
        peerDependencies: {},
        dependencies: {},
        scripts: {},
        files: ['dist'],
        bin: './dist/cli.js',
        types: './dist/index.d.ts',
        module: './dist/index.mjs',
        main: './dist/index.js',
        exports: { lib: './lib/index.js' },
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
        exports: { lib: './lib/index.js' },
        main: './dist/index.js',
        module: './dist/index.mjs',
        types: './dist/index.d.ts',
        bin: './dist/cli.js',
        files: ['dist'],
        scripts: {},
        dependencies: {},
        peerDependencies: {},
        peerDependenciesMeta: {},
        optionalDependencies: {},
        bundleDependencies: true,
        devDependencies: {},
        overrides: {},
        config: {}
      })
    );
  });
});

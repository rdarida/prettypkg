import { join } from 'node:path';

import {
  beforeEach,
  afterEach,
  describe,
  expect,
  it,
  vi,
  type Mock
} from 'vitest';

describe('Test cli', () => {
  let originalArgv: string[];
  let prettypkgMock: Mock;

  beforeEach(() => {
    vi.resetModules();

    originalArgv = process.argv;
    vi.clearAllMocks();

    prettypkgMock = vi.fn();

    vi.doMock('../src', () => ({
      prettypkg: prettypkgMock
    }));
  });

  it('should execute prettypkg command with default options', async () => {
    process.argv = ['node', 'prettypkg'];

    await import('../src/cli.js');

    expect(prettypkgMock).toHaveBeenCalledTimes(1);

    expect(prettypkgMock).toHaveBeenCalledWith({
      $0: 'prettypkg',
      _: [],
      path: join(process.cwd(), 'package.json'),
      write: false
    });
  });

  it('should execute prettypkg command with all the command line options', async () => {
    process.argv = ['node', 'prettypkg', '--path', 'package.json', '--write'];

    await import('../src/cli.js');

    expect(prettypkgMock).toHaveBeenCalledTimes(1);

    expect(prettypkgMock).toHaveBeenCalledWith({
      $0: 'prettypkg',
      _: [],
      path: 'package.json',
      write: true
    });
  });

  afterEach(() => {
    process.argv = originalArgv;
    vi.restoreAllMocks();
    vi.doUnmock('../src');
  });
});

import {
  execFileSync,
  ExecFileSyncOptionsWithBufferEncoding
} from 'node:child_process';

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import { rimrafSync } from 'rimraf';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { FIXTURES_DIR, TEMP_DIR } from './test_constants';

const PRETTYPKG = join(__dirname, '..', 'dist', 'cli.js');

const OPTIONS: ExecFileSyncOptionsWithBufferEncoding = {
  maxBuffer: Infinity,
  windowsHide: true,
  cwd: TEMP_DIR,
  stdio: 'pipe'
} as const;

describe('Test cli', () => {
  beforeEach(() => {
    mkdirSync(TEMP_DIR, { recursive: true });
  });

  it('should format package.json in the current directory', () => {
    const testPath = join(FIXTURES_DIR, 'package.test.json');
    const targetPath = join(TEMP_DIR, 'package.json');

    copyFileSync(testPath, targetPath);
    execFileSync('node', [PRETTYPKG, '--write'], { ...OPTIONS });

    const expectedPath = join(FIXTURES_DIR, 'package.expected.json');

    const testRaw = readFileSync(targetPath, { encoding: 'utf-8' });
    const expectedRaw = readFileSync(expectedPath, { encoding: 'utf-8' });

    const testJson = JSON.parse(testRaw);
    const expectedJson = JSON.parse(expectedRaw);

    const actual = JSON.stringify(testJson, null, 2);
    const expected = JSON.stringify(expectedJson, null, 2);

    expect(actual).toBe(expected);
  });

  afterEach(() => {
    rimrafSync(TEMP_DIR);
  });
});

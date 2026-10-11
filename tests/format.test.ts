import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { FIXTURES_DIR } from './test_constants';

import { format } from '../src/format';

describe('Test format', () => {
  it('formats package metadata with sorted dependencies and overrides', () => {
    const testPath = join(FIXTURES_DIR, 'package.test.json');
    const expectedPath = join(FIXTURES_DIR, 'package.expected.json');

    const testRaw = readFileSync(testPath, { encoding: 'utf-8' });
    const expectedRaw = readFileSync(expectedPath, { encoding: 'utf-8' });

    const testJson = JSON.parse(testRaw);
    const expectedJson = JSON.parse(expectedRaw);

    const actual = JSON.stringify(format(testJson), null, 2);
    const expected = JSON.stringify(expectedJson, null, 2);

    expect(actual).toBe(expected);
  });
});

import { describe, expect, test } from 'vitest';

import { format } from '../src/index';

describe('Test exports', () => {
  test('format should be exported', () => {
    expect(format).toBeTruthy();
  });
});

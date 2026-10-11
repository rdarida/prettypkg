import { describe, expect, it } from 'vitest';

import { prettypkg } from '../src';

describe('Test exports', () => {
  it('should export prettypkg function', () => {
    expect(prettypkg).toBeDefined();
  });
});

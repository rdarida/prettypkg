import { getFormatter } from '../../src/formatters/index';

describe('Test getFormatter', () => {
  test('getFormatter should return with "defaultFormatter"', () => {
    const actual = getFormatter('name');
    expect(actual.name).toBe('defaultFormatter');
  });

  test('getFormatter should return with "privateFormatter"', () => {
    const actual = getFormatter('private');
    expect(actual.name).toBe('privateFormatter');
  });
});

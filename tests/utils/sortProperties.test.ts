import { sortProperties } from '../../src/utils/sortProperties';

describe('Test sortProperties', () => {
  test('sortProperties should sort object properties', () => {
    const actual = JSON.stringify(sortProperties({ ca: 4, c: 3, a: 1, b: 2 }));
    expect(actual).toEqual(JSON.stringify({ a: 1, b: 2, c: 3, ca: 4 }));
  });
});

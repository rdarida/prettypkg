import { privateFormatter } from '../../src/formatters/privateFormatter';

describe('Test privateFormatter', () => {
  test('privateFormatter should be exported', () => {
    expect(privateFormatter).toBeTruthy();
  });

  test('should return with "true"', () => {
    const actual = privateFormatter('private', { private: true });
    expect(actual).toBeTruthy();
  });

  test('should return with "undefined"', () => {
    let actual = privateFormatter('private', {});
    expect(actual).toBeUndefined();

    actual = privateFormatter('private', { private: false });
    expect(actual).toBeUndefined();
  });
});

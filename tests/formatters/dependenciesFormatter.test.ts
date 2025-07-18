import { dependenciesFormatter } from '../../src/formatters/dependenciesFormatter';

describe('Test dependenciesFormatter', () => {
  test('dependenciesFormatter should be exported', () => {
    expect(dependenciesFormatter).toBeTruthy();
  });

  test('should return a sorted dependencies object', () => {
    const dependencies = {
      'typescript': '0.0.0',
      'jest': '0.0.0',
      '@types/jest': '0.0.0'
    };

    let actual = dependenciesFormatter('dependencies', { dependencies });

    expect(actual).toEqual({
      '@types/jest': '0.0.0',
      'jest': '0.0.0',
      'typescript': '0.0.0'
    });

    actual = dependenciesFormatter('dependencies', { dependencies: {} });

    expect(actual).toEqual({});
  });

  test('should return with "undefined"', () => {
    const actual = dependenciesFormatter('dependencies', {});
    expect(actual).toBeUndefined();
  });
});

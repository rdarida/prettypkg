import { greet } from '../src/index';

describe('Test exports', () => {
  test('greet should be exported', () => {
    expect(greet).toBeTruthy();
  });

  test('greet should return with "Hello, prettypkg!"', () => {
    expect(greet()).toBe('Hello, prettypkg!');
  });
});

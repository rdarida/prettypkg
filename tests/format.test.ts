import { format } from '../src/format';

describe('Test format', () => {
  test('', () => {
    const actual = JSON.stringify(
      format({
        description: 'Hello',
        version: '0.0.0',
        name: 'hello',
        private: true,
        author: 'John Doe'
      })
    );

    expect(actual).toEqual(
      JSON.stringify({
        private: true,
        version: '0.0.0',
        name: 'hello',
        description: 'Hello',
        author: 'John Doe'
      })
    );
  });
});
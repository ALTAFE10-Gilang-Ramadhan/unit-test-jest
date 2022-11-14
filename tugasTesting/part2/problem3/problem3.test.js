const primeNumber = require('../../part2/problem3/problem3');

describe('studentScore', () => {
  test('Test 1', () => {
    expect(primeNumber(11)).toEqual('Prima');
  });
  test('Test 2', () => {
    expect(primeNumber(20)).toEqual('Bukan Prima');
  });
});

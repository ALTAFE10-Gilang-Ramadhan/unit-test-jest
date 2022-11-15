const primeNumber = require('../../part2/problem3/problem3');

describe('studentScore', () => {
  test('Test 1', () => {
    expect(primeNumber(1)).toEqual('Bukan Prima');
  });
  test('Test 2', () => {
    expect(primeNumber(2)).toEqual('Prima');
  });
  test('Test 3', () => {
    expect(primeNumber(7)).toEqual('Prima');
  });
  test('Test 4', () => {
    expect(primeNumber(9)).toEqual('Bukan Prima');
  });
});

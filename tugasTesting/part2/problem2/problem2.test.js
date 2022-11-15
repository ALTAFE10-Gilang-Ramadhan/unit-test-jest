const faktorBilangan = require('../../part2/problem2/problem2');

describe('faktorBilangan', () => {
  test('Test 1', () => {
    expect(faktorBilangan(3)).toEqual([1, 3]);
  });
  test('Test 2', () => {
    expect(faktorBilangan(4)).toEqual([1, 2, 4]);
  });
  test('Test 3', () => {
    expect(faktorBilangan(6)).toEqual([1, 2, 3, 6]);
  });
  test('Test 4', () => {
    expect(faktorBilangan(10)).toEqual([1, 2, 5, 10]);
  });
});

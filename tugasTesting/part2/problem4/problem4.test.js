const palindrome = require('../../part2/problem4/problem4');

describe('studentScore', () => {
  test('Test 1', () => {
    expect(palindrome('civic')).toBe(true);
  });
  test('Test 2', () => {
    expect(palindrome('katak')).toBe(true);
  });
  test('Test 3', () => {
    expect(palindrome('lion')).toBe(false);
  });
  test('Test 4', () => {
    expect(palindrome('kasur rusak')).toBe(true);
  });
  test('Test 5', () => {
    expect(palindrome('kupu-kupu')).toBe(false);
  });
});

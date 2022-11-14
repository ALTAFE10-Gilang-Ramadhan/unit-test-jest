const palindrome = require('../../part2/problem4/problem4');

describe('studentScore', () => {
  test('Test 1', () => {
    expect(palindrome('civic')).toEqual('True');
  });
  test('Test 2', () => {
    expect(palindrome('kupu-kupu')).toEqual('False');
  });
});

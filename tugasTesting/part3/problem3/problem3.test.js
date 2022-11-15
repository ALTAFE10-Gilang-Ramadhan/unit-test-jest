const remove = require('../../part3/problem3/problem3');

describe('Remove duplicate and return length', () => {
  it('test 1', () => {
    expect(remove([2, 3, 3, 3, 3, 6, 9, 9])).toBe(4);
  });

  it('test 2', () => {
    expect(remove([2, 3, 4, 5, 6, 9, 9])).toBe(6);
  });

  it('test 3', () => {
    expect(remove([2, 2, 2, 11])).toBe(2);
  });

  test('test 4', () => {
    expect(remove([2, 2, 2, 11])).toBe(2);
  });
});

const joinArrayRemoveDuplicate = require('../../part3/problem2/problem2');

describe('Remove Duplicate Array', () => {
  it('test 1', () => {
    expect(joinArrayRemoveDuplicate(['samsung', 'apple'], ['apple', 'sony', 'xiaomi'])).toEqual(['samsung', 'apple', 'sony', 'xiaomi']);
  });

  it('test 2', () => {
    expect(joinArrayRemoveDuplicate(['apel', 'anggur'], ['lemon', 'leci', 'nanas'])).toEqual(['apel', 'anggur', 'lemon', 'leci', 'nanas']);
  });

  it('test 3', () => {
    expect(joinArrayRemoveDuplicate(['apel', 'anggur', 'jeruk'], ['jeruk', 'apel', 'nanas'])).toEqual(['apel', 'anggur', 'jeruk', 'nanas']);
  });
});

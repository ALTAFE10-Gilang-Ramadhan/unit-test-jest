const meanMedian = require('../../part3/problem4/problem4');

describe('Mean and Median in array', () => {
  test('test 1', () => {
    expect(meanMedian([1, 2, 3, 4])).toEqual('mean : 2.5, median : 2.5');
  });

  test('test 2', () => {
    expect(meanMedian([1, 2, 3, 4, 5])).toEqual('mean : 3, median : 3');
  });

  test('test 3', () => {
    expect(meanMedian([7, 8, 9, 13, 15])).toEqual('mean : 10.4, median : 9');
  });

  test('test 4', () => {
    expect(meanMedian([10, 20, 30, 40, 50])).toEqual('mean : 30, median : 30');
  });

  test('test 5', () => {
    expect(meanMedian([15, 20, 30, 60, 120])).toEqual('mean : 49, median : 30');
  });
});

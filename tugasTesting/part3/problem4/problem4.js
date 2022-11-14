function meanMedian(arrayInput) {
  // untuk menentukan median
  function median(array) {
    let data = array.length;
    if (data % 2 == 0) {
      let a = data / 2;
      let median = (array[a - 1] + array[a]) / 2;
      console.log(`Median untuk [${array}] adalah ${median}`);
    } else {
      a = (data + 1) / 2;
      let median = array[a - 1];
      console.log(`Median untuk [${array}] adalah ${median}`);
    }
  }

  median(arrayInput);

  //   untuk menetukan mean
  let total = 0;

  arrayInput.forEach(mean);
  function mean(score) {
    total += score;
  }

  let avg = total / arrayInput.length;

  return Math.round(avg);
}

console.log(`Mean nya adalah ${meanMedian([1, 2, 3, 4])}`); // 2.5 2.5
console.log(`Mean nya adalah ${meanMedian([1, 2, 3, 4, 5])}`); // 3 3
console.log(`Mean nya adalah ${meanMedian([7, 8, 9, 13, 15])}`); // 10.4 9
console.log(`Mean nya adalah ${meanMedian([10, 20, 30, 40, 50])}`); // 30 30
console.log(`Mean nya adalah ${meanMedian([15, 20, 30, 60, 120])}`); // 49 30

module.exports = meanMedian;

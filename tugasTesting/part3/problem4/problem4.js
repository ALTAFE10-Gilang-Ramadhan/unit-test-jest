const meanMedian = (arrayInput) => {
  let core = 0,
    median;
  if (arrayInput.length != 1) {
    core = arrayInput.length / 2;
    if (arrayInput.length % 2 == 0) {
      median = (arrayInput[core - 1] + arrayInput[core]) / 2;
    } else {
      median = arrayInput[Math.floor(core)];
    }
  } else {
    median = 'minimal harus 2 angka';
  }
  const resultMean = mean(arrayInput);

  return `mean : ${resultMean}, median : ${median}`;
};

const mean = (arrayInput) => {
  let mean = arrayInput.reduce((a, b) => a + b, 0) / arrayInput.length;
  return mean;
};

module.exports = meanMedian;

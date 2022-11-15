function primeNumber(number) {
  let pembagi = 0;
  let result = '';
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      pembagi++;
    }
  }
  if (pembagi == 2) {
    result = 'Prima';
  } else {
    result = 'Bukan Prima';
  }
  return result;
}

module.exports = primeNumber;

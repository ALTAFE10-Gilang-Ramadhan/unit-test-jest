function primeNumber(number) {
  let pembagi = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      pembagi++;
    }
  }
  if (pembagi == 2) {
    console.log('Prima');
  } else {
    console.log('Bukan Prima');
  }
}

module.exports = primeNumber;

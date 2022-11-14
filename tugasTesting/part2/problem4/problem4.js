function palindrome(string) {
  const panjang = string.length;

  for (let i = 0; i < panjang / 2; i++) {
    if (string[i] !== string[panjang - 1 - i]) {
      return 'false';
    }
  }
  return 'true';
}

module.exports = palindrome;

function faktorBilangan(bil) {
  let arr = [];
  for (let i = 0; i <= bil; i++) {
    if (bil % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}

module.exports = faktorBilangan;

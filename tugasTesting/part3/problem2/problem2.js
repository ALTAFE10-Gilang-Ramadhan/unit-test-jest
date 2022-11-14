function joinArrayRemoveDuplicate(arrayA, arrayB) {
  const join = arrayA.concat(arrayB);
  const newA = [...new Set(join)];
  return newA;
}

// Test cases
console.log(joinArrayRemoveDuplicate(['apel', 'anggur'], ['lemon', 'leci', 'nanas']));
// ["apel", "anggur", "lemon", "leci", "nanas"]

console.log(joinArrayRemoveDuplicate(['samsung', 'apple'], ['apple', 'sony', 'xiaomi']));
// ["samsung", "apple", "sony", "xiaomi"]

console.log(joinArrayRemoveDuplicate(['football', 'basketball'], ['basketball', 'football']));
// [“football”, “basketball”]

module.exports = joinArrayRemoveDuplicate;

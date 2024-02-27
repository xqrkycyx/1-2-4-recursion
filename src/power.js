/**
 * Return base raised to the power exponent.
 * @throws Error if exponent is negative
 * @param {integer} base an integer
 * @param {integer} exponent a non-negative integer
 */
function power(base, exponent) {
  // Base case: if exponent is 0, return 1
  if (exponent === 0) {
    return 1;
  }
  // If exponent is negative, throw an Error
  if (exponent < 0) {
    throw new Error("exponent should be >= 0");
  }
  // Recursive case: compute power recursively
  return base * power(base, exponent - 1);
}

module.exports = power;

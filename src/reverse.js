/**
 * Returns the string with the characters in reverse order
 * @param {string} text the string to be reversed
 */
function reverse(text) {
  // Base case: if the string has 0 or 1 characters, return the string itself
  if (text.length <= 1) {
    return text;
  }
  // Recursive case: return the last character followed by the reversed substring
  return text.slice(-1) + reverse(text.slice(0, -1));
}

module.exports = reverse;

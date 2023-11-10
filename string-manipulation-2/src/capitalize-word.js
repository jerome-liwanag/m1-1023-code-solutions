/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toUpperCase() === "JAVASCRIPT" || word.toLowerCase() === "javascript") {
    return "JavaScript";
  }
  const firstChar = word.charAt(0).toUpperCase();
  const remainder = word.slice(1).toLowerCase();
  word = firstChar + remainder;

  return word;
}

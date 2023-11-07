/* exported capitalize */
function capitalize(word) {
  const firstChar = word.charAt(0).toUpperCase();
  const remainder = word.slice(1).toLowerCase();
  word = firstChar + remainder;

  return word;
}

/* exported capitalizeWords */
function capitalizeWords(string) {
  const words = string.split(' ');
  const capitalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    capitalizedWords.push(capitalized);
  }
  const capWordsString = capitalizedWords.join(' ');

  return capWordsString;
}

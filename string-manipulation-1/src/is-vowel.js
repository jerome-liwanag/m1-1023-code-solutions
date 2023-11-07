/* exported isVowel */
function isVowel(character) {
  if (character === 'A' || character === 'a') {
    return true;
  } else if (character === 'E' || character === 'e') {
    return true;
  } else if (character === 'I' || character === 'i') {
    return true;
  } else if (character === 'O' || character === 'o') {
    return true;
  } else if (character === 'U' || character === 'u') {
    return true;
  }

  return false;
}

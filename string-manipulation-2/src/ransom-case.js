/* exported ransomCase */
function ransomCase(string) {
  const chars = string.split('');

  for (let i = 0; i < chars.length; i++) {
    if (i % 2 === 0) {
      chars[i] = chars[i].toLowerCase();
    } else {
      chars[i] = chars[i].toUpperCase();
    }
  }

  const ransomCaseString = chars.join('');

  return ransomCaseString;
}

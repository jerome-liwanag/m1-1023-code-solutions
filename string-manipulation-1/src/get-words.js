/* exported getWords */
function getWords(string) {
  // Check for empty string
  if (string === '') {
    return [];
  }
  const stringArr = string.split(' ');

  return stringArr;
}

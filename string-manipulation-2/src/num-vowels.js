/* exported numVowels */
// PSEUDOCODE: Define a function named numVowels that takes in 1 parameter: string.
// Make an if-statement to check for empty strings and return 0 if so.
// Declare a variable named vowels and initialize it to 0.
// Create a for loop that iterates over each character of the string parameter.
// Within the loop body, make an if-statement to check if each character is strictly equal to vowels and increment the vowels variable if so.
// Return the vowels variable.

function numVowels(string) {
  // Check for empty string
  if (string === '') {
    return 0;
  }

  let vowels = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === 'A' ||
      string[i] === 'a' ||
      string[i] === 'E' ||
      string[i] === 'e' ||
      string[i] === 'I' ||
      string[i] === 'i' ||
      string[i] === 'O' ||
      string[i] === 'o' ||
      string[i] === 'U' ||
      string[i] === 'u'
    ) {
      vowels++;
    }
  }

  return vowels;
}

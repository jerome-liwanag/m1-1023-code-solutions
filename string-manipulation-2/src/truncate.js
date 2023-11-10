/* exported truncate */
// PESUDOCODE: Define a function named truncate that takes in 2 parameters: length and string.
// Define a variable named truncatedString and assign it the value of the substring method of the string parameter after it is called and have it take in 2 arguments: 0 to have the substring start at the beginning of the original string and the length parameter to end the substring based on the indicated length.
// Concatenate the truncatedString variable with "...".
// Return the truncatedString variable.

function truncate(length, string) {
  return string.substring(0, length) + "...";
}

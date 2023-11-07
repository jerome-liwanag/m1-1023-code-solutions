/* exported getLastChar */
// PSEUDOCODE:
// Define a function named getLastChar that takes in one parameter: string.
// Access the first character of the string parameter through its index.
// Similar to the last element of arrays, access the last character of the string parameter by calling the built-in length method of the string and subtracting it by 1.
// Return the last character of the string based on the previous statement.

function getLastChar(string) {
  return string[string.length - 1];
}

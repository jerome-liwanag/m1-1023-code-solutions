/* exported includes */
// PSEUDOCODE: Define a function named includes that takes in 2 parameters: array and value.
// Create a for loop that iterates over each element in the array parameter.
// Within the loop body, make an if-statement that checks if each element of the array is strictly equal to the value parameter and return true if so.
// Otherwise, return false.

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }

  return false;
}

/* exported reverse */
// PSEUDOCODE: Define a function named reverse that takes in a single parameter: array.
// Define a variable named arr and assign it the value of an empty array.
// Create a for loop with an initial statement of a variable i being assigned the value of the length of the array parameter subtracted by 1.
// Give the for loop a conditional statement of i being greater than or equal to 0 so the loop knows to end when it reaches the first element of the array.
// Give the for loop a final statement of post-decrementing the i variable.
// Within the loop body, use the push() method of the empty 'arr' array and have it take in 1 argument: the values of the array parameter.
// Return the 'arr' array with the reversed version of the original array parameter.

function reverse(array) {
  const arr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }

  return arr;
}

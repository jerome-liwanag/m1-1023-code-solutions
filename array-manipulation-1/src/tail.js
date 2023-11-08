/* exported tail */
// PSEUDOCODE: Define a function named tail that takes in a single parameter: array.
// Declare a variable named arr and assign an empty array for its value.
// Create a for loop with an initial statement of a variable i being assigned the value of 1 instead of 0 because we want to skip the first element of the array.
// Give the for loop a conditional statement of i being less than the length of the array parameter.
// Give the for loop a final statement of post-incrementing the i variable.
// Within the loop body, use the push() method of the empty 'arr' array and have it take in 1 argument: the values of the array parameter.
// Return the 'arr' array.

function tail(array) {
  const arr = [];
  for (let i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }

  return arr;
}

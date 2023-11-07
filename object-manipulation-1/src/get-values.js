/* exported getValues */
// PSEUDOCODE: Define a function named getValues that takes in one parameter: object.
// Declare a variable named values assign it to an empty array.
// Use a for...in loop to iterate through the object parameter and push each of the object parameter's values to the values array declared previously.
// Return the updated values array.

function getValues(object) {
  const values = [];
  for (const value in object) {
    values.push(object[value]);
  }

  return values;
}

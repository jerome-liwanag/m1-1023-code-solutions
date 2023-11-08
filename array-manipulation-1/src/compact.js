/* exported compact */
function compact(array) {
  const noFalsiesArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      noFalsiesArray.push(array[i]);
    }
  }

  return noFalsiesArray;
}

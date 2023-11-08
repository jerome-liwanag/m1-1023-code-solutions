/* exported initial */
function initial(array) {
  if (array.length <= 1) {
    return [];
  }

  const arr = [];
  for (let i = 0; i < array.length - 1; i++) {
    arr.push(array[i]);
  }

  return arr;
}

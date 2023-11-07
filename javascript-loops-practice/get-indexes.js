/* exported getIndexes */
function getIndexes(array) {
  const indexArray = [];
  for (let i = 0; i < array.length; i++) {
    indexArray.push(array.indexOf(array[i]));
  }

  return indexArray;
}

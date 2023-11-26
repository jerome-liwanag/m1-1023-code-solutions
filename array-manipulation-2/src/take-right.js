/* exported takeRight */
function takeRight(array, count) {
  if (count > array.length) {
    return array;
  }

  return array.slice(array.length - count);
}

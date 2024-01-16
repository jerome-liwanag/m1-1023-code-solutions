/* exported unique */
function unique(array) {
  const uniqueArr = Array.from(new Set(array));

  return uniqueArr;
}

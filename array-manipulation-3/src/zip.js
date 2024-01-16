/* exported zip */
function zip(first, second) {
  const zippedArr = [];
  const minLength = first.length = Math.min(first.length, second.length);

  for (let i = 0; i < minLength; i++) {
    const subArr = [first[i], second[i]];
    zippedArr.push(subArr);
  }

  return zippedArr;
}

/* exported filterOutStrings */
function filterOutStrings(values) {
  const noStringArr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStringArr.push(values[i]);
    }
  }

  return noStringArr;
}

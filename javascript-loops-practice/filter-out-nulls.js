/* exported filterOutNulls */
function filterOutNulls(values) {
  const noNullArr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNullArr.push(values[i]);
    }
  }

  return noNullArr;
}

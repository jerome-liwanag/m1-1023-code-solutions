/* exported difference */
function difference(first, second) {
  const difference1 = first.filter((element) => !second.includes(element));
  const difference2 = second.filter((element) => !first.includes(element));
  const symmDiff = difference1.concat(difference2);

  return symmDiff;
}

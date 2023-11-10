/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  const chars = string.split('');
  const temp = chars[firstIndex];
  chars[firstIndex] = chars[secondIndex];
  chars[secondIndex] = temp;
  const swapped = chars.join('');

  return swapped;
}

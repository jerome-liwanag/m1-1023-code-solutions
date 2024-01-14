/* exported union */
function union(first, second) {
  const union = [...new Set([...first, ...second])];

  return union;
}

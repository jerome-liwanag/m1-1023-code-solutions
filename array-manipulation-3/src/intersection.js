/* exported intersection */
function intersection(first, second) {
  const intersection = first.filter((element) => second.includes(element));

  return intersection;
}

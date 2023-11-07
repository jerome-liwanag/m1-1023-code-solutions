/* exported getStudentNames */
function getStudentNames(students) {
  const nameArr = [];
  for (const name in students) {
    nameArr.push(students[name].name);
  }

  return nameArr;
}

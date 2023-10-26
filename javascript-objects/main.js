const student = {
  firstName: 'Jerome',
  lastName: 'Liwanag',
  age: 21
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'student';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'Ford',
  model: 'Mustang',
  year: 2004,
};

vehicle['color'] = 'red';
vehicle['isConvertible'] = true;

console.log('value of vehicle["color"]', vehicle['color']);
console.log('value of vehicle["isConvertible"]', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Mokee',
  type: 'Corgi'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);

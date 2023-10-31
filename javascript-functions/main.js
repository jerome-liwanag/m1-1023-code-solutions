// Function #1
function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}

console.log('5 minutes converted to seconds:', convertMinutesToSeconds(5));

// Function #2
function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}

console.log(greet('Beavis'));

// Function #3
function getArea(width, height) {
  return width * height;
}

console.log('Area of a width of 17 and height of 42:', getArea(17, 42));

// Function #4
function getFirstName(person) {
  return person.firstName;
}

const person = {
   firstName: 'Lelouche',
   lastName: 'Lamperouge',
 };
console.log('First name of person object:', getFirstName(person));

// Function #5
function getLastElement(array) {
  return array[array.length - 1];
}

const arr = ['propane', 'and', 'propane', 'accessories'];
console.log('last element of arr:', getLastElement(arr));

const num1 = 4;
const num2 = 5;
const num3 = 6;
const maximumValue = Math.max(num1, num2, num3);

console.log('maximumValue:', maximumValue);

const heroes = ['Iron Man', 'Black Panther', 'Spider Man', 'Daredevil'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex)
console.log('randomHero:', heroes[randomIndex]);

const library = [
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'Animal Farm', author: 'George Orwell' },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

const fullName = 'Jerome Liwanag';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);

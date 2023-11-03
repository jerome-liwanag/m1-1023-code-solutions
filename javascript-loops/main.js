/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = []
  let currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }

  return numbers;
}
console.log(getNumbersToTen());

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }

  return evenNumbers;
}
console.log(getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';

  while (count <= times) {
    repeated += word;
    count++;
  }

  return repeated;
}
console.log(repeatWord('javascript', 10));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
logEachCharacter('');
logEachCharacter('Jerome');
logEachCharacter('I am tired.');

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] *= 2);
  }

  return doubled;
}
console.log('doubleAll([5, 7, 9, 11])');
console.log(doubleAll([5, 7, 9, 11]));

function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }

  return keys;
}
const object = {
  isbn: '978-1449365035', title: 'Speaking JS', author: 'Dr. Axel Rauschmayer'
};
console.log('getKeys({isbn: "978-1449365035", title: "Speaking JS", author: "Dr. Axel Rauschmayer"};)')
console.log(getKeys(object));

function getValues(object) {
  const values = [];
  for (const value in object) {
    values.push(object[value]);
  }

  return values;
}
console.log(
  'getValues({isbn: "978-1449365035", title: "Speaking JS", author: "Dr. Axel Rauschmayer"};)'
);
console.log(getValues(object));

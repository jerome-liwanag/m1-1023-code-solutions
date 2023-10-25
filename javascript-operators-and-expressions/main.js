const width = 4;
const height = 5;
const area = width * height;
console.log("value of area:", area)
console.log('typeof area:', typeof area);

const bill = 10;
const payment = 25;
const change = payment - bill;
console.log('value of change:', change);
console.log('typeof change:', typeof change);

const quizzes = 80;
const midterm = 90;
const final = 100;
const grade = (quizzes + midterm + final) / 3;
console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName = 'Jerome';
const lastName = 'Liwanag';
const fullName = firstName + ' ' + lastName;
console.log('value of fullName:', fullName);
console.log('type of fullName:', typeof fullName);

const pH = 7;
const isAcidic = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('type of isAcidic:', typeof isAcidic);

const headCount = 250;
const isSparta = headCount === 300;
console.log('value of isSparta:', isSparta);
console.log('type of isSparta:', typeof isSparta);

let motto = fullName;
motto += ' is the GOAT';
console.log('value of motto:', motto);
console.log('type of motto:', typeof motto);

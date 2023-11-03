/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  }
  return false;
}
console.log(isUnderFive(4));
console.log(isUnderFive(10));
console.log(isUnderFive(5));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isEven(4));
console.log(isEven(10));
console.log(isEven(5));

function startsWithJ(string) {
  if (string.startsWith('J')) {
    return true;
  }
  return false;
}
console.log(startsWithJ('JavaScript'));
console.log(startsWithJ('PHP'));
console.log(startsWithJ('HTML'));
console.log(startsWithJ('Java'));
console.log(startsWithJ('Kotlin'));
console.log(startsWithJ('C#'));

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  }
  return false;
}
const bart = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};
console.log(isOldEnoughToDrink(bart));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }
  return false;
}
const homer = {
  name: 'Homer Jay Simpson',
  age: 39,
};
console.log(isOldEnoughToDrive(homer));

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
console.log(isOldEnoughToDrinkAndDrive());

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH <= 7) {
    return 'acid';
  } else if (pH <= 14 && pH >= 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
console.log(categorizeAcidity(-1));
console.log(categorizeAcidity(14.0000001));
console.log(categorizeAcidity(7));
console.log(categorizeAcidity(2));
console.log(categorizeAcidity(9));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      console.log("We're the warner brothers!");
      break;
    case 'wakko':
      console.log("We're the warner brothers!");
      break;
    case 'dot':
      console.log("I'm cute~");
      break;
    default:
      console.log('Goodnight everybody!');
  }
}
introduceWarnerBro('yakko');
introduceWarnerBro('wakko');
introduceWarnerBro('dot');
introduceWarnerBro('cody');
introduceWarnerBro('minerva');

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Spider-Man: Across the Spider-Verse');
      break;
    case 'comedy':
      console.log('Dumb and Dumber');
      break;
    case 'horror':
      console.log('The Conjuring');
      break;
    case 'drama':
      console.log('Oppenheimer');
      break;
    case 'musical':
      console.log('The Little Mermaid');
      break;
    case 'sci-fi':
      console.log('Guardians of the Galaxy Vol. 3');
      break;
    default:
      console.log(
        'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi'
      );
  }
}
recommendMovie('action');
recommendMovie('comedy');
recommendMovie('random');

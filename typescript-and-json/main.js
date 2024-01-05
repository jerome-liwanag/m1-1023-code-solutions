const books = [
  { "isbn": "9783836572231", "title": "Sneaker Freaker: The Ultimate Sneaker Book!", "author": "Martin Holz" },
  { "isbn": "9780195810400", "title": "The Adventures of Tom Sawyer", "author": "Mark Twain" },
  { "isbn": "9780374201234", "title": "The Mamba Mentality: How I Play", "author": "Kobe Bryant" }
];

console.log("books array:", books);
console.log('typeof books array:', typeof books);

console.log("JSON string of books array:", JSON.stringify(books));
console.log('typeof JSON string of books array:', typeof JSON.stringify(books));

const student = '{"id": 2345678, "name": "Bronny James"}';
console.log("student JSON string:", student);
console.log('typeof student JSON string:', typeof student);
console.log('student JavaScript object:', JSON.parse(student));
console.log('typeof student JavaScript object:', typeof JSON.parse(student));

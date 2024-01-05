# javascript-and-json

Converting data to and from JavaScript Object Notation.

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/starting-an-exercise).

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is JSON?
  A text-based data format following JavaScript object syntax

- What are serialization and deserialization?
  Serialization - converting a native object to a string so it can be transmitted across the network

  Deserialiation - converting a string to a native object

- Why are serialization and deserialization useful?
  Allows you to transmit data across a network and access JSON data

- How do you serialize a data structure into a JSON string using JavaScript?
  JSON.stringify()

- How do you deserialize a JSON string into a data structure using JavaScript?
  JSON.parse()


### Introduction

JSON is an extremely common data interchange format used to send and store information in computer systems. Before JSON, [XML](https://en.wikipedia.org/wiki/XML) was a popular data interchange format, but JSON's simplicity and readability has made it the preferred format.

## Exercise

1. Read about JSON in the MDN WebDocs - [No, really, what is JSON?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#No_really_what_is_JSON).
1. Read about the purpose of serialization on Stack Overflow - [What is serialization?](https://stackoverflow.com/questions/633402/what-is-serialization). Lots of technical terms get discussed on Stack Overflow!
1. Within `main.js`:
    1. Create an `Array` containing three `Object` literals, representing books.
        - Give each book an `isbn`, a `title`, and an `author` (all `Strings`).
        - Log the `Array` of books and its type to the console (see [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)). Remember to label each thing you log to the console.
    1. Use [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to create a JSON `String` of your books `Array`
        - Log the result and its type to the console (see [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)).
    1. Create a `String` in JSON format holding data representing a student with a `Number id` and a `String name`.
        - Type out the JSON string manually, quotes and all.
        - Log the `String` and its type to the console (see [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)).
    1. Use [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) to create a JavaScript `Object` from your JSON `String`
        - Log the result and its type to the console (see [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)).

## Submitting Your Solution

When your solution is complete, submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/submitting-your-solution).

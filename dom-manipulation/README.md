# dom-manipulation

Modifying the DOM tree with JavaScript.

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/starting-an-exercise).

## Quiz

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
  Gets and sets the value of the class attribute of the specified element

- How do you update the CSS class attribute of an element using JavaScript?
  Change the className property of the element

- What is the `textContent` property of element objects?
  Represents the text content of the node and its descendants

- How do you update the text within an element using JavaScript?
  Access the textContent property of the element and update it with a new string

- Is the `event` parameter of an event listener callback always useful?
  Yes

- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  This assignment would be much more complicated if we didn't use a variable

- Why is storing information about a program in variables better than only storing it in the DOM?
  Using variables helps avoid code duplication and easy references to data and values you plan to use continuously throughout your code.

### Example

<p align="middle">
  <img src="assets/dom-manipulation.gif" alt="dom manipulation">
</p>

## Exercise

1. Open the provided `index.html` and carefully read the markup like you would in class.
1. Open the provided `styles.css` and carefully read the CSS rules like you would in class.
1. Open `index.html` in your browser.
1. Within `main.js`, declare a variable to store the number of times the user has clicked the button.
1. Query the DOM to retrieve the `'.hot-button'` and assign it to a new variable.
1. Query the DOM to retrieve the `'.click-count'` and assign it to a new variable.
1. Add a `'click'` event listener to your button that [increments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment) the counter variable (without re-declaring it) and logs it to the console. **Delete the console** log once you are sure the variable is being incremented with every click of the button.
1. Read about updating text in pages 216-217 of _JavaScript and jQuery_ by Duckett.
1. Read about [the `textContent` property of DOM nodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) in the MDN Web Docs.
1. Add code to your event listener that updates the `textContent` of the `'.click-count'` element each time the user clicks. See example above.
1. Read about [the `className` property of DOM elements](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) in the MDN Web Docs.
1. Add code to your event listener that updates the `className` of the `'.hot-button'` depending on the number of times it's clicked. See example above.
    - less than `4` is "cold"
    - less than `7` is "cool"
    - less than `10` is "tepid"
    - less than `13` is "warm"
    - less than `16` is "hot"
    - any more clicks and the button goes "nuclear"

## Submitting Your Solution

When your solution is complete, submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/submitting-your-solution).

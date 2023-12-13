# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To ensure code is working as expected and detect errors as they occur in your JavaScript code

- What is the purpose of events and event handling?
  To monitor what happens in the system when programming and how a block of code runs in response to events

- Are all possible parameters required to use a JavaScript method or function?
  No

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()

- What is a callback function?
  A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action

- What object is passed into an event listener callback when the event fires?
  Event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  A reference to the object onto which an event was dispatched. You could get more information about it on MDN.

- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
  The first code snippet passes a reference to the handleClick() function as the second argument to the addEventListener() method that allows it to be called when the click event happens on the element. The second code snippet, on the other hand, actually calls the handleClick() function.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```

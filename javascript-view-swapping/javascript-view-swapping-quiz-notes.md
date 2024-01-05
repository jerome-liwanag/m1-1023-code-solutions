# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  The "target" element that initiated the event

- What is the affect of setting an element to `display: none`?
  The element along with its children will not be displayed and is hidden from the screen.

- What does the `element.matches()` method take as an argument and what does it return?
  Takes in a string containing valid CSS selectors to test the element against and returns true if the element matches the selectors, false otherwise.

- How can you retrieve the value of an element's attribute?
  getAttribute()

- At what steps of the solution would it be helpful to log things to the console?
  At every step, especially steps 4-6

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  You would need to add separate event listeners for each tab element.

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  You would have to manually assign and manipulate each view element's className.

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

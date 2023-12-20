# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  No, it only creates an element but is not yet visible on the page.

- How do you add an element as a child to another element?
  appendChild()

- What do you pass as the arguments to the `element.setAttribute()` method?
  Attribute name followed by value of the attribute on specified element

- What steps do you need to take in order to insert a new element into the page?
  createElement(), setAttribute, add text content (if needed), append

- What is the `textContent` property of an element object for?
  Represents the text content of the node and its descendants

- Name two ways to set the `class` attribute of a DOM element.
  setAttribute('class', className) and element.className = specifiedClassName

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  Avoids code duplication and can reuse the function throughout your program


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

# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To ensure code is working as expected and detect errors as they occur in your JavaScript code

- What is a "model"?
  All page content as objects that can be modified

- Which "document" is being referred to in the phrase Document Object Model?
  The main "entry point" to the page

- What is the word "object" referring to in the phrase Document Object Model?
  Every HTML tag and the text inside them

- What is a DOM Tree?
  HTML represented as a tree structure of tags where HTML is the root and the head and body are its children. Nodes are leaves of the tree.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.getElementById(), elem.querySelector(css)

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  elem.querySelectorAll(css)

- Why might you want to assign the return value of a DOM query to a variable?
  To easily reference return values for the DOM query and avoid code duplication for document methods.

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  The browser needs to parse all of the elements in the HTML before being accessed.

- What does `document.querySelector()` take as its argument and what does it return?
  Takes in a specified selector or group of selectors and returns the first element within the document that matches the provided argument

- What does `document.querySelectorAll()` take as its argument and what does it return?
  Takes one or more valid CSS selector as its argument and returns a static NodeList representing a list of the document's elements that match the specified group of selectors

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

# javascript-local-storage

Persisting data to `localStorage` in the browser.

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/starting-an-exercise).

## Quiz

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you store data in `localStorage`?
  setItem()

- How do you retrieve data from `localStorage`?
  getItem()

- What data type can `localStorage` save in the browser?
  Storage objects

- When does the `'beforeunload'` event fire on the `window` object?
  When the current window, contained document, and associated resources are about to be unloaded

## Exercise

In this exercise you are given a small JavaScript application that can record todo items entered by the user. However, reloading the browser causes all of the data to be lost. You will be enhancing the application to store and recover the user's data in between page reloads.

1. Read all of the HTML in the provided `index.html`.
1. Read all of the CSS in the provided `styles.css`.
1. Open `index.html` in your browser. You should be able to add and check off some todos, but if you refresh the page, they're all lost.
1. Open your console and then find the **Application > Local Storage** section of the developer tools to see if any items are listed.
    <p align="middle">
      <img src="assets/local-storage.gif" alt="local storage">
    </p>
1. Read about [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and its [`setItem()`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem) method in the MDN Web Docs. You can try the examples in the documentation fro your browser console and then check **Application > Local Storage** again to see your saved item(s).
    <p align="middle">
      <img src="assets/testing.gif" alt="testing">
    </p>
1. Read about the [`'beforeunload'` event](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) in the MDN Web Docs.
1. Open the provided `data.js` file in your code editor.
1. [Add an event listener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) to the `window` object for the `'beforeunload'` event and in its callback function:
    1. [stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) the provided `todos` variable into a JSON string and assign the return value to a new variable named `todosJSON`
    1. [store the value of `todosJSON`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem) with a key of `'javascript-local-storage'`
1. Reload your browser once or twice and check **Application > Local Storage**. You should find an empty array for the key `'javascript-local-storage'`.
    <p align="middle">
      <img src="assets/empty-array.gif" alt="empty array">
    </p>
1. Try adding some todos to the application. You may find that although reloading the browser does save all of the todos once, it will forget about them and not use them again.

1. Read about the [`getItem()`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem) method of `localStorage` in the MDN Web Docs.
1. In `data.js`, just below the `todos` array variable:
    1. try to [get the `'javascript-local-storage'`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem) from `localStorage` and assign it to a new variable named `previousTodosJSON`
    1. `if` `previousTodosJSON` is not `null`, then:
        - [parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) the value of `previousTodosJSON` and re-assign it to the `todos` variable that was already declared as an empty array.
1. Refresh the page, you should see no errors in the console.
1. The app should now _either_ use the data from `localStorage` if it was not `null`, or reuse the previous data that was saved before the browser was refreshed. Test it out by adding some more todo items to the app and reloading the browser.

### Final Result

<p align="middle">
  <img src="assets/saved-todos.gif" alt="empty array">
</p>

## Submitting Your Solution

When your solution is complete, submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/submitting-your-solution).

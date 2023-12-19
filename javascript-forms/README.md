# javascript-forms

Using JavaScript to gather user input from HTML forms.

## Before You Begin

Be sure to check out a new branch from `main` for this exercise. Detailed instructions can be found [**here**](../../guides/starting-an-exercise).

## Quiz

After completing this exercise, you should be able to discuss or answer the following questions:

- What event is fired when a user places their cursor in a form control?
  focus

- What event is fired when a user's cursor leaves a form control?
  blur

- What event is fired as a user changes the value of a form control?
  input

- What event is fired when a user clicks the `"submit"` button within a `<form>`?
  SubmitEvent

- What does the `event.preventDefault()` method do?
  Prevents the browser from automatically reloading the page with the form's values in the URL

- What does submitting a form without `event.preventDefault()` do?
  The browser automatically reloads the page with the form's values in the URL.

- What property of a form element object contains all of the form's controls?
  elements property

- What property of a form control object gets and sets its value?
  value property

- What is one risk of writing a lot of code without checking to see if it works so far?
  You can risk having errors that can be too overwhelming to fix and prevent your program from running as expected.

- What is an advantage of having your console open when writing a JavaScript program?
  You can catch errors early or as they occur throughout your code.


## Exercise

1. Read through all of the HTML provided in `form-events.html`. Note the **`name`** attribute on each form control element.
1. Read about form element objects and form control objects in pages 572 and 573 of _JavaScript and jQuery_ by Duckett.
1. In `form-events.js` define three functions:
    1. `handleFocus(event)`:
        - logs a message that the `'focus'` event was fired.
        - logs the `event.target.name`
    1. `handleBlur(event)`:
        - logs a message that the `'blur'` event was fired.
        - logs the `event.target.name`
    1. `handleInput(event)`:
        - logs the [`event.target.name` and `event.target.value`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement)
1. In `form-events.js` (`form-events.html` loads this JavaScript) [query the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) for each form control on the page. That's two `<input>` elements and one `<textarea>` element.
1. [Add three event listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) to each of the form control elements, one for each of the event types you have written event handler functions for in the steps above:
    - [`'focus'`](https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event)
    - [`'blur'`](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)
    - [`'input'`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
1. Hopefully you have had your browser and console open the entire time you were coding to catch errors early. If not, open `form-events.html` in your browser now and play with each of your form controls to watch the events fire and/or fix errors.
    <p align="middle">
      <img src="assets/javascript-form-events.gif" alt="JavaScript form events">
    </p>
1. Re-read pages 572 and 573 of _JavaScript and jQuery_ by Duckett and compare the information with your how your code is working so far.
1. In `form-values.js` (`form-values.html` loads this JavaScript), query the DOM for the contact form.
1. Listen for the [`'submit'` event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) on the form element object.
1. In your event listener callback function, immediately call the [`preventDefault()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) method of the `event` object to prevent the browser from automatically reloading the page with the form's values in the URL.
1. Get the **[`value`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) of each** of your form controls by name via the [form's `elements` property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements): _e.g._ `theForm.elements.email.value` and store them all in one object.
1. Log the object to the console.
1. [Reset the form](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset).
1. When you submit your form, the page **should not** reload.
    <p align="middle">
      <img src="assets/javascript-form-values.gif" alt="JavaScript form values">
    </p>

## Submitting Your Solution

When your solution is complete, submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/submitting-your-solution).

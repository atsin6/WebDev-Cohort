# Document Object Model - DOM

## What is DOM?

DOM represents the structure of the webpage that is currently open in the browser. It allows user to interact with and manipulate the contents of the webpage dynamically.
These interaction and Manipulation are done using `document` object, which is provided by the browser.

> document object does not provided by node js

## ✅ What is the `document` object?

The `document` object is a built-in object provided by the browser. It represents the **webpage loaded in the browser window** and is the **entry point** to the **DOM (Document Object Model)**.

---

### 🔧 What can you do with the `document` object?

You can use it to:

- Access elements (`document.getElementById()`, `document.querySelector()`, etc.)
- Modify content (`element.textContent`, `element.innerHTML`, etc.)
- Change styles (`element.style`)
- Handle events (`element.addEventListener()`)
- Create new elements (`document.createElement()`)
- Remove or insert elements

---

### 🔍 Example:

```javascript
// Change the text of a heading
const heading = document.getElementById("main-title");
heading.textContent = "Welcome to my website!";
```

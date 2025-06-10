# Basic Quiz Website

> Web.Dev. Cohort-3 Week-3 Assignment
> **"Chalo Quiz Shuru Karte Hai 😄"**

---

### Mistakes and Learnings

- 🔄 **Displayed All Questions at Once:**
  In starting I shows all questions at once on the screen by loop through the data. But I learned that for displaying only one question at a time, I created a global variable to store index of the question and display that quesiton and also add a `click` event Listener on Next button to increment the variable that stores question no. and then display the question.

- 🧩 **Option Creation Repetition:**
  While making options of the questions. I repeat code for creating `option` element and It gets more complicated. So, chatgpt recommends to use and array of options and loop through the array and set create element and set it's properties. By doing this I reduced my code and complexity of the code.

- 📝 **Saving Responses & Score Bug:**
  For saving responses of every question I use global array `answers`. And later I also calculate the score using it when `Submit` button pressed. While making score functionality I incremented the score evey time user changes the options, so it leads to the wrong score problem

- ⏱️ **Timer and Double-Digit Format:**
  Timer using `setInterval()` and Learned How to format time as double digits (like 01:09 instead of 1:9) using `String().padStart()`

- 🔒 **Call a Function Only Once:**
  How to make a function callable only once(if interpreter reaches again, it skips it)

---

## 🛣️ Future Scope

- Add more categories and difficulty levels
- Store scores using `localStorage`
- Improve UI/UX with animations
- Add a timer auto-submit feature
- Responsive design for mobile screens

---

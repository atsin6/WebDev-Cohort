# Promises aur `.then()` Samajh Lo!

> by **Parthsarathi Dwivedi** from **100xDevs**

> **If you didn’t understand Promises and `.then()`, take 10 minutes and read this — you’ll get it.**

I'm assuming you know how async functions like `setTimeout` execute  
(kaise voh call stack se nikal ke JS thread ko execution de deta hai aur khud wait period mein chale jaata hai, phir task queue mein aa ke event handler ke through call stack mein vaapis jaata hai)

---

## 🌪️ Now the Real Part

Do you like situationships? **Nahi na.**  
Bhai ya toh haan bolo ya na, beech mein latka ke kyu rakhna hai?

**Bas, this was the inspiration (probably not lol) for some smart JS programmers to introduce Promises.**

---

## ❓Why the Need?

Kya pata async function execute hi na ho toh?

**Promises** bas isi samasya ko resolve kar deta hai, ki bhai:

- ya toh tu (koi async function) kaam poora kar ke merko bata,
- ya agar fail ho gaya toh bhi merko bata,
- gayab mat hojana (uski tarah 😬)

---

## 🔧 How Promises Work

When you create a new Promise, those smart programmers have provided us with two functions: `resolve` and `reject`.

```js
const newPromise = new Promise(function (resolve, reject) {
  // your async task
});
```

- **Why Promises exist** — because async code can’t be left hanging (like a situationship 😅).
- **How Promises work** — with `resolve()` for success and `reject()` for failure.
- **How `.then()` and `.catch()` handle** the outcome.

Let me quickly **summarize and add a few key points**, so you can refer back easily:

---

### 🔄 Promise Flow Summary

1. **Create a Promise**

   ```js
   const myPromise = new Promise((resolve, reject) => {
     // async task
     setTimeout(() => {
       // Success
       resolve("Task complete!");
       // or on error
       // reject("Something went wrong!");
     }, 1000);
   });
   ```

2. **Handle the outcome using `.then()` and `.catch()`**

   ```js
   myPromise
     .then((data) => {
       console.log("Resolved with:", data);
     })
     .catch((error) => {
       console.log("Rejected with:", error);
     });
   ```

---

### 🔍 Behind the Scenes

- `resolve()` sends data to `.then()`
- `reject()` sends data to `.catch()`
- Promises are either:

  - **Pending** (default state)
  - **Fulfilled** (when resolved)
  - **Rejected** (when rejected)

---

### 🔄 `then()` Returns a New Promise

```js
myPromise
  .then((data) => {
    console.log(data);
    return "New Data";
  })
  .then((next) => {
    console.log(next); // logs: New Data
  });
```

---

### 🧘‍♂️ Async/Await for Cleaner Syntax

```js
async function handleAsync() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  }
}
```

---

### ✅ Your Analogy Hits Hard

> _"Do you like situationships? Nahi na. Bas, this was the inspiration..."_

That’s exactly why Promises were born — clear yes or no, not left unread on WhatsApp.

---

### ✅ What to Do Next

- ✔️ Go to [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- ✔️ Try out `.finally()` too — it runs regardless of resolve or reject
- ✔️ Try chaining `.then()` and throwing errors manually to see `.catch()` in action

If you want, I can throw you a few small tasks to practice `.then`, `.catch`, and `async/await`. Want that?

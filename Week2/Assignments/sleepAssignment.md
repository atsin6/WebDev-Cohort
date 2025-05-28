# Assignment - 2

- Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
- During this time the thread should not be able to do anything else.
- the function should return a promise just like before

```
function sleep(ms) {
  return new Promise((resolve) => {
    let startTime = new Date().getTime();
    while (new Date().getTime() < startTime + ms) {}
    console.log("------End-------");
    resolve();
  });
}

module.exports = sleep;
```

## 🔄 What does `async` mean in JS?

**Async in JavaScript** means:

> "This operation will finish later, and its result will be delivered through the event loop, not immediately."

So even if you **block** the thread _inside_ a Promise, the `Promise.then()` part still runs **after the current synchronous code finishes** — because JavaScript always completes the current **call stack** before handling async callbacks.

---

### 🔁 Breakdown of your code

```js
sleep(1000).then(callback);
console.log("End");
```

Here's the sequence:

1. `sleep(1000)` starts immediately.
2. Inside `sleep`, your **busy-wait** runs and **blocks** the thread for 1000ms.
3. After the loop ends, `resolve()` is called.
4. `sleep()` returns a Promise, but the `.then(callback)` is not executed yet.
5. **`console.log("End")` runs next**, because the current call stack must finish first.
6. After the call stack is clear, the event loop picks up the `.then(callback)` and runs `callback()`.

---

### 🔍 Why does "End" print before "Freez"?

Because:

- `.then()` doesn't execute **right after** `resolve()` — it waits until the **current synchronous execution finishes**.
- The line `console.log("End")` is part of that current execution.

So even though the `resolve()` is inside a blocking operation, the `.then()` callback (`callback()`) waits until everything else is done.

---

### 🧠 Analogy

Think of the `.then()` as saying:

> "Hey JS, when you’re done with this stack of tasks, come back and run this `callback()`."

Even if it was blocking internally, that `callback()` is still deferred.

---

### ✅ Summary

- Your `sleep()` is **synchronous inside**, but it returns a **Promise**, which is async by nature.
- `.then()` runs **after** the current call stack ends — even if the promise is already resolved.
- That’s why `"End"` prints before `"Freez"`.

Let me know if you want to visualize this with a timeline!

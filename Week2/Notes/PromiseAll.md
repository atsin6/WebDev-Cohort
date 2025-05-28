## 🔷 What is `Promise.all`?

`Promise.all` is a method that takes an **array of Promises**, runs them **in parallel**, and:

- **Returns a single Promise**
- That resolves when **all** Promises are fulfilled
- Or **rejects immediately** if **any one** of them fails

---

## 🔧 Syntax

```js
Promise.all([promise1, promise2, promise3])
  .then((results) => {
    // All promises resolved
    console.log(results); // an array of results, in the same order
  })
  .catch((err) => {
    // One of the promises rejected
    console.error(err);
  });
```

---

## ✅ Behavior

### Example:

```js
const p1 = Promise.resolve(1);
const p2 = new Promise((res) => setTimeout(() => res(2), 100));
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [1, 2, 3]
});
```

- All 3 promises run **at the same time**.
- The final `then()` runs **when all are done**.
- The `values` array is in the **same order** as the input, even if some resolve faster.

---

## ❌ What if one fails?

```js
const p1 = Promise.resolve(1);
const p2 = Promise.reject("Failed!");
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3]).then(console.log).catch(console.error); // logs: "Failed!"
```

- The moment `p2` fails, `Promise.all` immediately rejects.
- The other results are ignored.

---

## ✅ Summary

| Feature           | `Promise.all([...])`                      |
| ----------------- | ----------------------------------------- |
| Input             | Array of Promises                         |
| Output            | One Promise (resolves to array of values) |
| Resolves when     | **All** promises resolve                  |
| Rejects when      | **Any one** promise rejects               |
| Runs in parallel? | ✅ Yes                                    |
| Order of results  | ✅ Matches input order                    |

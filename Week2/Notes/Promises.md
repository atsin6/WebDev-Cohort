# ! PROMISES AUR THEN SAMAJH NAHI AAYA TOH 10 MIN DO AUR YE PADHO !

> by **Parthsarathi Dwivedi** from **100xDevs**

i'm assuming you know how async function say `setTimeout` executes (kaise voh call stack se nikal ke JS thread ko execution de deta hai aur khud wait period mein chale jaata hai, phir task queue mein aa ke event handler ke through call stack mein vaapis jaata hai)

---

### now the real part: do you like situationships?

nahi na. bhai ya toh haan bolo ya na, beech mein latka ke kyu rakhna hai
bas, this was the inspiration (probably not lol) for some smart JS programmers to introduce Promises

---

### why the need?

kya pata async function execute hi na ho toh?
Promises bas isi samasya ko resolve kar deta hai, ki bhai ya toh tu (koi async function) kaam poora kar ke merko bata, ya agar fail hogaya toh bhi merko bata, gayab mat hojana (uski tarah)

---

### now, when you create a new Promise

those smart programmers have provided us with two functions (`resolve`, `reject`) called executor functions jo ki hume new Promise banate vakt pass karna hota hai IN A FUNCTION, ex:

```js
const newPromise = new Promise(function (resolve, reject) {});
```

---

### "two questions bhai, ye function kyu pass kiya? aur function ke andar resolve, reject kyu daala jo khud functions hai?"

- this is just how Promises were made, the programmers thought ki koi way mein execute karna hoga isko, and what better way to execute code in a standard, efficient manner than not using a function, bas isliye function pass karte hai; it makes the internal execution easy (maybe they just call the passed function internally and everything is done, rather than humara poora likha hua code ko read kar ke phir usko function mein ke store kar ke uss function ko call karna, messy hai, remember that they're smart programmers)

- resolve, reject kya hai?
  those are the functions provided by the smart programmers jisse Promises ka track rakh sake, kaise, let's understand:

---

recap ki Promises were made taaki hum async functions easily execute kar paaye, aaram se, and ensure ki ya toh execute ho and hume inform kare, ya toh na execute ho phir bhi hume inform kare, latka ke nahi rakhna hai
toh yahi inform karna on successful execution ya failure pe, those smart JS programmers gave us those functions

---

### "how to use them bhai?"

- jaise hi new Promise create karte ho, you pass a function right?
- inside that two arguments resolve and reject
- jo function tum pass karte ho, uske andar apna async task kar lo bhai, be jijhak
- ab success ka track rakhne ke liye tum use karte ho `resolve()`, which itself is a function, iske andar tum jo value daalte ho, voh resolved value hoti hai
- ya toh koi data ho sakta hai, ya koi string, number kuch bhi

---

### "toh ye data gaya kaha?"

this data goes to the `then()` which is called automatically when you resolve a promise;
jaise hi `resolve()` likha inside the function that you passed to the promise (you can resolve outside a promise too; read through this and then khud se samjho bahar kaise resolve kar sakte hai),
`resolve` bolta hai acha, merko call kiya chalo ab `.then()` ke paas
toh resolve goes to then with jo bhi arguments usko mile

---

### "then kya karta hai?"

remember maine kaha ki Promise ko track karta hai?
toh `resolve` ne track kara success ko and phir usne bola mai jaa raha hu `then` ke paas, ab `then` bhi kuch karega
**kya karega?** kuch bhi kar sakta hai bhai, jo tumhe karwana ho

- `then()` accepts a function jo voh execute karta hai as a callback jaise hi koi Promise resolve hota hai
- and jo argument tumne `resolve` ko diya na, `then()` ke andar ka callback function voh accept karta hai as argument, and then you can use that argument to do anything.

> **REMEMBER** : `then()` always returns a promise, agar kuch data mila hai tumhe aur tumne promise pe `.then()` ko store kara koi variable mein, toh ek naya Promise store hoga with the value jo tumne `.then()` ke andar return karwaya

---

### "isko kaise solve kare?"

\--> use `async/await`

---

### EX CODE: (try copy pasting in a text editor jisse indentation ache se dikhe)

```js
let myPromise = new Promise(function (resolve, reject) {
  // apna async task karo
  setTimeout(() => {
    console.log("timeout executed");
  }, 10000);

  // maan lo itna hi async task tha toh ab resolve kar do
  resolve("promise executed");
});

// then ko Promise ke oopar use karte hai
myPromise.then((resolvedValueJoAayi) => {
  console.log(resolvedValueJoAayi);
}); // logs 'promise executed'
```

---

### "bhai ye reject kya hota hai?"

\--> jaise `resolve` batata hai success, vaise hi `reject` batata hai failure, agar koi promise ko fail karwana ho
(**kyu aisa karoge bhai?**)
tumhe apna kaam karwana hai na, toh you use this resolve reject in try-catch blocks;
try the code you want to execute and try ke andar resolve karo aur
agar koi error hua toh catch se error pakdo and `reject(error)` kar do, MDN docs dekho; if you understood `resolve`, `reject` is a piece of cake

toh `reject(some_data_or_value_or_whatever)` and then this throws the argument to the `.catch()` block which has the same functionality as the `.then()`:
callback execute karega with the value it receives from `reject()` as argument.

---

### NOW YOU'VE UNDERSTOOD PROMISES AND .then(), .catch()

**see some examples on MDN first**, try to re-create it in a similar fashion, **khud se karo kuch AND THEN READ THE DOCS** once you've understood the basics.

---

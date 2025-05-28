// Q2 Promisified Fetch

// fetch working
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json()) // parse response body as JSON
//   .then((data) => console.log(data)) // use the data
//   .catch((error) => console.error("Error:", error));

function PromisifiedFetch(url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          reject(new Error(`HTTP error! Status: ${response.status}`));
        } else {
          resolve(response);
        }
      })
      .catch((err) => reject(err));
  });
}

PromisifiedFetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Fetch Error:", err));

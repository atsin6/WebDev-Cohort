function renderPage() {
  const homepage = document.querySelector("#homepage");

  let navbar = createNavbar();
  let inputArea = createInputArea();

  homepage.appendChild(navbar);
  homepage.appendChild(inputArea);
}
// Creating Navbar
function createNavbar() {
  const navbar = document.createElement("nav");
  const Title = document.createElement("h1");

  Title.innerHTML = "Pokémon";
  navbar.appendChild(Title);

  return navbar;
}

// Creating Input Area
function createInputArea() {
  const inputArea = document.createElement("div");
  inputArea.setAttribute("id", "inputArea");
  const form = document.createElement("form");
  form.setAttribute("id", "form");
  // form.setAttribute("action", "");

  let noOfCardsdiv = createNoOfCardsDiv();
  let categoryInput = createCategoryInput();

  const submitBtn = document.createElement("button");
  submitBtn.innerHTML = "Submit";
  submitBtn.setAttribute("id", "submitBtn");
  submitBtn.addEventListener("click", fetchingDetails);

  form.appendChild(noOfCardsdiv);
  form.appendChild(categoryInput);
  form.appendChild(submitBtn);

  inputArea.appendChild(form);
  return inputArea;
}
function createNoOfCardsDiv() {
  const noOfCardsLable = document.createElement("lable");
  noOfCardsLable.innerHTML = "Enter the no of cards";
  noOfCardsLable.setAttribute("for", "NoOfCards");

  const noOfCardsInput = document.createElement("input");
  noOfCardsInput.setAttribute("type", "number");
  noOfCardsInput.setAttribute("min", "1");
  noOfCardsInput.setAttribute("max", "10");
  noOfCardsInput.setAttribute("name", "NoOfCards");
  noOfCardsInput.setAttribute("id", "NoOfCards");
  noOfCardsInput.setAttribute("placeholder", "min: 1 & max: 10");

  const noOfCardsdiv = document.createElement("div");
  noOfCardsdiv.setAttribute("id", "noOfCardsDiv");

  noOfCardsdiv.appendChild(noOfCardsLable);
  noOfCardsdiv.appendChild(noOfCardsInput);

  return noOfCardsdiv;
}

function createCategoryInput() {
  const categoryInput = document.createElement("div");
  categoryInput.setAttribute("id", "categoryChoices");
  const lable = document.createElement("lable");
  const select = document.createElement("select");
  lable.innerHTML = "Category";
  lable.setAttribute("for", "categories");

  select.setAttribute("id", "categories");
  select.setAttribute("name", "categories");

  fetch(`https://pokeapi.co/api/v2/type/`)
    .then((response) => {
      if (response.ok) {
        return response.json(); // Parse the response data as JSON
      } else {
        throw new Error("API request failed");
      }
    })
    .then((data) => {
      const categories = data;
      //   console.log(categories);
      let noOfCategories = categories.results.length;
      for (let i = 0; i < noOfCategories; i++) {
        let categoryName = categories.results[i].name;

        const option = document.createElement("option");
        option.innerHTML = categoryName;
        option.value = categoryName;
        select.appendChild(option);
      }
    })
    .catch((error) => {
      console.error(error);
    });

  categoryInput.appendChild(lable);
  categoryInput.appendChild(select);

  // console.log(select.childNodes);

  return categoryInput;
}
renderPage();

function fetchingDetails(event) {
  event.preventDefault();
  const form = event.target.closest("form");
  // console.log(form.elements);
  let noOfCards = form.elements.NoOfCards.value;
  let pokemonCategory = form.elements.categories.value;

  fetch(`https://pokeapi.co/api/v2/type/${pokemonCategory}/`)
    .then((response) => {
      if (response.ok) return response.json();
      else throw new Error("API request failed!");
    })
    .then((data) => {
      let pokemons = data.pokemon;
      // console.log(data);
      let randomArr = generateRandomNums(noOfCards, pokemons.length);
      // console.log(randomArr);
      renderCards(pokemons, randomArr);
    })
    .catch((error) => {
      console.log(error);
    });
  // let cardArr =
}

async function renderCards(pokemons, randomArr) {
  let pokeArr = [];
  for (let i = 0; i < randomArr.length; i++) {
    pokeArr.push(pokemons[randomArr[i]].pokemon);
  }

  let cardsDiv = "";
  if (document.getElementById("cardsDiv") === null) {
    cardsDiv = document.createElement("div");
    cardsDiv.setAttribute("id", "cardsDiv");
    // console.log("creating new cards div");
  } else {
    cardsDiv = document.getElementById("cardsDiv");
    // console.log(cardsDiv);
    cardsDiv.replaceChildren();
    // console.log("cards div already exist");
  }

  for (let i = 0; i < pokeArr.length; i++) {
    let card = await renderCard(pokeArr[i]);
    cardsDiv.appendChild(card);
  }
  console.log(pokeArr);
  let homepage = document.querySelector("#homepage");
  homepage.appendChild(cardsDiv);
}

async function renderCard(poke) {
  let card = document.createElement("div");
  card.classList.add("card");
  let cardTitle = document.createElement("h6");
  cardTitle.innerHTML = poke.name;

  let imgDiv = await renderCardImg(poke);
  card.appendChild(imgDiv);
  card.appendChild(cardTitle);
  return card;
}

async function renderCardImg(poke) {
  try {
    const response = await fetch(poke.url);
    if (!response.ok) throw new Error("API failed");

    const data = await response.json();
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");
    img.src = data.sprites.front_default;
    imgDiv.appendChild(img);
    return imgDiv;
  } catch (err) {
    console.log(err);
  }
}

function generateRandomNums(nums, limit) {
  let min = 0;
  let max = limit;
  let randomArr = [];
  // let num = parseInt(Math.random() * max);
  // console.log(num);
  for (let i = 0; i < nums; i++) {
    randomArr.push(parseInt(Math.random() * max + 1));
  }
  return randomArr;
  // console.log(randomArr);
}

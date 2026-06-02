const newJokeButton = document.querySelector(".section-joke__button");
const jokeField = document.querySelector(".section-joke__joke");
const saveJokeButton = document.querySelector(".section-joke__button-saved");
//Get api joke
newJokeButton.addEventListener("click", verifyCategory);

//if alle kategorien führe getjoke aus else getCategorysProgammer , else getCategorysChuckNorris
function verifyCategory() {
  const categorySelect = document.querySelector(".section-joke__real-select");
  const selectedValue = categorySelect.value;

  // console.log("Ausgewählte Kategorie:", selectedValue);

  if (selectedValue === "all") {
    getJoke();
  } else if (selectedValue === "programmierwitze") {
    getProgrammerJoke();
  } else if (selectedValue === "chuck-norris-witze") {
    getChuckNorrisJoke();
  }
}

async function getJoke() {
  prepareLoading();

  fetch("https://witzapi.de/api/joke/")
    .then((response) => response.json())
    .then((data) => replaceJoke(data))
    .catch((error) => console.error("Fehler:", error))
    .finally(() => resetLoader());
}
async function getProgrammerJoke() {
  prepareLoading();

  fetch("https://witzapi.de/api/joke/?category=programmierwitze")
    .then((response) => response.json())
    .then((data) => replaceJoke(data))
    .catch((error) => console.error("Fehler:", error))
    .finally(() => resetLoader());
}
async function getChuckNorrisJoke() {
  prepareLoading();

  fetch("https://witzapi.de/api/joke/?category=chuck-norris-witze")
    .then((response) => response.json())
    .then((data) => replaceJoke(data))
    .catch((error) => console.error("Fehler:", error))
    .finally(() => resetLoader());
}
function prepareLoading() {
  newJokeButton.disabled = true;
  // if (jokeField) jokeField.textContent = "Witz wird geladen...";
  if (saveJokeButton) saveJokeButton.classList.remove("is-hidden");
  if (jokeField) {
    jokeField.classList.remove("is-visible");
  }
}
function resetLoader() {
  newJokeButton.disabled = false;
}
//replace a joke
async function replaceJoke(dataJoke) {
  console.log(dataJoke);
  if (jokeField && dataJoke && dataJoke[0] && dataJoke[0].text) {
    const cleanJoke = dataJoke[0].text;
    const manipulatedJoke = cleanJoke.slice(0, -1);

    jokeField.classList.add("is-animating");
    jokeField.textContent = manipulatedJoke;

    setTimeout(() => {
      jokeField.classList.remove("is-animating");
    }, 50);
  }
}

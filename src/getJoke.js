const newJokeButton = document.querySelector(".section-joke__button");
const jokeField = document.querySelector(".section-joke__joke");
const saveJokeButton = document.querySelector(".section-joke__button-saved");
//Get api joke
newJokeButton.addEventListener("click", getJoke);

async function getJoke() {
  newJokeButton.disabled = true;
  if (jokeField) jokeField.textContent = "Witz wird geladen...";
  //   setTimeout(() => {
  fetch("https://witzapi.de/api/joke/", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      replaceJoke(data);
    })
    .catch((error) => {
      console.error("Fehler:", error);
    })
    .finally(() => {
      newJokeButton.disabled = false;
    });
  //   }, 150);
  if (saveJokeButton) {
    saveJokeButton.disabled = false;
  }
}

//replace a joke
async function replaceJoke(dataJoke) {
  if (jokeField) {
    const cleanJoke = dataJoke[0].text;
    const manipulatedJoke = cleanJoke.slice(0, -1);
    jokeField.textContent = manipulatedJoke;
  }
}

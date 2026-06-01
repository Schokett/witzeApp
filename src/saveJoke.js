import { displaySavedJokes } from "./displayJoke.js";

const saveJokeButton = document.querySelector(".section-joke__button-saved");
// let savedJokes = JSON.parse(localStorage.getItem("savedJokes")) || [];

saveJokeButton.addEventListener("click", catchJoke);

function catchJoke() {
  const currentJoke = document.querySelector(".section-joke__joke").textContent;
  const savedJokes = JSON.parse(localStorage.getItem("savedJokes")) || [];

  if (currentJoke && !savedJokes.includes(currentJoke)) {
    savedJokes.push(currentJoke);
    localStorage.setItem("savedJokes", JSON.stringify(savedJokes));
    displaySavedJokes();
  }
}

const spanText = document.querySelector(".section-saved__empty-jokes");

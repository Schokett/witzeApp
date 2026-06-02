// import { displaySavedJokes } from "./displayJoke.js";
import { addSingleSavedJoke } from "./displayJoke.js";

const saveJokeButton = document.querySelector(".section-joke__button-saved");

saveJokeButton.addEventListener("click", catchJoke);

function catchJoke() {
  const currentJoke = document.querySelector(".section-joke__joke").textContent;
  const savedJokes = JSON.parse(localStorage.getItem("savedJokes")) || [];

  if (currentJoke && !savedJokes.includes(currentJoke)) {
    savedJokes.push(currentJoke);
    localStorage.setItem("savedJokes", JSON.stringify(savedJokes));
    // displaySavedJokes();
    addSingleSavedJoke(currentJoke);
  } else {
    alert("Dieser Witz ist bereits gespeichert!");
  }
}

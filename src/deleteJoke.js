import { displaySavedJokes } from "./displayJoke.js";

export function deleteJoke(jokeText) {
  const savedJokes = JSON.parse(localStorage.getItem("savedJokes")) || [];

  const updatedJokes = savedJokes.filter((joke) => joke !== jokeText);
  localStorage.setItem("savedJokes", JSON.stringify(updatedJokes));
  displaySavedJokes();

  checkEmptyState();
}

function checkEmptyState() {
  const savedJokes = JSON.parse(localStorage.getItem("savedJokes")) || [];
  const jokeContainerElement = document.querySelector(".section-saved__joke-container");
  if (savedJokes.length === 0) {
    const span = document.createElement("span");
    span.classList.add("section-saved__empty-jokes");
    span.textContent = "Noch keine Witze gespeichert.";
    jokeContainerElement.appendChild(span);
  }
}

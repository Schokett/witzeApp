const saveJokeButton = document.querySelector(".section-joke__button-saved");
let savedJokes = JSON.parse(localStorage.getItem("savedJokes")) || [];

saveJokeButton.addEventListener("click", catchJoke);

function catchJoke() {
  const currentJoke = document.querySelector(".section-joke__joke").textContent;

  savedJokes.push(currentJoke);
  saveJoke();
}
function saveJoke() {
  localStorage.setItem("savedJokes", JSON.stringify(savedJokes));
}

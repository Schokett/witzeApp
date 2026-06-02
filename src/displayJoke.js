import { deleteJoke } from "./deleteJoke.js";
const displayJokeElement = document.querySelector(".section-saved__joke-container");

export function displaySavedJokes() {
  const savedJokes = JSON.parse(localStorage.getItem("savedJokes")) || [];
  displayJokeElement.innerHTML = "";
  if (savedJokes.length === 0) {
    return;
  }
  savedJokes.forEach((jokeText) => {
    // const jokeCard = createJokeCard(jokeText);
    const jokeCard = createJokeCard(jokeText, true);

    if (jokeCard) {
      displayJokeElement.appendChild(jokeCard);
    }
  });
}
export function addSingleSavedJoke(jokeText) {
  const jokeCard = createJokeCard(jokeText, false);

  displayJokeElement.insertBefore(jokeCard, displayJokeElement.firstChild);

  setTimeout(() => {
    jokeCard.classList.add("is-visible");
  }, 150);
}

export function createJokeCard(jokeText, isInitial = false) {
  const div = document.createElement("div");
  div.classList.add("section-saved__jokes");

  if (isInitial) {
    div.classList.add("is-visible");
  }
  const p = document.createElement("p");
  p.classList.add("section-saved__joke");

  const svgDefault = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgDefault.setAttribute("viewBox", "0 0 24 24");
  svgDefault.setAttribute("fill", "currentColor");
  svgDefault.classList.add("section-saved__jokes--svg-default");

  const pathDefault = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathDefault.setAttribute("fill-rule", "evenodd");
  pathDefault.setAttribute("clip-rule", "evenodd");
  pathDefault.setAttribute(
    "d",
    "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",
  );
  svgDefault.appendChild(pathDefault);

  const svgHover = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgHover.setAttribute("fill", "none");
  svgHover.setAttribute("viewBox", "0 0 24 24");
  svgHover.setAttribute("stroke-width", "1.5");
  svgHover.setAttribute("stroke", "currentColor");
  svgHover.classList.add("section-saved__jokes--svg-hover");

  const pathHover = document.createElementNS("http://www.w3.org/2000/svg", "path");
  pathHover.setAttribute("stroke-linecap", "round");
  pathHover.setAttribute("stroke-linejoin", "round");
  pathHover.setAttribute(
    "d",
    "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
  );
  svgHover.appendChild(pathHover);

  div.addEventListener("click", () => {
    deleteJoke(jokeText);
  });
  div.appendChild(p);
  div.appendChild(svgDefault);
  div.appendChild(svgHover);

  p.textContent = jokeText;
  return div;
}
const savedJokes = JSON.parse(localStorage.getItem("savedJokes")) || [];
if (savedJokes.length > 0) {
  displaySavedJokes();
}

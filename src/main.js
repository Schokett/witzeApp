import "./styles/_global.scss";
import "./styles/section-joke.scss";
import "./styles/section-saved.scss";
import * as getJoke from "./getJoke.js";
import * as saveJoke from "./saveJoke.js";
import * as displayJoke from "./displayJoke.js";
import * as deleteJoke from "./deleteJoke.js";

//switch category
const realSelect = document.querySelector(".section-joke__real-select");
const customText = document.querySelector(".section-joke__custom-text");

if (realSelect && customText) {
  realSelect.addEventListener("change", (event) => {
    const selectedOptionText = realSelect.options[realSelect.selectedIndex].text;

    customText.textContent = selectedOptionText;
  });
}
function backgroundToggle() {
  document.body.classList.toggle("darkmode");
}

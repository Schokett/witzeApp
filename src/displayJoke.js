const displayJokeElement = document.querySelector(".section-saved__joke-container");

function displaySavedJokes() {
  const savedJokes = JSON.parse(localStorage.getItem("savedJokes")) || [];
  displayJokeElement.innerHTML = createJokeCard().outerHTML;
}
displaySavedJokes();
function createJokeCard() {
  const savedJokes = JSON.parse(localStorage.getItem("savedJokes")) || [];
  if (savedJokes.length === 0) {
    return null;
  }
  const div = document.createElement("div");
  div.classList.add("section-saved__jokes");
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

  div.appendChild(p);
  div.appendChild(svgDefault);
  div.appendChild(svgHover);

  p.textContent = savedJokes[0];
  console.log(div);
  return div;
}
// div section-saved__jokes
// p  section-saved__joke
// svg section-saved__jokes section-saved__jokes--svg-default
// svg section-saved__jokes section-saved__jokes--svg-hover

/* <div class="section-saved__jokes">
  <p class="section-saved__joke"></p>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="section-saved__jokes section-saved__jokes--svg-default">
    <path
      fill-rule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clip-rule="evenodd"
    />
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="{1.5}"
    stroke="currentColor"
    class="section-saved__jokes section-saved__jokes--svg-hover">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
</div> */

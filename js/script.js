const elemHeader = document.querySelector("header");
const elemMenu = document.querySelector(".js-menu");

elemHeader.addEventListener("click", () => {
  console.log("clicou");
  elemHeader.classList.toggle("grid-rows-[3.75rem_1fr]");
});

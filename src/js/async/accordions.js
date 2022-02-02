import '@scssFolder/async/accordions.scss'

const firstAccordion = document.querySelector('[data-open]');
const randomElements = (el) => {
  const rand = Math.ceil(Math.random() * 10);
  for (let i = 0; i < rand; i++) {
    let clone = el.cloneNode(true);
    document.getElementById("container").append(clone);
  }
};
randomElements(firstAccordion);

const accordions = document.querySelectorAll('[data-open]');
const openBtns = document.querySelectorAll('[data-btn]');

const openAccordion = (n) => {
  accordions.forEach((el, i) => {
    if (i === n) {
      el.dataset.open = !(el.dataset.open === "true");
    } else {
      el.dataset.open = false;
    }
  });
}

openBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => openAccordion(i));
})
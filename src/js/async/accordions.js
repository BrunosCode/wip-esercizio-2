import '@scssFolder/async/accordions.scss'

const accordions = document.querySelectorAll('[data-open]');
const openBtns = document.querySelectorAll('[data-btn]');

console.log(accordions);
console.log(openBtns);

const openAccordion = 
openBtns.forEach((btn, n) => {
  btn.addEventListener("click", () => {
    accordions.forEach((el, i) => {
      if (i === n) {
        el.dataset.open = !(el.dataset.open === "true");
      } else {
        el.dataset.open = false;
      }
    });
  });
})
const counterTextElement = document.getElementById("counter-text");
const buttonsElements = document.getElementById("buttons");

let counter = 0;

const showNumbers = () => {
  counterTextElement.textContent = counter;
};

const incrementOrDecrement = () => {};

counterTextElement.addEventListener("click", incrementOrDecrement);

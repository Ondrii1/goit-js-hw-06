
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counterValue = document.getElementById('value');


let currentValue = 0;


counterValue.textContent = currentValue;


decrementButton.addEventListener('click', () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});


incrementButton.addEventListener('click', () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});

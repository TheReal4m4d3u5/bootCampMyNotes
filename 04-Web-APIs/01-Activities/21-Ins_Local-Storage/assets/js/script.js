const counter = document.querySelector('#counter');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');

let countValues = localStorage.getItem('countLabel');

counter.textContent = countValues;

addButton.addEventListener('click', function () {
  if (countValues < 24) {
    countValues++;
    counter.textContent = countValues;
    localStorage.setItem('countLabel', countValues);
  }
});

subtractButton.addEventListener('click', function () {
  if (countValues > 0) {
    countValues--;
    counter.textContent = countValues;
    localStorage.setItem('countLabel', countValues);
  }
});

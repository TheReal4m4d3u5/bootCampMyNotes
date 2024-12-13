let count = 0;
const incrementEl = document.querySelector('#increment');
const decrementEl = document.querySelector('#decrement');
const countEl = document.querySelector('#count');

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button


// Listen for a click event on toggle switch
incrementEl.addEventListener('click', function () {

  count++;
  setCounterText();
});


// TODO: Add event listener to decrement button

// Listen for a click event on toggle switch
decrementEl.addEventListener('click', function () {

  if(count > 0){
    count--;
    setCounterText();
  }

});
const timerEl = document.getElementById('countdown');
const mainEl = document.getElementById('main');
const timeEl = document.querySelector('.time');

const message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
const words = message.split(' ');

secondsLeft = 10;





function countdown() {

  // Sets interval in variable
  const timerInterval = setInterval(function () {
    
    secondsLeft--;
    timeEl.textContent = secondsLeft + '';

    if (secondsLeft <= 0) {
      clearInterval(timerInterval)
      displayMessage();
      timeEl.textContent = '';
    }
  }, 1000);
}


// Displays the message one word at a time
function displayMessage() {
  let wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  const msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();

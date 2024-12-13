const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  const element = event.target;

    // Check if the clicked element was an image
    if (element.matches('container')) {
      // Get the current value of the image's data-state attribute
      const state = element.getAttribute('data-state');
  
      if (state === 'hidden') {

        // Update the image's source to the string being stored in the data-animate attribute
        element.setAttribute('data-state', shown);
      } else {

        element.setAttribute('data-state', hidden);
      }
    }
});

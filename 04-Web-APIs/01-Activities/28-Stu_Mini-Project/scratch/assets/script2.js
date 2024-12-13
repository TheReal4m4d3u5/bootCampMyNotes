// Get a reference to the button element
const urlButton = document.getElementById("urlButton");
const textButton = document.getElementById("textButton");
const board = document.getElementsByClassName("textButton");

// Add an event listener for the "click" event
urlButton.addEventListener("click", function() {

    //get text from urlText input box
        //set input box text to storage
        //get input box text 
    //Be able to drag the image
    //Place the image board

    url = document.getElementById('urlInput').value;
    setLocalStorage("urlLabel12321",url);

});


textButton.addEventListener("click", function() {

    //get text from the input box
    //Be able to drag the image
    //Place the image board


    url = document.getElementById('textInput').value;
    setLocalStorage("textLabel12321", url);
});


function setLocalStorage(label, url){
    localStorage.setItem(label, url);
}


function clearLocalStorage(){
    localStorage.clear();
}




//


// Wrap the module in a self-executing anonymous function
// to avoid leaking variables into global scope:
(function (document) {
    // Enable ECMAScript 5 strict mode within this function:
    'use strict';

    // Obtain a node list of all elements that have class="draggable":
    var draggable = document.getElementsByID('urlInput'), 
    draggableCount = draggable.length, // cache the length 
    i; // iterator placeholder

    // This function initializes the drag of an element where an
    // event ("mousedown") has occurred:
    function startDrag(evt) {

        // The element's position is based on its top left corner,
        // but the mouse coordinates are inside of it, so we need
        // to calculate the positioning difference:
        var diffX = evt.clientX - this.offsetLeft,
            diffY = evt.clientY - this.offsetTop,
            that = this; // "this" refers to the current element,
                         // let's keep it in cache for later use.

        // moveAlong places the current element (referenced by "that")
        // according to the current cursor position:
        function moveAlong(evt) {
            that.style.left = (evt.clientX - diffX) + 'px';
            that.style.top = (evt.clientY - diffY) + 'px';
        }

        // stopDrag removes event listeners from the element,
        // thus stopping the drag:
        function stopDrag() {
            document.removeEventListener('mousemove', moveAlong);
            document.removeEventListener('mouseup', stopDrag);
        }

        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('mousemove', moveAlong);
    }

    // Now that all the variables and functions are created,
    // we can go on and make the elements draggable by assigning
    // a "startDrag" function to a "mousedown" event that occurs
    // on those elements:
    for (i = 0; i < draggableCount; i += 1) {
        draggable[i].addEventListener('mousedown', startDrag);
    }
}(document));



clearLocalStorage()
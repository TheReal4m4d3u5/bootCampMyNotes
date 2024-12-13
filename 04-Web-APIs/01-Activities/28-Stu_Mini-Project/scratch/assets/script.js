// Get a reference to the button element
const urlButton = document.getElementById("urlButton");
const textButton = document.getElementById("textButton");
const board = document.getElementsByClassName("textButton");

// Add an event listener for the "click" event
textButton.addEventListener("click", function() {

    //get text from urlText input box
        //set input box text to storage
        //get input box text 
    //Be able to drag the image
    //Place the image board

    text = document.getElementById('textInput').value;
    setLocalStorage("textLabel",text);
    loadFromLocalStorage();
});

function setLocalStorage(label, text){
    localStorage.setItem(label, text);
}


function clearLocalStorage(){
    localStorage.clear();
}



// ? Function to load from local storage. This function will be called on page load.
function loadFromLocalStorage(event) {

    localStorage.getItem('textLabel')

    // ? Calculate the position so that the top left corner of the element aligns with the mouse click position
    const left = `${event.clientX - moodBoardRect.left}px`;
    const top = `${event.clientY - moodBoardRect.top}px`;

    console.log("localStorage.getItem('textLabel'): " + localStorage.getItem('textLabel'));
    let storedData = localStorage.getItem('textLabel');    
    console.log("here0");

    console.log("storedData: " + storedData);

    if (storedData) {

        console.log("here");

        const textDiv = document.createElement("div");
        console.log("here1");
        textDiv.textContent = storedData;
        textDiv.style.left = textItem.left;
        textDiv.style.top = textItem.top;
        console.log("here2");
        textDiv.classList.add("text-item", "draggable");
        console.log("here3");
        moodBoardEl.appendChild(textDiv);
        console.log("here4");
      
    }
}


clearLocalStorage();


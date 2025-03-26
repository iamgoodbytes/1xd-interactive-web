/*
 _____                _       
|  ___|              | |      
| |____   _____ _ __ | |_ ___ 
|  __\ \ / / _ \ '_ \| __/ __|
| |___\ V /  __/ | | | |_\__ \
\____/ \_/ \___|_| |_|\__|___/
                                                           
*/

// 1 — Click on the button and show an alert()
// hint: first select the button, then add an event listener to it

document.querySelector("#myButton").addEventListener("click", () => {
    alert("Button clicked!");
});

// 2 — Hover over the square (#zone1) and change its background color
document.querySelector("#zone1").addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "lightblue";
});

document.querySelector("#zone1").addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = ""; // Reset to original
});

// 3 — Click on the link to display the hidden Message
// hint: first see how the message is hidden, then do the opposite
// hint2: prevent the default behavior of the link by using .preventDefault()

document.querySelector("#showMessage").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#hiddenMessage").style.display = "block";
});

// 4 — Similar to question number 2, this time use event bubbling to change the background color of the squares in #bubbleZone
// hint: with event bubbling you can select the parent element and listen for events on its children to avoid adding multiple event listeners

document.querySelector("#bubbleZone").addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("square")) {
        event.target.style.backgroundColor = "lightgreen";
    }
});

document.querySelector("#bubbleZone").addEventListener("mouseout", (event) => {
    if (event.target.classList.contains("square")) {
        event.target.style.backgroundColor = ""; // Reset to original
    }
});

/*
  __  .__                             
_/  |_|__| _____   ___________  ______
\   __\  |/     \_/ __ \_  __ \/  ___/
 |  | |  |  Y Y  \  ___/|  | \/\___ \ 
 |__| |__|__|_|  /\___  >__|  /____  >
               \/     \/           \/ 
*/

// 1 — start a timer and show a ⏰ in #clock after 10 seconds
setTimeout(() => {
  document.querySelector("#clock").textContent = "⏰";
}, 10000);

// 2 — click the start button to show a ticking clock in #timer that goes up every second
// clicking stop should clear and stop the timer and reset the clock to 0
let timer;
let count = 0;

document.querySelector("#start").addEventListener("click", () => {
  timer = setInterval(() => {
      count++;
      document.querySelector("#timer").textContent = count;
  }, 1000);
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(timer);
  count = 0;
  document.querySelector("#timer").textContent = count;
});

// 3 — create an image gallery that shows a new image every 5 seconds and repeats that cycle
// use the images gallery1.jpg, gallery2.jpg, gallery3.jpg in the images/timers_intervals folder
// use only one img tag in the html and change its src attribute (#slideshow)
const images = [
  "images/timers_intervals/gallery1.jpg",
  "images/timers_intervals/gallery2.jpg",
  "images/timers_intervals/gallery3.jpg"
];
let index = 0;

setInterval(() => {
  document.querySelector("#slideshow").src = images[index];
  index = (index + 1) % images.length;
}, 5000);

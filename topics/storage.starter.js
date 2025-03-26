/*
          __                                      
  _______/  |_  ________________     ____   ____  
 /  ___/\   __\/  _ \_  __ \__  \   / ___\_/ __ \ 
 \___ \  |  | (  <_> )  | \// __ \_/ /_/  >  ___/ 
/____  > |__|  \____/|__|  (____  /\___  / \___  >
     \/                         \/_____/      \/ 
*/

// 1 - click on the button, then add your name to localStorage in the key "myName"
document.querySelector("#saveName").addEventListener("click", () => {
     localStorage.setItem("myName", "Your Name");
 });
 
 // 2 - click on the button to read the value of "myName" from localStorage and display it in span#myName
 document.querySelector("#showName").addEventListener("click", () => {
     const name = localStorage.getItem("myName");
     document.querySelector("#myName").textContent = name ? name : "No name found";
 });
 
 // 3 - click on remove button to remove "myName" from localStorage
 document.querySelector("#removeName").addEventListener("click", () => {
     localStorage.removeItem("myName");
     document.querySelector("#myName").textContent = "";
 });
 
 // 4 - click on the button to add a movie to localStorage in the key "movies", show movies in the ul#movieList
 document.querySelector("#addMovie").addEventListener("click", () => {
     const movie = prompt("Enter movie name:");
     if (movie) {
         let movies = JSON.parse(localStorage.getItem("movies")) || [];
         movies.push(movie);
         localStorage.setItem("movies", JSON.stringify(movies));
         renderMovies();
     }
 });
 
 // Function to render movies in the ul#movieList
 function renderMovies() {
     const movieList = document.querySelector("#movieList");
     movieList.innerHTML = "";
     const movies = JSON.parse(localStorage.getItem("movies")) || [];
     movies.forEach(movie => {
         const li = document.createElement("li");
         li.textContent = movie;
         movieList.appendChild(li);
     });
 }
 
 // Initial rendering of movies when page loads
 renderMovies();
 
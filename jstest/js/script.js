const titleElement = document.querySelector("#title");
titleElement.innerHTML = "Welcome to my Java Script Test!";



function titlechange() {
  let titleElement = document.querySelector("#title");
    titleElement.style.cssText = "color: blue; font-size: 50px; background-color: black;";
}



let textElement = document.querySelector("#text");
textElement.innerHTML = "Press y to see a magic!";



document.addEventListener("keydown", function(event) {
  if (event.key === "y") {
    document.body.style.backgroundColor = "yellow";
  }
});
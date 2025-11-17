const grid = document.querySelector("#grid-container");
const squares = [];

for (let i = 0; i < 16; i++) {
  const box = document.createElement("div");
  box.classList.add("square");

  if (i === 0) box.innerHTML = "Click me<br>to find a<br>hidden text!";

  if (i === 12) {
    box.innerHTML = "surprise!";
    box.style.color = "#4CAF50"; 
  }

  squares.push(box);
  grid.appendChild(box);
}

const order = [
  0, 1, 2, 3,
  7, 6, 5, 4,
  8, 9, 10, 11,
  15, 14, 13, 12
];

let blueMode = false;  
let animating = false;
const delay = 100;      

function transform() {
  if (animating) return;
  animating = true;

  const targetBlue = !blueMode;
  const targetColor = targetBlue ? "blue" : "#4CAF50";

  order.forEach((index, i) => {
    setTimeout(() => {
      squares[index].style.backgroundColor = targetColor;
    }, i * delay);
  });

  setTimeout(() => {
    blueMode = !blueMode;
    animating = false;
  }, order.length * delay);
}

squares[0].addEventListener("click", transform);

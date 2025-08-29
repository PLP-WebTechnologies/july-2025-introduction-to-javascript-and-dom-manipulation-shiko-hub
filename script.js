//  Part 1: Variables & Conditionals
let age = prompt("Enter your age:");
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("Sorry, you're too young.");
}

//  Part 2: Functions
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(calculateTotal(100, 0.15)); // 115
console.log(formatName("shi")); // Shi

//  Part 3: Loops
let colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log("Color:", colors[i]);
}

let countdown = 5;
while (countdown > 0) {
  console.log("Countdown:", countdown);
  countdown--;
}

//  Part 4: DOM Interactions
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("message").textContent = "You clicked the button!";
});

let list = document.getElementById("colorList");
colors.forEach(function(color) {
  let li = document.createElement("li");
  li.textContent = color;
  list.appendChild(li);
});

document.getElementById("main-title").style.color = "blue";

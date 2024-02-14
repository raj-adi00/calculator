let button;
let symbol;
const tokens = ["+", "-", "*", "/", 1, 2, 3, "=", 4, 5, 6, 7, 8, 9, 0, ".", "AC", "DEL"];
const target = document.getElementById("buttons");
for (let i = 0; i < tokens.length; i++) {
  button = document.createElement("button");
  symbol = document.createTextNode(tokens[i]);
  button.appendChild(symbol);
  button.setAttribute("class", "btn");
  target.appendChild(button);
  if (i == 7) {
    button.setAttribute("id", "equal");
    button.removeAttribute("class");
  }
  button.classList.add("font");
}
let clicked_button = document.querySelectorAll(".btn");

for (let index = 0; index <= 14; index++) {
  clicked_button[index].addEventListener("click", () => {
    document.getElementById("screen").innerText += `${clicked_button[index].innerText}`;
  })
}
clicked_button[16].addEventListener("click", () => {
  document.getElementById("screen").innerText = document.getElementById("screen").innerText.slice(0, document.getElementById("screen").innerText.length - 1);
});
clicked_button[15].addEventListener("click", () => {
  document.getElementById("screen").innerText = "";
});
document.getElementById("equal").addEventListener("click", () => {
  let operation = document.getElementById("screen").innerText;
  document.getElementById("screen").innerText = eval(operation);
});


document.addEventListener("keydown", function (e) {
  if ((e.key >= 0 && e.key <= 9) || e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/')
    document.getElementById("screen").innerText += e.key;
  else if (e.key == 'Backspace')
    document.getElementById("screen").innerText = document.getElementById("screen").innerText.slice(0, document.getElementById("screen").innerText.length - 1);
  else if (e.key == '=') {
    let oper = document.getElementById("screen").innerText;
    document.getElementById("screen").innerText = eval(oper);
  }
});

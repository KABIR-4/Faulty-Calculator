function startCalculator() {
  let a = Number(prompt("Enter the first number:"));
  let b = Number(prompt("Enter the second number:"));
  let c = prompt("Enter the operation (+, -, *, /):");

  let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
  };

  let random = Math.random();
  let resultText = "";
  let isCorrect = true;

  if (random > 0.1) {
    let result = eval(`${a} ${c} ${b}`);
    resultText = `✅ Correct Result: ${a} ${c} ${b} = ${result}`;
    document.getElementById("correctSound").play();
  } else {
    isCorrect = false;
    c = obj[c] || c;
    let result = eval(`${a} ${c} ${b}`);
    resultText = `❌ Faulty Result: ${a} ${c} ${b} = ${result}`;
    document.getElementById("wrongSound").play();
  }

  const resultDiv = document.getElementById("result");
  resultDiv.innerText = resultText;
  resultDiv.classList.add("show");

  addToHistory(resultText);
}

function addToHistory(text) {
  const li = document.createElement("li");
  li.innerText = text;
  document.getElementById("historyList").prepend(li);
}

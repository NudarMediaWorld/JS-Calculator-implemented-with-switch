let radioButtons = document.querySelectorAll("input[type='radio']");
let calculateBtn = document.querySelector(".nofill-btn");
let firstNumberInput = document.getElementById("first-number");
let secondNumberInput = document.getElementById("second-number");
let resultDiv = document.getElementById("result");

let operation;

radioButtons.forEach(radio => {
  radio.addEventListener("change", () => {
    operation = radio.value;
  });
});

calculateBtn.addEventListener("click", () => {
  let firstNumber = parseFloat(firstNumberInput.value);
  let secondNumber = parseFloat(secondNumberInput.value);

  switch (operation) {
    case "sum":
      calculateSum(firstNumber, secondNumber);
      break;
      case "difference":
      calculateDifference(firstNumber, secondNumber);
      break;
    case "product":
      calculateProduct(firstNumber, secondNumber);
      break;
    case "quotient":
      calculateQuotient(firstNumber, secondNumber);
      break;
    default:
      alert("Select an operation");
  }
});

function calculateSum(x, y) {
  let result = x + y;
  resultDiv.textContent = `Result: ${result}`;
}

function calculateDifference(x, y) {
    let result = x - y;
    resultDiv.textContent = `Result: ${result}`;
  }

function calculateProduct(x, y) {
  let result = x * y;
  resultDiv.textContent = `Result: ${result}`;
}

function calculateQuotient(x, y) {
  if (y !== 0) {
    let result = x / y;
    resultDiv.textContent = `Result: ${result}`;
  } else {
    resultDiv.textContent = "Error: Division by zero";
  }
}
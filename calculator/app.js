const links = document.querySelectorAll("link");
const toggleBtn = document.querySelectorAll("input");
const prevOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");
const deleteBtn = document.querySelector("[data-delete]");
const resultBtn = document.querySelector("[data-output]");
const resetBtn = document.querySelector("[data-reset]");
const operands = document.querySelectorAll("[data-num]");
const operatorBtn = document.querySelectorAll("[data-operator]");

let prevOperand = prevOperandText.innerText;
let currentOperand = currentOperandText.innerText;
let operation;

function reset() {
  prevOperand = "";
  currentOperand = "";
  operation = undefined;
}

function deleteOperand() {
  currentOperand = currentOperand.toString().slice(0, -1);
}

function addNumber(number) {
  if (number === "." && currentOperand.includes(".")) return;
  currentOperand = currentOperand.toString() + number.toString();
}

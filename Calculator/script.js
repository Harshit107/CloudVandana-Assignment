const numberContainer = document.getElementById("number-btn-container");
const operatorContainer = document.getElementById("operator-container");
const inputText = document.getElementById("res");

let firstNumber = null;
let secondNumber = null;
let operation = null;

const display = (data) => {
  if (data == undefined) 
    data = firstNumber +  " " + (operation === null ? " " : operation) + " " + (secondNumber === null ? " " : secondNumber);
  
  inputText.value = data;
};

const reset = () => {
  firstNumber = null;
  secondNumber = null;
  operation = null;
};

const addNumber = (data) => {
  if (firstNumber === null) firstNumber = data;
  else if (operation === null) firstNumber = firstNumber + data;
  else if (secondNumber === null) secondNumber = data;
  else secondNumber = secondNumber + data;

  display();
};

const addOperator = (operator) => {
  if (operation === null) operation = operator;
  display();
};

const calculateResult = () => {
  if (firstNumber && secondNumber && operation) {
    const res = getCalRes();
    display(res);
    reset();
  }
};

const getCalRes = () => {
  if (operation === "+")
    return parseFloat(firstNumber) + parseFloat(secondNumber);
  else if (operation === "-")
    return parseFloat(firstNumber) - parseFloat(secondNumber);
  else if (operation === "x")
    return parseFloat(firstNumber) * parseFloat(secondNumber);
  if (parseFloat(secondNumber) === 0) return alert("Can't divide by zero");
  return parseFloat(firstNumber) / parseFloat(secondNumber);
};
//adding number
numberContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("number-btn")) {
    let data = target.dataset.num;
    if (data !== "=") {
      addNumber(data);
      return;
    }
    calculateResult();
  }
});

//adding operator
operatorContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("operator-btn")) {
    let data = target.dataset.operator;
    addOperator(data);
  }
});

function onResetClick() {
 display('')
 reset();
}

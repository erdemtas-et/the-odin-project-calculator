//get inputs
const displayValue = document.getElementById("display-value");
const currentValue = document.getElementById("current-value");

//operations
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
//operations

let operationMark = "";

//operate the function
const operate = (num1, num2, operation) => {
  return operation(num1, num2);
};
//operate the function

///numbers pressed -> WORKS!
const numberPressed = () => {
  let numberButton = document.getElementsByClassName("number-buttons");
  //nodelist to Array
  numberButton = Array.from(numberButton);

  numberButton.forEach((element) => {
    element.addEventListener("click", (e) => {
      currentValue.textContent += e.target.textContent;
    });
  });
};

///number pressed

//operatorPressed -> WORKS

//one of the operator pressed
let operatorButton = document.getElementsByClassName("operator");
//nodelist to Array
operatorButton = Array.from(operatorButton);
//reach all operator buttons
operatorButton.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    value = e.target.value;
    operationMark = value;
    displayValue.textContent = currentValue.textContent;
    currentValue.textContent = "";
  });
});

numberPressed();

//equal button pressed

const equalButton = document.getElementById("equal-button");
equalButton.addEventListener("click", () => {
  if (operationMark === "add") {
    currentValue.textContent = operate(
      Number(displayValue.textContent),
      Number(currentValue.textContent),
      add
    );
  } else if (operationMark === "subtract") {
    currentValue.textContent = operate(
      Number(displayValue.textContent),
      Number(currentValue.textContent),
      subtract
    );
  } else if (operationMark === "divide") {
    if (
      currentValue.textContent === 0 ||
      currentValue.textContent === "0" ||
      currentValue.textContent === ""
    ) {
      currentValue.textContent = "Cannot divide by 0";
    } else {
      currentValue.textContent = operate(
        Number(displayValue.textContent),
        Number(currentValue.textContent),
        divide
      );
    }
  } else if (operationMark === "multiply") {
    currentValue.textContent = operate(
      Number(displayValue.textContent),
      Number(currentValue.textContent),
      multiply
    );
  }
  displayValue.textContent = "";
});

//equal button pressed

const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", () => {
  if (currentValue.textContent !== "" || displayValue.textContent !== "") {
    currentValue.textContent = "";
    displayValue.textContent = "";
  }
});

//backspace button
const backspaceButton = document.getElementById("backspace-button");
backspaceButton.addEventListener("click", () => {
  if (currentValue.textContent !== "" && currentValue.textContent !== 0) {
    let slicedString = currentValue.textContent.substring(
      0,
      currentValue.textContent.length - 1
    );
    currentValue.textContent = slicedString;
  }
});

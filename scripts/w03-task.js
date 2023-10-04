/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumber() {
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);

  document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumber);

function subtract(number1, number2) {
  return number1 - number2;
}

/* Function Expression - Subtract Numbers */
function subtractNumbers() {
  let subtractNumber1 = Number(document.querySelector("#subtract1").value);
  let subtractNumber2 = Number(document.querySelector("#subtract2").value);
  document.querySelector("#difference").value = subtract(
    subtractNumber1,
    subtractNumber2
  );
}
document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;
let multiplyNumbers = () => {
  let multiplyNum1 = Number(document.querySelector("#factor1").value);
  let multiplyNum2 = Number(document.querySelector("#factor2").value);
  return (document.querySelector("#product").value = multiply(
    multiplyNum1,
    multiplyNum2
  ));
};
document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
  return number1 / number2;
}

function divideNumbers() {
  let divideNumber1 = Number(document.querySelector("#dividend").value);
  let divideNumber2 = Number(document.querySelector("#divisor").value);

  document.querySelector("#quotient").value = divide(
    divideNumber1,
    divideNumber2
  );
}
document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

/* Decision Structure */
var currentDate = new Date();
var currentYear;
currentYear = currentDate.getFullYear();
document.getElementById("year").textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(
  (number) => number % 2 !== 0
);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(
  (number) => number % 2 === 0
);

/* Output Sum of Org. Array */
numbersArray.reduce((sum, number) => sum + number);
document.getElementById("sumOfArray").textContent = sumOfArray;

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */
numbersArray.map((number) => number * 2);
document.getElementById("multiplied").textContent = arrayBytwo;

/* Output Sum of Multiplied by 2 Array */
sumOfArraytwo = numbersArray.reduce((sum, number) => sum + number);
document.getElementById("sumOfMultiplied").textContent = sumOfArraytwo;

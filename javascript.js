function add (a, b) {
    return a+b;
}

function substract (a, b) {
    return a-b;
}

function multiply (a, b) {
    return a*b;
}

function divide (a ,b) {
    return a/b;
}

let firstNumber;
let operator;
let secondNumber;

function operate (firstNumber, operator, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        
        case "-":
            return substract(firstNumber, secondNumber);

        case "*": 
            return multiply(firstNumber, secondNumber);

        case "/": 
            return divide(firstNumber, secondNumber);
    }
}
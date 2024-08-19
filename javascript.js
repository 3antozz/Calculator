const buttonsContainer = document.querySelector(".buttons-container");
const displayContainer = document.querySelector(".display");



handleDisplayAndButtons();

function add (a, b) {
    console.log(a+b);
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

let firstNumber = 0;
let operator;
let secondNumber;
let displayValue;
let resetDisplay = false;

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

function handleDisplayAndButtons () {
    displayContainer.textContent = 0;
    buttonsContainer.addEventListener("click", (event) => {
        if (displayContainer.textContent === "0" && event.target.id !== "button-decimal" ) {
            displayContainer.textContent = "";
        }
        if (resetDisplay) {
            displayContainer.textContent = "";
            resetDisplay = false;
        }
        switch (event.target.id) {
            case "button-zero":
                displayContainer.textContent += 0;
                displayValue = +displayContainer.textContent;
                break;
            
            case "button-one":
                displayContainer.textContent += 1;
                displayValue = +displayContainer.textContent;
                break;

            case "button-two":
                displayContainer.textContent += 2;
                displayValue = +displayContainer.textContent;
                break;

            case "button-three":
                displayContainer.textContent += 3;
                displayValue = +displayContainer.textContent;
                break;

            case "button-four":
                displayContainer.textContent += 4;
                displayValue = +displayContainer.textContent;
                break;

            case "button-five":
                displayContainer.textContent += 5;
                displayValue = +displayContainer.textContent;
                break;

            case "button-six":
                displayContainer.textContent += 6;
                displayValue = +displayContainer.textContent;
                break;  
                
            case "button-seven":
                displayContainer.textContent += 7;
                displayValue = +displayContainer.textContent;
                break;

            case "button-eight":
                displayContainer.textContent += 8;
                displayValue = +displayContainer.textContent;
                break;

            case "button-nine":
                displayContainer.textContent += 9;
                displayValue = +displayContainer.textContent;
                break;

            case "button-clear":
                displayContainer.textContent = 0;
                displayValue = +displayContainer.textContent;
                firstNumber = 0;
                secondNumber = 0;
                break;

            case "button-decimal":
                displayContainer.textContent += ".";
                displayValue = +displayContainer.textContent;
                break;

            case "button-add":
                operator = "+";
                secondNumber = +displayValue;
                firstNumber = displayContainer.textContent = operate(firstNumber, operator, secondNumber);
                resetDisplay = true;
                break;

            case "button-substract":
                operator = "-";
                firstNumber = +displayValue;
                displayContainer.textContent = operate(firstNumber, operator, secondNumber);
                resetDisplay = true;
                break;

            case "button-equal":
                secondNumber = +displayValue;
                displayContainer.textContent = operate(firstNumber, operator, secondNumber);
                firstNumber = +displayContainer.textContent;
                resetDisplay = true;
                break;

        }
        if (displayContainer.textContent.length > 16) {
            displayContainer.textContent = displayContainer.textContent.substring(0, 16);
        }
        displayValue = +displayContainer.textContent;
        console.log("first number: " + firstNumber);
        console.log("second number: " + secondNumber);
    })

}
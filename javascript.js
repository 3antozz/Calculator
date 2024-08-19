const buttonsContainer = document.querySelector(".buttons-container");
const displayContainer = document.querySelector(".display");





handleDisplayAndButtons();

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
let displayValue;

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
        if (displayContainer.textContent == 0 ) {
            displayContainer.textContent = "";
        }
        switch (event.target.id) {
            case "button-zero":
                displayContainer.textContent += 0;
                break;
            
            case "button-one":
                displayContainer.textContent += 1;
                break;

            case "button-two":
                displayContainer.textContent += 2;
                break;

            case "button-three":
                displayContainer.textContent += 3;
                break;

            case "button-four":
                displayContainer.textContent += 4;
                break;

            case "button-five":
                displayContainer.textContent += 5;
                break;

            case "button-six":
                displayContainer.textContent += 6;
                break;  
                
            case "button-seven":
                displayContainer.textContent += 7;
                break;

            case "button-eight":
                displayContainer.textContent += 8;
                break;

            case "button-nine":
                displayContainer.textContent += 9;
                break;

            case "button-clear":
                displayContainer.textContent = 0;
                break;

        }
        if (displayContainer.textContent.length > 16) {
            displayContainer.textContent = displayContainer.textContent.substring(0, 16);
        }

        displayValue = +displayContainer.textContent;
        
    })

}
const buttonsContainer = document.querySelector(".buttons-container");
const displayContainer = document.querySelector(".display");

displayContainer.textContent = 0;
let firstNumber = 0;
let operator;
let secondNumber = 0;
let displayValue = 0;
let resetDisplay = false;
const keyMap = {
    '0': 'button-zero',
    '1': 'button-one',
    '2': 'button-two',
    '3': 'button-three',
    '4': 'button-four',
    '5': 'button-five',
    '6': 'button-six',
    '7': 'button-seven',
    '8': 'button-eight',
    '9': 'button-nine',
    '+': 'button-add',
    '-': 'button-substract',
    '*': 'button-multiply',
    '/': 'button-division',
    'Enter': 'button-equal',
    '=': 'button-equal',
    ' ': 'button-equal',
    'Backspace': 'button-backspace',
    '.': 'button-decimal',
    'Delete': 'button-clear'
};

buttonsContainer.addEventListener("click", (event) => {
    const buttonID = event.target.id;
    handleDisplayAndButtons(buttonID);
})
document.addEventListener("keydown", (event) => {
    const buttonID = keyMap[event.key];
    if (buttonID) {
        handleDisplayAndButtons(buttonID);
    }
})

// handleDisplayAndButtons();
// handleKeyPresses();

function add (a, b) {
    return (+a)+(+b);

}

function substract (a, b) {
    return (+a)-(+b);
}

function multiply (a, b) {
    return (+a)*(+b);
}

function divide (a ,b) {
    if (+b == 0 ) {
        return "Rak kbir 🤦🏻";
    }
    return (+a)/(+b);
}

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
function handleOperations(oper) {
    if (operator) {
        secondNumber = +displayValue;
        firstNumber = displayContainer.textContent = operate(firstNumber, operator, secondNumber);
    }
    if (!operator && displayContainer.textContent == 0) {
        displayContainer.textContent = "0";
    }
    firstNumber = +displayContainer.textContent;
    displayValue = +displayContainer.textContent;
    operator = oper;
    secondNumber = +displayValue;
    resetDisplay = true;
}


function handleDigits(digit) {
    displayContainer.textContent += digit;
    displayValue = +displayContainer.textContent;
}

function backspace () {
    displayContainer.textContent = displayContainer.textContent.substring(0, displayContainer.textContent.length-1);
    displayValue = +displayContainer.textContent;
}


function clear() {
    displayContainer.textContent = 0;
    displayValue = +displayContainer.textContent;
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
}

function decimal() {
    if (displayContainer.textContent.length == 0) {
        displayContainer.textContent += "0.";
        displayValue = +displayContainer.textContent;
    }

    if (!displayContainer.textContent.includes(".")) {
        displayContainer.textContent += ".";
        displayValue = +displayContainer.textContent;
    }
}

function equal () {
    if (!operator && displayContainer.textContent == 0) {
        return displayContainer.textContent = "0";
    }
    if (operator) {
        secondNumber = +displayValue;
        displayContainer.textContent = operate(firstNumber, operator, secondNumber);
        firstNumber = +displayContainer.textContent;
        secondNumber = +displayContainer.textContent;
        displayValue = +displayContainer.textContent;
        resetDisplay = true;
        operator = "";
    }
} 

function sign(){
    displayContainer.textContent = +displayContainer.textContent * -1;
    displayValue = +displayContainer.textContent;
}


function handleDisplayAndButtons (buttonID) {
        let buttonElement = document.querySelector("#" + buttonID);

        if (displayContainer.textContent.includes("Rak kbir") || displayContainer.textContent == NaN || displayContainer.textContent === "ERROR" ){
            displayContainer.textContent = "0";
            displayValue = 0;
        }
        if (displayContainer.textContent === "0" && buttonID !== "button-decimal" ) {
            displayContainer.textContent = "";
        }
        if (resetDisplay && buttonID !== "button-equal" && buttonID !== "button-sign" && buttonID !== "button-backspace" && operator) {
            displayContainer.textContent = "";
            resetDisplay = false;
        }

        if (buttonElement.className === "digit"){ 
            handleDigits(buttonElement.textContent);
        }

        if (buttonElement.className === "operator"){ 
            handleOperations(buttonElement.textContent);
        }

        switch (buttonID) {
            case "button-clear":
                clear();
                break;

            case "button-decimal":
                decimal();
                break;

            case "button-backspace":
                backspace();
                break;

            case "button-sign":
                sign();
                break;  
                
            case "button-equal":
                equal();
                break;
        }

        if (displayContainer.textContent.includes("e")) {
            displayValue = +displayContainer.textContent;
            displayContainer.textContent = displayValue.toExponential(4);
        }

        if (displayContainer.textContent.length > 11 && !displayContainer.textContent.includes("-")) {
            displayContainer.textContent = displayContainer.textContent.substring(0, 11);
        }
        if (displayContainer.textContent.length > 11 && displayContainer.textContent.includes("-")) {
            displayContainer.textContent = displayContainer.textContent.substring(0, 12);
        }
        if (displayContainer.textContent == "") {
            displayContainer.textContent = "0";
            displayValue = 0;
        }
        if (displayContainer.textContent === "NaN") {
            displayContainer.textContent = "ERROR";
            displayValue = 0;
        }
    

}

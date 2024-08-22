const buttonsContainer = document.querySelector(".buttons-container");
const displayContainer = document.querySelector(".display");
const historyDisplay = document.querySelector(".history");

displayContainer.textContent = 0;
historyDisplay.textContent = "";
let firstNumber = "initial";
let operator;
let secondNumber = 0;
let displayValue = 0;
let resetDisplay = false;
let showEqual = false;
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
    console.log(firstNumber + " and " + secondNumber);
    const buttonID = event.target.id;
    handleDisplayAndButtons(buttonID);
})
document.addEventListener("keydown", (event) => {
    const buttonID = keyMap[event.key];
    if (buttonID) {
        handleDisplayAndButtons(buttonID);
    }
})

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

function updateHistory (numberOne, previousOper) {
    if (showEqual){
        secondNumberDisplay = secondNumber
        historyDisplay.textContent = `${+numberOne} ${previousOper} ${secondNumberDisplay} =`;
    }
    else {
        if (secondNumber == 0) {
            secondNumberDisplay = "";
        }
        else {secondNumberDisplay = secondNumber};
        historyDisplay.textContent = `${+numberOne} ${previousOper} ${secondNumberDisplay}`;
    }
}


function handleOperations(oper) {
    if (operator && !displayValue) {
        operator = oper;
        showEqual = false;
        updateHistory (firstNumber, operator);
    }
    if (!operator && !displayValue) {
        firstNumber = +displayContainer.textContent;
        operator = oper;
        showEqual = false;
        updateHistory (firstNumber, operator);
        resetDisplay = true;
        displayValue = "";
    }
    if (!operator && displayValue) {
        if (firstNumber === "initial") {
            firstNumber = displayContainer.textContent;
            operator = oper;
            showEqual = false;
            updateHistory (firstNumber, operator);
            resetDisplay = true;
            displayValue = "";
        }
        else {
            operator = oper;
            secondNumber = displayContainer.textContent;
            firstNumber = displayContainer.textContent = operate (firstNumber, operator, secondNumber);
            secondNumber = 0;
            showEqual = false;
            updateHistory(firstNumber, oper);
            operator = "";
            resetDisplay = true;
            displayValue = "";
        }
    }
    
    if (operator && displayValue) {
        secondNumber = displayContainer.textContent;
        firstNumber = displayContainer.textContent = operate (firstNumber, operator, secondNumber);
        secondNumber = 0;
        showEqual = false;
        updateHistory(firstNumber, oper);
        operator = "";
        resetDisplay = true;
        displayValue = "";
    }
}


function handleDigits(digit) {
    displayContainer.textContent += digit;
    displayValue = +displayContainer.textContent;
}

function backspace () {
    displayContainer.textContent = displayContainer.textContent.substring(0, displayContainer.textContent.length-1);
}


function clear() {
    displayContainer.textContent = 0;
    displayValue = "";
    firstNumber = "initial";
    secondNumber = 0;
    operator = "";
    historyDisplay.textContent = "";
}

function decimal() {
    if (displayContainer.textContent.length == 0) {
        displayContainer.textContent += "0.";
    }

    if (!displayContainer.textContent.includes(".")) {
        displayContainer.textContent += ".";
    }
}

function equal () {
    if (!operator && displayContainer.textContent == 0) {
        return displayContainer.textContent = "0";
    }
    if (operator) {
        secondNumber = +displayValue;
        showEqual = true;
        updateHistory(firstNumber, operator);
        firstNumber = displayContainer.textContent = operate(firstNumber, operator, secondNumber);
        secondNumber = 0;
        displayValue = "";
        resetDisplay = true;
        operator = "";
    }
} 

function sign(){
    displayContainer.textContent = +displayContainer.textContent * -1;
}


function handleDisplayAndButtons (buttonID) {
        let buttonElement = document.querySelector(`#${buttonID}`);

        if (displayContainer.textContent.includes("Rak kbir") || displayContainer.textContent == NaN || displayContainer.textContent === "ERROR" ){
            displayContainer.textContent = "0";
            displayValue = 0;
        }
        if (displayContainer.textContent === "0" && buttonID !== "button-decimal" ) {
            displayContainer.textContent = "";
        }
        if (resetDisplay && buttonElement.className === "digit" || resetDisplay && buttonID === "button-decimal") {
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
            let exponentialNumber = +displayContainer.textContent;
            displayContainer.textContent = exponentialNumber.toExponential(4);
        }

        if (displayContainer.textContent.length > 11 && !displayContainer.textContent.includes("-")) {
            displayContainer.textContent = displayContainer.textContent.substring(0, 11);
        }
        if (displayContainer.textContent.length > 11 && displayContainer.textContent.includes("-")) {
            displayContainer.textContent = displayContainer.textContent.substring(0, 12);
        }
        if (displayContainer.textContent == "") {
            displayContainer.textContent = "0";
            displayValue = "";
        }
        if (displayContainer.textContent === "NaN") {
            displayContainer.textContent = "ERROR";
            displayValue = "";
        }
    

}

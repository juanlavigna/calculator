// Buttons
let numeros = document.querySelectorAll(".numero");
let operadores = document.querySelectorAll(".operador");
let equal = document.querySelector("#equal")

let clear = document.querySelector("#clear");
let deletE = document.querySelector("#delete");

let display = document.querySelector("#display");

let firstOp;
let secondOp;
let result;

let displayValue 

// display.textContent = 0

// Functions

function add(a, b){
    return a + b;
};

function substract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    if(b == 0){alert("Dividir por 0 ? realllyyyyy?")}
    return a / b;
};

function operate(operator, a, b){
    switch (operator) {
        case "add":
            return add(a, b);
            break;
        case "substract":
            return substract(a, b);
            break;
        case "multiply":  
            return multiply(a, b) ;
            break;
        case "divide":
            return divide(a, b);
            break;
        default:
            break;
    }
}

function clearDisplay(){
    document.location.reload()
}

// Event listeners

for(let i = 0; i < numeros.length; i++){
    numeros[i].addEventListener("click", function (){
        if(isNaN(displayValue)){display.textContent = ""};
        display.textContent += numeros[i].value
        displayValue = display.textContent 
        if(firstOp){secondOp = +display.textContent}
    })
}

let firstOperator = ""
let secondOperator
for(let i = 0; i< operadores.length; i++){
    operadores[i].addEventListener("click", function(){
        if(firstOperator){
            firstOperator = operadores[i].value
            display.textContent = operadores[i].textContent
            secondOp = 0
            displayValue = firstOperator
        }
        if(!firstOperator){
            firstOperator = operadores[i].value
            display.textContent = operadores[i].textContent
            firstOp = +displayValue
            displayValue = firstOperator
        }
    })
}

clear.addEventListener("click", clearDisplay)

equal.addEventListener("click", function (){
    display.textContent = operate(firstOperator, firstOp, secondOp)
    firstOp = +display.textContent
})





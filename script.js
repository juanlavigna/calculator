// Buttons
let numeros = document.querySelectorAll(".numero")

let clear = document.querySelector("#clear");
let deletE = document.querySelector("#delete");

let display = document.querySelector("#display")
let displayValue = 0

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
    return a / b;
};

function operate(operator, a, b){
    switch (operator) {
        case add:
            return add(a, b);
            break;
        case substract:
            return substract(a, b);
            break;
        case multiply:  
            return multiply(a, b) ;
            break;
        case divide:
            return divide(a, b);
            break;
        default:
            break;
    }
}

// Event listeners


for(let i = 0; i < numeros.length; i++){
    numeros[i].addEventListener("click", function (){
        display.textContent += numeros[i].value
        displayValue = display.textContent
    })
}

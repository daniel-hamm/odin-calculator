// add global variables
let first_number_num = 0;
let first_number_string = "0";
let second_number_num = 0;
let second_number_string = "0";
let first_or_second_num = 0;        // decide if the user enters the first or the second number; 0 = first; 1 = second
let operator = "+";                 // saves the current operator the user chooses to use

// add query selectors
const calculator_buttons = document.querySelectorAll('.calculator-row button');

// function to add two numbers
function add(num_1, num_2) {
    return num_1 + num_2;
}

// function to subtract two numbers
function subtract(num_1, num_2) {
    return num_1 - num_2;
}

// function to multiply two numbers
function multiply(num_1, num_2) {
    return num_1 * num_2;
}

// function to divide two numbers
function divide(num_1, num_2) {
    return num_1 / num_2;
}

// function to take two numbers and an operator to call the basic math functions
function operate(num_1, num_2, operator) {
    switch(operator) {
        case "+":
            return add(num_1, num_2);
            break;
        case "-":
            return subtract(num_1, num_2);
            break;
        case "*":
            return multiply(num_1, num_2);
            break;
        case "/":
            return divide(num_1, num_2);
            break;
        default:
            return "Error";
            break;
    }
}

// adds an event listener to every calculator button
calculator_buttons.forEach((button) => {
    button.addEventListener(('click'), () => {
        switch(button.id) {
            case "zero":
                console.log("0");
                break;
            case "one":
                console.log("1");
                break;
            case "two":
                console.log("2");
                break;
            case "three":
                console.log("3");
                break;
            case "four":
                console.log("4");
                break;
            case "five":
                console.log("5");
                break;
            case "six":
                console.log("6");
                break;
            case "seven":
                console.log("7");
                break;
            case "eight":
                console.log("8");
                break;
            case "nine":
                console.log("9");
                break;
            case "plus":
                operator = "+";
                console.log(operator);
                break;
            case "minus":
                operator = "-";
                console.log(operator);
                break;
            case "multiply":
                operator = "*";
                console.log(operator);
                break;
            case "divide":
                operator = "/";
                console.log(operator);
                break;
            case "clear":
                console.log("C");
                break;
            case "all-clear":
                console.log("AC");
                break;
            case "dot":
                console.log(".");
                break;
            case "equal":
                console.log("=");
                break;
        }
    });
});


// add global variables
let first_number_string = "0";
let second_number_string = "0";
let first_or_second_num = 0;        // decide if the user enters the first or the second number; 0 = first; 1 = second
let operator = "+";                 // saves the current operator the user chooses to use
let total = 0;                      // the total of the calculation

// add query selectors
const calculator_buttons = document.querySelectorAll('.calculator-row button');

// function to add two numbers
function add(num_1, num_2) {
    total = num_1 + num_2;
    return total;
}

// function to subtract two numbers
function subtract(num_1, num_2) {
    total = num_1 - num_2;
    return total;
}

// function to multiply two numbers
function multiply(num_1, num_2) {
    total = num_1 * num_2;
    return total;
}

// function to divide two numbers
function divide(num_1, num_2) {
    total = num_1 / num_2;
    return total;
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
                enterNumber("0");
                break;
            case "one":
                enterNumber("1");
                break;
            case "two":
                enterNumber("2");
                break;
            case "three":
                enterNumber("3");
                break;
            case "four":
                enterNumber("4");
                break;
            case "five":
                enterNumber("5");
                break;
            case "six":
                enterNumber("6");
                break;
            case "seven":
                enterNumber("7");
                break;
            case "eight":
                enterNumber("8");
                break;
            case "nine":
                enterNumber("9");
                break;
            case "plus":
                operator = "+";
                first_or_second_num = 1;    // if the user chooses the operator, we switch to the second number to be entered
                break;
            case "minus":
                operator = "-";
                first_or_second_num = 1;    // if the user chooses the operator, we switch to the second number to be entered
                break;
            case "multiply":
                operator = "*";
                first_or_second_num = 1;    // if the user chooses the operator, we switch to the second number to be entered
                break;
            case "divide":
                operator = "/";
                first_or_second_num = 1;    // if the user chooses the operator, we switch to the second number to be entered
                break;
            case "clear":                   
                clear();
                break;
            case "all-clear":               
                clear_all();
                break;
            case "dot":
                enterNumber(".");
                break;
            case "equal":
                console.log(operate(Number(first_number_string), Number(second_number_string), operator));
                break;
        }
    });
});

// function to catch the users number input
function enterNumber(num) {

    if(first_or_second_num === 0) {                 // the user enters the first number?

        if(first_number_string === "0")             // is the number still 0?
            first_number_string = String(num);      // overwrite it with the new number
        else                                        // is the number not 0?
            first_number_string += String(num);     // append the next number input to the number string
            
        
    } else if(first_or_second_num === 1) {          // the user enters the second number?

        if(second_number_string === "0")            // is the number still 0?
            second_number_string = String(num);     // overwrite it with the new number
        else                                        // is the number not 0?
            second_number_string += String(num);    // append the next number input to the number string

    }

}

// function to clear the current number to 0
function clear() {

    if(first_or_second_num === 0) {

        first_number_string = "0";

    } else if(first_or_second_num === 1) {

        second_number_string = "0";

    }

}

// function to reset everything to zero; input to first number
function clear_all() {

    first_number_string = "0";
    second_number_string = "0";
    first_or_second_num = 0;

}
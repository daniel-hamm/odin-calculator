// add global variables
let first_number_string = "0";
let second_number_string = "0";
let first_or_second_num = 0;        // decide if the user enters the first or the second number; 0 = first; 1 = second
let operator = "+";                 // saves the current operator the user chooses to use
let total = 0;                      // the total of the calculation

// add query selectors
const input_field = document.querySelector('#user-in-out-num');
const calculator_buttons = document.querySelectorAll('.calculator-row button');

// set the default value of the input field
input_field.innerText = "0";

// function to add two numbers
function add(num_1, num_2) {

    let value = num_1 + num_2;

    if(isInt(value))
        return value;
    else
        return value.toFixed(15);

}

// function to subtract two numbers
function subtract(num_1, num_2) {

    let value = num_1 - num_2;
    
    if(isInt(value))
        return value;
    else
        return value.toFixed(15);

}

// function to multiply two numbers
function multiply(num_1, num_2) {

    let value = num_1 * num_2;
    
    if(isInt(value))
        return value;
    else
        return value.toFixed(15);

}

// function to divide two numbers
function divide(num_1, num_2) {

    let value = num_1 / num_2;
    
    if(isInt(value)) {
        return value;
    }
    else
        return value.toFixed(15);

}

// function to take two numbers and an operator to call the basic math functions
function operate(num_1, num_2, operator) {
    switch(operator) {
        case "+":
            total = add(num_1, num_2);
            break;
        case "-":
            total = subtract(num_1, num_2);
            break;
        case "*":
            total = multiply(num_1, num_2);
            break;
        case "/":
            total = divide(num_1, num_2);
            break;
    }

    return total;

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
                operator = changeOperator("+");
                first_or_second_num = 1;    // if the user chooses the operator, we switch to the second number to be entered
                break;
            case "minus":
                operator = changeOperator("-");
                first_or_second_num = 1;    // if the user chooses the operator, we switch to the second number to be entered
                break;
            case "multiply":
                operator = changeOperator("*");
                first_or_second_num = 1;    // if the user chooses the operator, we switch to the second number to be entered
                break;
            case "divide":
                operator = changeOperator("/");
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
                equal();
                break;
        }
    });
});

// function to equal
function equal() {

    // call the operate function to calculate both numbers with the operator; convert the input strings to numbers
    operate(Number(first_number_string), Number(second_number_string), operator);

    // set the value of the input field to the calculation
    input_field.innerText = total;
}

// function to change the operator and continue the calculation
function changeOperator(operator) {

    if(first_or_second_num === 0) {                 // we are still at the first number?
        return operator;                            // just change the operator
    } else if(first_or_second_num === 1) {          // we are already at the second number input? -> happens when we do multiple calculations without hitting the equal button
        equal();                                    // run the calculation
        first_number_string = String(total);        // set the first number string to the calculation
        second_number_string = "0";                 // set the second number string to 0, so the user can append here
        return operator;                            // finally change the operator
    }
}

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

    user_input_output();

}

// function to clear the current number to 0
function clear() {

    if(first_or_second_num === 0) {

        first_number_string = "0";

    } else if(first_or_second_num === 1) {

        second_number_string = "0";

    }

    input_field.innerText = "0";

}

// function to reset everything to zero; input to first number
function clear_all() {

    first_number_string = "0";
    second_number_string = "0";
    first_or_second_num = 0;
    input_field.innerText = "0";

}

// function to update the user input / output
function user_input_output() {

    if(first_or_second_num === 0) {

        input_field.innerText = first_number_string;

    } else if(first_or_second_num === 1) {

        input_field.innerText = second_number_string;

    }

}

// function to check if we have an int (or a float)
function isInt(num) {

    if(num % 1 === 0)
        return true;
    else
        return false;

}

// function to detect if the user has pressed a key on the keyboard
window.onkeydown = function(e) {
    switch(e.keyCode) {
        case 48:                // number 0
            enterNumber("0");
            break;
        case 49:                // number 1
            enterNumber("1");
            break;
        case 50:                // number 2
            enterNumber("2");
            break;
        case 51:                // number 3
            enterNumber("3");
            break;
        case 52:                // number 4
            enterNumber("4");
            break;
        case 53:                // number 5
            enterNumber("5");
            break; 
        case 54:                // number 6
            enterNumber("6");
            break;
        case 55:                // number 7
            enterNumber("7");
            break;
        case 56:                // number 8
            enterNumber("8");
            break;
        case 57:                // number 9
            enterNumber("9");
            break;
        case 8:                 // backspace
            console.log("backspace");
            break;
        case 13:                // enter
            equal();
            break;
    }
}
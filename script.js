// add global variables
let first_number_string = "0";
let second_number_string = "0";
let first_or_second_num = 0;        // decide if the user enters the first or the second number; 0 = first; 1 = second
let operator = "+";                 // saves the current operator the user chooses to use
let total = 0;                      // the total of the calculation

// add query selectors
const input_field = document.querySelector('#number_input');
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
    input_field.setAttribute('value', total);
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

    input_field.setAttribute('value', '0');

}

// function to reset everything to zero; input to first number
function clear_all() {

    first_number_string = "0";
    second_number_string = "0";
    first_or_second_num = 0;
    input_field.setAttribute('value', '0');

}

// function to update the user input / output
function user_input_output() {

    if(first_or_second_num === 0) {

        input_field.setAttribute('value', first_number_string);

    } else if(first_or_second_num === 1) {

        input_field.setAttribute('value', second_number_string);

    }

}
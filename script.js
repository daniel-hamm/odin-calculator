// add global variables
let first_number_string = "0";      // store the first number
let second_number_string = "0";     // store the second number
let first_or_second_num = 0;        // catch if the user enters the first or the second number; 0 = first; 1 = second
let operator = "+";                 // saves the current operator the user chooses to use
let total = 0;                      // the total of the calculation
let output_state = 0;               // state 0 -> input of num1; state 1 -> input of num2; state 2 -> output of equal (backspace not allowed)

// add query selectors
const input_field = document.querySelector('#user-in-out-num');
const calculator_buttons = document.querySelectorAll('.calculator-row button');

// query to all button ids
const button_zero = document.querySelector('#zero');
const button_one = document.querySelector('#one');
const button_two = document.querySelector('#two');
const button_three = document.querySelector('#three');
const button_four = document.querySelector('#four');
const button_five = document.querySelector('#five');
const button_six = document.querySelector('#six');
const button_seven = document.querySelector('#seven');
const button_eight = document.querySelector('#eight');
const button_nine = document.querySelector('#nine');
const button_equal = document.querySelector('#equal');
const button_plus = document.querySelector('#plus');
const button_minus = document.querySelector('#minus');
const button_multiply = document.querySelector('#multiply');
const button_divide = document.querySelector('#divide');
const button_clear = document.querySelector('#clear');
const button_all_clear = document.querySelector('#all-clear');
const button_dot = document.querySelector('#dot');


// set the default value of the input field
input_field.innerText = "0";

// function to add two numbers
function add(num_1, num_2) {

    return value = num_1 + num_2;          // sum of the two numbers

}

// function to subtract two numbers
function subtract(num_1, num_2) {

    return value = num_1 - num_2;          // difference of the two numbers

}

// function to multiply two numbers
function multiply(num_1, num_2) {

    return value = num_1 * num_2;          // product of the two numbers

}

// function to divide two numbers
function divide(num_1, num_2) {

    return value = num_1 / num_2;          // quotient of the two numbers

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

    // set output state to 2, so we don't allow backspace, when the result is displayed
    output_state = 2;

    // call the operate function to calculate both numbers with the operator; convert the input strings to numbers
    operate(Number(first_number_string), Number(second_number_string), operator);

    // round the total output of the calculation to 5 decimal places
    total = Math.round(total * 100000) / 100000;

    // set the value of the input field to the calculation and limit to 15 characters
    if(total <= 999999999999999)    // is total inside the limit?
        input_field.innerText = String(total).substring(0, 15);
    else                            // if it's higher, we can't display it
        input_field.innerText = "Limit reached!"

}

// function to change the operator and continue the calculation
function changeOperator(operator) {

    if(first_or_second_num === 0) {                 // we are still at the first number?
        output_state = 1;                           // set output state to 1, so backspace removes the second num
        return operator;                            // just change the operator
    } else if(first_or_second_num === 1) {          // we are already at the second number input? -> happens when we do multiple calculations without hitting the equal button
        equal();                                    // run the calculation
        first_number_string = String(total);        // set the first number string to the calculation
        second_number_string = "0";                 // set the second number string to 0, so the user can append here
        output_state = 1;                           // set output state to 1, so backspace removes the second num
        return operator;                            // finally change the operator
    }
}

// function to catch the users number input
function enterNumber(num) {

        // only change numbers, when we are not in result output mode
        if(output_state !== 2) {
            
        if(first_or_second_num === 0) {                     // the user enters the first number?

            if(first_number_string === "0" && num != ".")   // is the number still 0?
                first_number_string = String(num);          // overwrite it with the new number
            else                                            // is the number not 0?
                first_number_string += String(num);         // append the next number input to the number string

            // limit the input to 15 characters
            first_number_string = first_number_string.substring(0, 15);     
                
            
        } else if(first_or_second_num === 1) {              // the user enters the second number?

            if(second_number_string === "0" && num != ".")  // is the number still 0?
                second_number_string = String(num);         // overwrite it with the new number
            else                                            // is the number not 0?
                second_number_string += String(num);        // append the next number input to the number string

            // limit the input to 15 characters
            second_number_string = second_number_string.substring(0, 15);

        }

        user_input_output();

    }

}

// function to clear the current number to 0
function clear() {

    // only allow clearance, when either number 1 or number 2 is displayed
    if(output_state !== 2) {

        // current number state is 0 (number 1)? 
        if(first_or_second_num === 0) {

            // reset the first number to 0
            first_number_string = "0";

            // set the displayed input / output number to 0
            input_field.innerText = first_number_string;

        // current number state is 1 (number 2)?
        } else if(first_or_second_num === 1) {

            // reset the second number to 1
            second_number_string = "0";

            // set the displayed input / output number to 0
            input_field.innerText = second_number_string;

        }

    }

}

// function to reset everything to zero; input to first number
function clear_all() {

    first_number_string = "0";
    second_number_string = "0";
    first_or_second_num = 0;
    input_field.innerText = "0";
    output_state = 0;

}

// function to update the user input / output
function user_input_output() {

    // current number state is 0 (number 1)? 
    if(first_or_second_num === 0) {

        // set the displayed input / output to the first number string
        input_field.innerText = first_number_string;

    // current number state is 1 (number 2)?
    } else if(first_or_second_num === 1) {

        // set the displayed input / output to the second number string
        input_field.innerText = second_number_string;

    }

}

// function to detect if the user has pressed a key on the keyboard
window.onkeydown = function(e) {
    switch(e.key) {
        case "0":                               // number 0
            enterNumber("0");
            button_zero.classList.add("clicked");
            break;
        case "1":                               // number 1
            enterNumber("1");
            button_one.classList.add("clicked");
            break;
        case "2":                               // number 2
            enterNumber("2");
            button_two.classList.add("clicked");
            break;
        case "3":                               // number 3
            enterNumber("3");
            button_three.classList.add("clicked");
            break;
        case "4":                               // number 4
            enterNumber("4");
            button_four.classList.add("clicked");
            break;
        case "5":                               // number 5
            enterNumber("5");
            button_five.classList.add("clicked");
            break; 
        case "6":                               // number 6
            enterNumber("6");
            button_six.classList.add("clicked");
            break;
        case "7":                               // number 7
            enterNumber("7");
            button_seven.classList.add("clicked");
            break;
        case "8":                               // number 8
            enterNumber("8");
            button_eight.classList.add("clicked");
            break;
        case "9":                               // number 9
            enterNumber("9");
            button_nine.classList.add("clicked");
            break;
        case "Backspace":                       // backspace
            backspace();
            break;
        case "Enter":                           // enter
            equal();
            button_equal.classList.add("clicked");
            break;
        case "+":                               // plus
            operator = changeOperator("+");
            button_plus.classList.add("clicked");
            first_or_second_num = 1;            // if the user chooses the operator, we switch to the second number to be entered
            break;
        case "-":                               // minus
            operator = changeOperator("-");
            button_minus.classList.add("clicked");
            first_or_second_num = 1;            // if the user chooses the operator, we switch to the second number to be entered
            break;
        case "*":                               // multiply
            operator = changeOperator("*");
            button_multiply.classList.add("clicked");
            first_or_second_num = 1;            // if the user chooses the operator, we switch to the second number to be entered
            break;
        case "/":                               // divide
            operator = changeOperator("/");
            button_divide.classList.add("clicked");
            first_or_second_num = 1;            // if the user chooses the operator, we switch to the second number to be entered
            break;
        case "a":                               // lower case a
            clear_all();
            button_all_clear.classList.add("clicked");
            break;
        case "A":                               // upper case a
            clear_all();
            button_all_clear.classList.add("clicked");
            break;
        case "c":                               // lower case c
            clear();
            button_clear.classList.add("clicked");
            break;
        case "C":                               // upper case c
            clear();
            button_clear.classList.add("clicked");
            break;
        case ".":                               // dot
            enterNumber(".");
            button_dot.classList.add("clicked");
            break;
    }
}

// function to remove the clicked class, when we release the pressed button / key on the keyboard
window.onkeyup = function(e) {
    button_zero.classList.remove("clicked");
    button_one.classList.remove("clicked");
    button_two.classList.remove("clicked");
    button_three.classList.remove("clicked");
    button_four.classList.remove("clicked");
    button_five.classList.remove("clicked");
    button_six.classList.remove("clicked");
    button_seven.classList.remove("clicked");
    button_eight.classList.remove("clicked");
    button_nine.classList.remove("clicked");
    button_equal.classList.remove("clicked");
    button_plus.classList.remove("clicked");
    button_minus.classList.remove("clicked");
    button_multiply.classList.remove("clicked");
    button_divide.classList.remove("clicked");
    button_all_clear.classList.remove("clicked");
    button_clear.classList.remove("clicked");
    button_dot.classList.remove("clicked");
}

// function for backspace removal of numbers
function backspace() {

    if(output_state === 0) {                // output state = 0? -> input state is for number 1, so removal is allowed

        // remove the last character of the string, when backspace is hit
        first_number_string = first_number_string.substring(0, first_number_string.length - 1);

        // the last character is removed? set the string to 0
        if(first_number_string === "")
            first_number_string = "0";

        // refresh the input / output field
        user_input_output();

    } else if(output_state === 1) {         // output state = 1? -> input state is for number 2, so removal is allowed

        // remove the last character of the string, when backspace is hit
        second_number_string = second_number_string.substring(0, second_number_string.length - 1);

        // the last character is removed? set the string to 0
        if(second_number_string === "")
            second_number_string = "0";

        // refresh the input / output field
        user_input_output();

    } else if(output_state === 2) {         // backspace state = 2? -> output of result, so removal by backspace is NOT allowed
        // do nothing, as backspace is not allowed here
    }

}
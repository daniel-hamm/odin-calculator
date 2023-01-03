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
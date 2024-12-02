/* 
    console calculator -_- (boring)
    WARN: this code only works in web browser, because prompt() is a browser function!
*/

// Function to perform the calculation
function calculate() {
    // Variable initialization:
    let n1;
    let n2;
    let operand;
    const ValidOperands = ['+', '-', '*', '/'];
    let OperandText;
    let result;

    // Reading inputs
    console.log('Enter a number:')
    n1 = Number(prompt());

    console.log('Enter the operand (+, -, * or /):')
    operand = prompt();

    // Checking if the operand is valid
    if (!ValidOperands.includes(operand)) {
        console.log("Invalid operand! Should be: '+', '-', '*' or '/'");
        return; // Exits the function if the operand is invalid
    }

    console.log('Enter another number:')
    n2 = Number(prompt());

    // Checking if both inputs are numbers
    if (isNaN(n1) || isNaN(n2)) {
        console.log('You should enter only numbers and a valid operand!');
        return; // Exits the function if any input is not a number
    }

    // Checking for division by zero
    if (operand === '/' && n2 === 0) {
        console.log('Error: Cannot divide by zero!');
        return; // Exits the function if division by zero is attempted
    }

    // Calculating and displaying the result
    switch (operand) {
        case '+':
            OperandText = 'plus';
            break;
        case '-':
            OperandText = 'minus';
            break;
        case '*':
            OperandText = 'times';
            break;
        case '/':
            OperandText = 'divided';
            break;
    }

    // Performing the calculation based on the operand
    switch (OperandText) {
        case 'plus':
            result = n1 + n2;
            break;
        case 'minus':
            result = n1 - n2;
            break;
        case 'times':
            result = n1 * n2;
            break;
        case 'divided':
            result = n1 / n2;
            break;
    }

    // Displaying the result
    console.log(`The result of ${n1} ${OperandText} ${n2} is equals to ${result}`);
}

// Calling the function to perform the calculation
calculate();

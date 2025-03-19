//////////////////////////////////////////////////
//Functions
//////////////////////////////////////////////////
function add(first, second)
{
    return first + second;
}

function subtract(first, second)
{
    return first - second;
}

function multiply(first, second)
{
    return first*second;
}

function divide(first, second)
{
    return first/second;
}

function operate(first, op, second)
{
    switch (op)
    {
        case '+':
            return add(first,second);
        case '-':
            return subtract(first,second);
        case '*':
            return multiply(first,second);
        case '/':
            return divide(first,second);  
        default:
            return null;
    }
}
//////////////////////////////////////////////////
//Variables
//////////////////////////////////////////////////

let firstNumber;
let operator;
let secondNumber;
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
            return add(first,second).toFixed(2);
        case '-':
            return subtract(first,second).toFixed(2);
        case '*':
            return multiply(first,second).toFixed(2);
        case '/':
            return divide(first,second).toFixed(2);  
        default:
            return null;
    }
}

function updateDisplay()
{
    let display = document.querySelector(".display")
    display.textContent = input;
}

function writeNumber(event)
{
    if (event.target.classList.contains('btn')) {
        if (input == "0") {
            input = event.target.textContent;
        } else {
            input += event.target.textContent;
        }
        updateDisplay();
    }
}

function operatorClicked(event)
{
    if (firstNumber == null)
    {
        firstNumber = Number(input);
        operator = event.target.textContent;
        input = "0";
        updateDisplay();
    }
    else if (firstNumber != null && operator != null)
    {
        secondNumber = Number(input);
        firstNumber = operate(firstNumber, operator, secondNumber);
        operator = event.target.textContent;
        input = "0";
        updateDisplay();
    }
}

function equalsClicked()
{
    if (firstNumber != null && operator != null)
    {
        secondNumber = Number(input);
        firstNumber = operate(firstNumber, operator, secondNumber);
        operator = null;
        input = firstNumber;
        updateDisplay();
    }
}

//////////////////////////////////////////////////
//Variables
//////////////////////////////////////////////////

let firstNumber;
let operator;
let secondNumber;
let input = "0";

//////////////////////////////////////////////////
//Listeners
//////////////////////////////////////////////////
let buttons = document.querySelector('.numbers');
buttons.addEventListener("click",writeNumber)

let operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', operatorClicked));

let equals = document.querySelector('.equals');
equals.addEventListener('click', equalsClicked);


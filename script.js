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
    let result;
    switch (op)
    {
        case '+':
            result = add(first, second);
            break;
        case '-':
            result = subtract(first, second);
            break;
        case '*':
            result = multiply(first, second);
            break;
        case '/':
            if (second === 0) {
                return "Nice try!";
            }
            result = divide(first, second);
            break;
        default:
            return null;
    }
    return Number.isInteger(result) ? result : result.toFixed(5);
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
    else if (input !== "0")
    {
        secondNumber = Number(input);
        firstNumber = operate(firstNumber, operator, secondNumber);
        operator = event.target.textContent;
        input = "0";
        updateDisplay();
    }
    else
    {
        operator = event.target.textContent;
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
        input = "0";
        firstNumber = null;
        secondNumber = null;
    }
}

function clearClicked()
{
    firstNumber = null;
    operator = null;
    secondNumber = null;
    input = "0";
    updateDisplay();
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

let clear = document.querySelector('.clear');
clear.addEventListener('click', clearClicked);
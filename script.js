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
let num1;
let num2;
let operator;

const add = () => ((+num1 + +num2)*100000)/100000;
const sub = () => ((+num1 - +num2)*100000)/100000;
const mul = () => ((+num1 * +num2)*100000)/100000;
const div = () => ((+num1 / +num2)*100000)/100000;

const operate = function() {
    if (operator == '+') return add();
    if (operator == '-') return sub();
    if (operator == '*') return mul();
    if (operator == '/') return div();
}
let chooseOperator = function() {
    num1 = displayText.textContent;
}

const displayText = document.getElementById('content');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('subtract');
const mulBtn = document.getElementById('multiply');
const divBtn = document.getElementById('divide');
const equalBtn = document.getElementById('equal');
const numbers = document.getElementsByClassName('numberBtn');
const clear = document.getElementById('clearBtn');
const operatorBtn = document.getElementsByClassName('operatorScript');

for (let i = 0; i < numbers.length; i++) {
    // Add the event listener to each element
    numbers[i].addEventListener('click', () => {
        if (isNaN(displayText.textContent)) displayText.textContent = '';
        displayText.textContent += numbers[i].textContent;
    });
}
for (let i = 0; i < operatorBtn.length; i++) {
    operatorBtn[i].addEventListener('click', () => {
        chooseOperator();
        operator = operatorBtn[i].textContent;
        displayText.textContent = operator;
    });
}
clear.addEventListener('click', () => displayText.textContent = '');
/* addBtn.addEventListener('click', () => {
    chooseOperator();
    operator = addBtn.textContent;
    displayText.textContent = '';
})
subBtn.addEventListener('click', () => {
    chooseOperator();
    operator = subBtn.textContent;
    displayText.textContent = '';
})
mulBtn.addEventListener('click', () => {
    chooseOperator();
    operator = mulBtn.textContent;
    displayText.textContent = '';
})
divBtn.addEventListener('click', () => {
    chooseOperator();
    operator = divBtn.textContent;
    displayText.textContent = '';
}) */
equalBtn.addEventListener('click', () => {
    num2 = displayText.textContent;
    displayText.textContent = operate();
})

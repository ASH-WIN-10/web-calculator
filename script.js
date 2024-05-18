function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function divide(num1, num2) {
	return num1 / num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}


function operate(operator, num1, num2) {
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	switch (operator) {
		case '+':
			return Math.round(add(num1, num2) * 100) / 100;
		case '-':
			return Math.round(subtract(num1, num2) * 100) / 100;
		case '/':
			return Math.round(divide(num1, num2) * 100) / 100;
		case '*':
			return Math.round(multiply(num1, num2) * 100) / 100;
	}
}


const buttons = document.querySelectorAll('.btn');
const evaluateBtn = document.querySelector('.evaluate')
const display = document.querySelector('.display');
const displayText = document.createElement('span');
display.appendChild(displayText);

buttons.forEach(button => button.addEventListener('click', (e) => {
	if (displayText.textContent === 'Infinity')
		displayText.textContent = '';
	displayText.textContent += e.target.textContent;
}));

evaluateBtn.addEventListener('click', () => {
	const string = displayText.textContent;
	const numbers = string.match(/[0-9.]+/g);
	const operator = string.match(/[^0-9.]/);
	displayText.textContent = operate(operator[0], numbers[0], numbers[1]);
});

const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');

deleteBtn.addEventListener('click', () => displayText.textContent = displayText.textContent.slice(0, -1));
clearBtn.addEventListener('click', () => displayText.textContent = '');
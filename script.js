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


function operate(expression) {
	const numbers = expression.match(/[0-9.]+/g);
	if (numbers[0].replace(/[^.]/g, '').length > 1 || numbers[1].replace(/[^.]/g, '').length > 1)
		return 'ERROR';
	const operator = expression.match(/[^0-9.]/);
	const num1 = parseFloat(numbers[0]);
	const num2 = parseFloat(numbers[1]);
	switch (operator[0]) {
		case '+':
			return Math.round((add(num1, num2)) * 100000) / 100000;
		case '-':
			return Math.round(subtract(num1, num2) * 100000) / 100000;
		case '/':
			return Math.round(divide(num1, num2) * 100000) / 100000;
		case '*':
			return Math.round(multiply(num1, num2) * 100000) / 100000;
	}
}


const display = document.querySelector('.display');
const displayText = document.createElement('span');
display.appendChild(displayText);

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', (e) => {
	if (displayText.textContent === 'Infinity' || displayText.textContent === 'ERROR')
		displayText.textContent = '';
	displayText.textContent += e.target.textContent;
}));


const operators = document.querySelectorAll('.operator');
operators.forEach(operator => operator.addEventListener('click', (e) => {
	if (displayText.textContent.replace(/[0-9.]/g, '').length === 2) 
		displayText.textContent = operate(displayText.textContent) + e.target.textContent;
}));


const evaluateBtn = document.querySelector('.evaluate');
evaluateBtn.addEventListener('click', () => {
	displayText.textContent = operate(displayText.textContent);
});


const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');
deleteBtn.addEventListener('click', () => displayText.textContent = displayText.textContent.slice(0, -1));
clearBtn.addEventListener('click', () => displayText.textContent = '');
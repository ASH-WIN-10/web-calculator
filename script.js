function add(num1, num2) {
	return num1 + num2;
};

function subtract(num1, num2) {
	return num1 - num2;
};

function divide(num1, num2) {
	return num1 / num2;
};

function multiply(num1, num2) {
	return num1 * num2;
};

function operate(operator, num1, num2) {
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	switch (operator) {
		case '+':
			return add(num1, num2);
		case '-':
			return subtract(num1, num2);
		case '/':
			return divide(num1, num2);
		case '*':
			return multiply(num1, num2);
	}
}

const buttons = document.querySelectorAll('button');
const evaluateBtn = document.querySelector('#evaluate')
const display = document.querySelector('.display');
const displayText = document.createElement('span');
display.appendChild(displayText);

buttons.forEach(button => {
	button.addEventListener('click', (e) => {
		displayText.textContent += e.target.textContent;
	});
});

evaluateBtn.addEventListener('click', () => {
	const string = displayText.textContent;
	const numbers = string.match(/[0-9.]+/g);
	const operator = string.match(/[^0-9.]/);
	console.log(numbers, operator)
	displayText.textContent = operate(operator[0], numbers[0], numbers[1]);
});
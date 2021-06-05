const calculator = document.querySelector('.calculator');
let result = document.querySelector('.result');

let currentOperation = '';
let operand1 = '';

calculator.addEventListener('click', function(event) {

  if(event.target.tagName !== 'BUTTON'){
    return;
  }

  const buttonPressed = event.target.innerText;
  switch(buttonPressed){
    case 'C':
      clear();
      break;
    case '←':
      backspace();
      break;
    case '÷':
    case '×':
    case '−':
    case '+':
      currentOperation = buttonPressed;
      operand1 = result.innerText;
      result.innerText = '0';
      break;
    case '=':
      performOperation(currentOperation, operand1, result.innerText);
      currentOperation = '';
      break;
    default:
      enterDigit(buttonPressed);
      break;
  }
});

function clear() {
  result.innerText = '0';
}

function backspace() {
  let currentResult = result.innerText;
  if(currentResult.length < 2) {
    currentResult = '0';
  }
  else {
    currentResult = currentResult.substr(0, currentResult.length - 1);
  }
  result.innerText = currentResult;
}

function enterDigit(digit) {
  if(result.innerText === '0') {
    result.innerText = digit;
  }
  else {
    result.innerText += digit;
  }
}

function performOperation(operation, operand1, operand2) {
  if(operation === '+'){
    result.innerText = parseInt(operand1) + parseInt(operand2);
  }
  else if(operation === '−'){
    result.innerText = parseInt(operand1) - parseInt(operand2);
  }
  else if(operation === '×'){
    result.innerText = parseInt(operand1) * parseInt(operand2);
  }
  else if(operation === '÷'){
    result.innerText = parseInt(operand1) / parseInt(operand2);
  }
}
const outputMain = document.querySelector('.output .main');
const outputSecond = document.querySelector('.output .second');
const outputResult = document.querySelector('.output .resultado');

const buttons = document.querySelectorAll('.calculadora button');

let oper1 = '';
let oper2 = '';
let operation = '';

function display() {
  outputMain.textContent = oper2 !== '' ? oper2 : operation;
  outputSecond.textContent = oper1 !== '' ? oper1 : '';
  outputResult.textContent = '';
}

function calcular() {
  if (oper1 !== '' && oper2 !== '' && operation !== '') {
    const result = evaluar(operation, oper1, oper2);
    oper1 = result.toString();
    oper2 = '';
    operation = '';
    display();
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    switch (value) {
      case 'C':
        oper1 = '';
        oper2 = '';
        operation = '';
        break;
      case 'DEL':
        if (oper2 !== '') {
          oper2 = oper2.slice(0, -1);
        } else if (operation !== '') {
          operation = '';
        } else if (oper1 !== '') {
          oper1 = oper1.slice(0, -1);
        }
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        if (oper1 !== '' && oper2 !== '') {
          calcular();
        }
        operation = value;
        break;
      case '=':
        calcular();
        break;
      default:
        if (operation === '') {
          oper1 += value;
        } else {
          oper2 += value;
        }
        break;
    }

    display();
  });
});

function evaluar(operation, oper1, oper2) {
  switch (operation) {
    case '+':
      return (Number(oper1) || 0) + (Number(oper2) || 0);
    case '-':
      return (Number(oper1) || 0) - (Number(oper2) || 0);
    case '*':
      return (Number(oper1) || 0) * (Number(oper2) || 0);
    case '/':
      return (Number(oper1) || 0) / (Number(oper2) || 0);
    default:
      return 0; 
  }
}

function init() {
  display();
}

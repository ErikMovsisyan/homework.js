class Calculator {
    #operand1
    #operand2
    constructor() {
        this.#operand1 = 0;
        this.#operand2 = 0;
    }
     set(a,b) {
        if (typeof a != 'number' || typeof b != 'number') {
            throw new Error('Value not a number');
        }
        this.#operand1 = a;
        this.#operand2 = b;
     }
     add() {
        return this.#operand1 + this.#operand2;
     }
     sub() {
        return this.#operand1 - this.#operand2;
     }
     mul() {
        return this.#operand1 * this.#operand2;
     }
     div() {
        if (this.#operand2 == 0) {
            throw new Error("Divisible by zero is not correct");
        }
        return this.#operand1 / this.#operand2;
     }
     modulo() {
        if (this.#operand2 == 0) {
            throw new Error("Divisible by zero is not correct");
        }
        return this.#operand1 % this.#operand2;
     }
}

const calculator = new Calculator();

function calculate(operation) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultDiv = document.getElementById('result');

  try {
    calculator.set(num1, num2);
    const result = calculator[operation]();
    resultDiv.textContent = "Result: " + result;
  } catch (err) {
    resultDiv.textContent = "Error: " + err.message;
  }
}

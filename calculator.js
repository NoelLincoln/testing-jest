class Calculator {
  add(a, b) {
    this.a = a;
    this.b = b;
    return this.a + this.b;
  }

  subtract(a, b) {
    this.a = a;
    this.b = b;
    return a - b;
  }

  divide(a, b) {
    this.a = a;
    this.b = b;
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }

  multiply(a, b) {
    this.a = a;
    this.b = b;
    return a * b;
  }
}

module.exports = Calculator;

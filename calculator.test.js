const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('should correctly add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should correctly add a positive and a negative number', () => {
      expect(calculator.add(5, -3)).toBe(2);
    });

    test('should correctly add two negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    test('should correctly subtract two positive numbers', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });

    test('should correctly subtract a positive and a negative number', () => {
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    test('should correctly subtract two negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });
  });

  describe('divide', () => {
    test('should correctly divide two positive numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should correctly handle division by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow(
        'Division by zero is not allowed'
      );
    });
  });

  describe('multiply', () => {
    test('should correctly multiply two positive numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('should correctly multiply a positive and a negative number', () => {
      expect(calculator.multiply(5, -3)).toBe(-15);
    });

    test('should correctly multiply two negative numbers', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });
});

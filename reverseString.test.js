const reverseString = require('./reverseString');

test('reverseString function should reverse the input string', () => {
  // Test cases
  expect(reverseString('Hello, World!')).toBe('!dlrow ,olleh'); // Regular string
  expect(reverseString('12345')).toBe('54321'); // Numeric string
});
